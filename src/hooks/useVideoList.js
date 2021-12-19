import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideoList(page) {
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [videos, setvideos] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    useEffect(() => {
        // react er by default effect function ta sync expect kore etake samne async diye asunc function e modified korle bug asbe
        async function fetchVideos() {
            // database related work
            const db = getDatabase(); // db initialize
            // node er ref create
            const videosRef = ref(db, 'videos'); // db name , nodename(key obj node)
            // database theke query
            const videoQuery = query(
                // ekhane parameter gula pass korbo
                videosRef,
                orderByKey(),
                // amake ensure korte hobe firebase jeno ekhaner sob gula key amai return kore
                startAt(`${page}`), // firebase rules start num ta jeno string hoi, eta bolbe koita dekhabo key data
                limitToFirst(8) // koita data per page define kore
            );
            try {
                seterror(false);
                setloading(true);
                // request firebase database using firebase get function
                const snapshot = await get(videoQuery); // by default firebase nodegula protect kore rakhe tai fetch korar age rules e giye set kore nite hobe
                setloading(false);

                // data je asce seta check dibo er jonno exist name ekta function pai firebase theke check er jonno
                if (snapshot.exists()) {
                    console.log(snapshot.val()); // json object
                    setvideos(
                        (preVideos) => [...preVideos, ...Object.values(snapshot.val())] // object theke array banalam then array take destruct korlam
                    );
                } else {
                    // when there is no value or at the end cg each time we get 8 result
                    sethasMore(false);
                }
            } catch (err) {
                setloading(false);
                console.log(err);
                seterror(true);
            }
        }

        fetchVideos();
    }, [page]);
    return {
        loading,
        error,
        videos,
        hasMore,
    };
}
