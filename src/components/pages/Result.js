/* eslint-disable no-param-reassign */
import _ from 'lodash';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAnswer from '../../hooks/useAnswer';
import Analysis from '../Analysis';
import Summary from '../Summary';

export default function Result() {
    // ager state e check state taow ekahne ace + id taow recieve kore oi id er agains e answer node theke data fetch kore anbo
    const { id } = useParams();
    const { location } = useHistory();
    const { loading, error, answers } = useAnswer(id);
    const { state } = location;
    const { qna } = state;
    // console.log(qna);
    console.log(answers);
    function calculate() {
        // ei function theke per question er jonno score check diye update korbo and final score dekhbo proti ta quize section er jonno + ans state ta update pabo cg je ans gula milbe sekhane cheked true diye new property set kore dibo jate analysis e kaje lage
        // 2 ta obj compare kore match value gula 2 ta array te store kore rakho
        // eslint-disable-next-line no-unused-vars
        let score = 0;

        answers.forEach((questions, index1) => {
            // 2 ta array er matching index gula ei 2 ta array te alada vabe store korbo pore compare korbo same kina
            const correctIndexes = [];
            const checkIndexes = [];
            questions.options.forEach((option, index2) => {
                if (option.correct) correctIndexes.push(index2);
                // 2nd array compare in that specific position ans store a new property based on that so that ans state now has both correct and cheked state also we store the matching indexes on 2 sepearate array
                if (qna[index1].options[index2].checked) {
                    checkIndexes.push(index2);
                    option.checked = true; // je index ta milbe qna er sathe answer state e setar option e checked and correct 2 tai true thakbe
                }
            });
            // proti question index e option array te checked and correct state er index gula same kina eta check dibo, same hole score update kore next question loop e jabe abar check dibe evabe update korte thakbe
            if (_.isEqual(correctIndexes, checkIndexes)) score += 5;
        });
        return score;
    }
    const userScore = calculate();
    return (
        <div>
            {loading && <div> Loading....</div>}
            {error && <div> There was an error🚨</div>}
            {!loading && !error && answers && answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={qna.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </div>
    );
}
