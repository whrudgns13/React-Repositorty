import { useEffect, useState } from "react";

export const useFetch = (fetchFn, initValue = []) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [fetchData, setFetchData] = useState(initValue);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            try {
                const places = await fetchFn();
                setFetchData(places);

            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' })
            }

            setIsLoading(false);
        })();
    }, [fetchFn]);

    return { 
        isLoading,
        error,
        fetchData,
        setFetchData
    };
}