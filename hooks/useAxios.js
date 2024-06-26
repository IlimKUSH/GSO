import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
export default function useAxios(axiosParams) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (params = axiosParams) => {
        try {
            setLoading(true);
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (e) {
            if (e) {
                setError(e);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []);

    return { response, error, loading, update: fetchData };
}