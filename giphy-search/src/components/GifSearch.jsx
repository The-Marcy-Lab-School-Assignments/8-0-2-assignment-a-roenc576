import API_KEY from "../config"
import { useEffect, useState } from "react";
import { handleFetch } from "../utils";

function GifSearch({ setGifs }) {

    const [query, setQuery] = useState('');

    useEffect(() => {
        const doFetch = async () => {
            const API_URL = '/api/gifs';
            const [data, error] = await handleFetch(API_URL);
            if (data) setGifs(data.data);
            if (error) setError(error);
        };
        doFetch();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [data, error] = await handleFetch(`/api/gifs?search=${query}`);
        if (data) setGifs(data.data);
        if (error) setError(error);
        console.log(query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} id="searchInput" />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch
