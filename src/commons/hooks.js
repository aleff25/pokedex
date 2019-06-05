import { useState, useEffect } from "react";
import api from '../services/api';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchUrl = async () => {
        const response = await api.get(url);
        const json = response.data;
        setData(json);
        setLoading(false);
    };

    useEffect(() => {
        fetchUrl();
    }, []);

    return [data, isLoading];
};

export { useFetch };
