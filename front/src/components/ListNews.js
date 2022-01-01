import NewsCard from "./NewsCard";
import {useEffect, useState} from "react";
import axios from "axios"

function ListNews() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/api/news`
                );
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);
    return (
        <div>
            <h2>List Of News</h2>
            <div className="grid grid-cols-4 gap-4 m-4 mt-3">

                {loading && <div>A moment please...</div>}
                {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                {data && data.map((news) => (
                    <NewsCard key={news._id} news={news}></NewsCard>
                ))
                }
            </div>
        </div>
    )
}

export default ListNews