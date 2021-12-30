import NewsCard from "./NewsCard";
import {newsList} from '../datas/NewsList';

function ListNews(){
    return(
        <div>
            <h2>List Of News</h2>
            <div className="flex flex-wrap -m-4 mt-3">
                {
                    newsList.map((news)  => (
                        <NewsCard key={news.title}></NewsCard>
                    ))
                }
            </div>
        </div>
    )
}
export default ListNews