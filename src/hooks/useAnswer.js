/* eslint-disable prettier/prettier */
import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function  useAnswer(videoId) {
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        async function fetchAnswers() {
            const db = getDatabase();

            // eslint-disable-next-line prefer-template
            const answerRef = ref(db, "answers/" + videoId + "/questions");
            
            const ansQuery = query(answerRef, orderByKey());
            try {
                seterror(false);
                setloading(true);
                const snapshot = await get(ansQuery);
                setloading(false);
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    setAnswers((prevquestion) => [
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
            fetchAnswers();
        }, 2000);
    }, [videoId]);

    return {
        loading,
        error,
        answers,
    };
}
