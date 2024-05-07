import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return { data, loading, error };
}