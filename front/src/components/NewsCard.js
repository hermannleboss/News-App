import logo from "../assets/logo.svg";
import "../styles/NewsCard.scss"

function CreateNews({news}) {
    return (
        <div className="p-6 rounded-lg border-2 border-white rounded-lg">
            <img className="h-40 rounded w-full object-full object-center mb-6"
                 src={logo} alt="content"/>
            <h2 className="text-lg font-medium title-font mb-4">{news.title}</h2>
            <p className="leading-relaxed text-base">{news.description}</p>
        </div>
    )
}

export default CreateNews