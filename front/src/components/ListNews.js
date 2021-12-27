import NewsCard from "./NewsCard";
import {newsList} from '../datas/NewsList';

function ListNews(){
    return(
        <div>
            <h2>List Of News</h2>
            <div className="grid grid-cols-4 gap-4 m-4 mt-3">
                {
                    newsList.map((news)  => (
                        <NewsCard key={news.title} news={news}></NewsCard>
                    ))
                }
            </div>
        </div>
    )
}
export default ListNews