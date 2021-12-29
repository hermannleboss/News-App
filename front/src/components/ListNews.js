import NewsCard from "./NewsCard";
import logo from "../assets/logo.svg";
function ListNews(){
    return(
        <div>
            <h2>List Of News</h2>
            <div className="flex flex-wrap -m-4 mt-3">
                <NewsCard></NewsCard>
                <NewsCard></NewsCard>
                <NewsCard></NewsCard>
                <NewsCard></NewsCard>
            </div>
        </div>
    )
}
export default ListNews