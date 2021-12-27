/* eslint-disable react/jsx-no-bind */
import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import useQuestion from '../../hooks/useQuestion';
import Answers from '../Answers';
import Miniplayer from '../Miniplayer';
import ProgressBar from '../ProgressBar';

// handling state
const initialState = null;
function reducer(state, action) {
    switch (action.type) {
        // set check on option
        case 'questions':
            action.value.forEach((questions) =>
                questions.options.forEach((option) => {
                    // eslint-disable-next-line no-param-reassign
                    option.checked = false;
                })
            );
            return action.value; // state ta check false kore option er modee questions array ta state e return korci

        case 'answers':
            // copy the questions array we get from firebase, for deeply copy here we use loadash
            // eslint-disable-next-line no-case-declarations
            const questions = _.cloneDeep(state); // db theke fetch kore anar por check false kora array of obj state
            questions[action.questionId].options[action.optionIndex].checked = action.value; // abar jokhn set korbo tokhn jate muted na hoi tai clone kore kaj korbo cg amra component render hole age false kore dibo erpr control way te form handle kore true korbo, cg amra same property valu edit korci tai clone kroe edit kora vlo
            return questions;
        default:
            return state;
    }
}

export default function Quize() {
    const history = useHistory();
    const { location } = history;

    // const { state } = location;
    // const { videoTitle } = state;
    console.log(location.data);
    const { id } = useParams();
    const { currentUser } = useAuth();
    // eslint-disable-next-line no-unused-vars
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const { loading, error, questions } = useQuestion(id);
    console.log(questions);
    // questions er obj er child e je optiongula ace segulai checked name ekta property insert korbo false hisave ,jate proe user je optuin gulai click korbe segula true kore ektat state maintain korte pari
    const [qna, dispatch] = useReducer(reducer, initialState);
    // ekhn ei qna ta amra db er questions ke modify kore pelam, checkbox e tick dile amra ei qna state ta modify kore dibo
    useEffect(() => {
        console.log('use effect render ');
        dispatch({
            type: 'questions',
            value: questions,
        });
    }, [questions]);

    function handleAnswerChange(e, index) {
        dispatch({
            type: 'answers',
            value: e.target.checked, // checkbox e by default false kore dici so click korle true hobe seta e.target.checked e pabo
            questionId: currentQuestion,
            optionIndex: index,
        });
    }
    // handle when user click the next button to get the next question

    function handleNextQuestion() {
        if (currentQuestion < questions.length) {
            setcurrentQuestion((prevCurrentQue) => prevCurrentQue + 1);
        }
    }
    // handle when user click the prev button to get the prev question
    function handleprevQuestion() {
        if (currentQuestion > 0 && currentQuestion < questions.length) {
            setcurrentQuestion((prevCurrentQue) => prevCurrentQue - 1);
        }
    }

    // submit button click korle data gula firebase e save korar jonno req korbe db ke
    async function handleSubmit() {
        // firebase e result node e currentuser er id  er against e result ta save korbo jeta qna state e update hoye ace
        console.log(currentUser);
        const { uid } = currentUser;
        // connect database
        const db = getDatabase();
        // eslint-disable-next-line prefer-template
        const resultRef = ref(db, 'result/' + uid);
        await set(resultRef, {
            // resultref tai ekhn uid er vitor dynamically ekhn updated qna state ta rakhte hobe cg user onno video te quize er ans dile sei video id onujai abar firebase e set hobe updated qna state ta .
            [id]: qna,
        });
        // result firebase  e set kore submit e click korle result page  e niya jabo
        history.push({
            // ekahne url o deowa jai abar obj o , obj use korbo cg jate url er sathe state taow pathai dite pari
            pathname: `/result/${id}`,
            state: {
                qna,
            },
        });
    }
    // calculate percentage of progressBar
    const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
    console.log(percentage);
    console.log(qna);
    return (
        <div>
            {loading && <div> Loading....</div>}
            {error && <div> There was an error🚨</div>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers
                        options={qna[currentQuestion].options}
                        handleChange={handleAnswerChange}
                        input
                    />
                    <ProgressBar
                        prevBtn={handleprevQuestion}
                        nextBtn={handleNextQuestion}
                        submit={handleSubmit}
                        percentage={percentage}
                    />
                    <Miniplayer videoId={id} />
                </>
            )}
        </div>
    );
}
// miniplayer e  title ta pathabo but link to te obj akare state e data pathano jacee na
