import { useEffect, useState } from 'react';

export default function useFetch(url, method, headers) {
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [result, setresult] = useState(null);
    useEffect(() => {
        async function fetchImage() {
            try {
                seterror(false);
                setloading(true);
                const response = await fetch(url, {
                    method: method || 'GET',
                    headers,
                });
                const data = await response.json();
                setloading(false);
                setresult(data);
            } catch (err) {
                setloading(false);

                seterror(true);
                console.log(err);
            }
        }
        fetchImage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { loading, error, result };
}
// dependency hisave obj hobe tai dibo na quick fix diye ignore korbo
