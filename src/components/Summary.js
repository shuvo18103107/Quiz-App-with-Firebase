import React, { useMemo } from 'react';
import successImg from '../assets/images/success.png';
import useFetch from '../hooks/useFetch';
import classes from '../styles/Summary.module.css';

export default function Summary({ score, noq }) {
    const getKeyword = useMemo(() => {
        if ((score / (noq * 5)) * 100 < 50) {
            return 'failed';
        }
        if ((score / (noq * 5)) * 100 < 75) {
            return 'good';
        }
        if ((score / (noq * 5)) * 100 < 100) {
            return 'very good';
        }
        return 'excellent';
    }, [noq, score]);

    const { loading, error, result } = useFetch(
        `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
        'GET',
        {
            Authorization: process.env.REACT_APP_PIXEL_API_KEY,
            mode: 'no-cors',
        }
    );
    // usefetch e amra obj pass korci jeta protibar call e newly req korbe , cg object ref type, karon ekhane headers obj ta dependency hisave ace tai 1st time call korar por usefetch e data asar por abar newly header obj call korbe ete useeffect e dependency change hobe thn again req loop e pore jabe
    const image = result ? result?.photos[0].src.medium : successImg;
    console.log(image);
    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>
            {loading && <div className={classes.badge}>Loading your badge ⌛...</div>}
            {error && <div className={classes.badge}>An error occured! ⚠️</div>}

            {!loading && !error && (
                <div className={classes.badge}>
                    <img src={image} alt="Success" />
                </div>
            )}
        </div>
    );
}
