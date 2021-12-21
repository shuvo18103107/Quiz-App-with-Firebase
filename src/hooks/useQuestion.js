/* eslint-disable prettier/prettier */
import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useQuestion(videoId) {
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [questions, setquestions] = useState([]);
    useEffect(() => {
        async function fetchQuestion() {
            const db = getDatabase();

            // eslint-disable-next-line prefer-template
            const quizRef = ref(db, "quiz/" + videoId + "/questions");
            
            const quizeQuery = query(quizRef, orderByKey());
            try {
                seterror(false);
                setloading(true);
                const snapshot = await get(quizeQuery);
                setloading(false);
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    setquestions((prevquestion) => [
                        ...prevquestion,
                        ...Object.values(snapshot.val()), // convert obj to array then spread it to array
                    ]);
                }
            } catch (err) {
                setloading(false);
                console.log(err);
                seterror(true);
            }
        }
        setTimeout(() => {
            fetchQuestion();
        }, 2000);
    }, [videoId]);

    return {
        loading,
        error,
        questions,
    };
}
