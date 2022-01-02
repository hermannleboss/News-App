import logo from "../assets/logo.svg";
import "../styles/NewsCard.scss"

function CreateNews({news, updateMode, updateModeData}) {
    return (
        <div className="p-6 rounded-lg border-2 border-white rounded-lg" onClick={() => {
            updateMode("read")
            updateModeData(news)
        }}>
            <img className="h-40 rounded w-full object-full object-center mb-6"
                 src={logo} alt="content"/>
            <h2 className="text-lg font-medium title-font mb-4">{news.title}</h2>
            <p className="leading-relaxed text-base">{news.description}</p>
            <div className="flex justify-space-between mt-5">
                <button
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={(e) => {
                        updateMode("update")
                        updateModeData(news)
                        e.stopPropagation();
                    }}
                >Update
                </button>
                <button
                    className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                    onClick={() => {
                        updateMode("delete")
                    }}
                >Delete
                </button>
            </div>
        </div>
    )
}

export default CreateNews