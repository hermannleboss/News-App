import logo from "../assets/logo.svg";
import "../styles/NewsCard.scss"
import axios from "axios";

function CreateNews({isAuth, news, token, updateMode, updateModeData, updateNewsListUpdated}) {
    return (
        <div className="p-6 rounded-lg border-2 border-white rounded-lg" onClick={() => {
            updateMode("read")
            updateModeData(news)
        }}>
            <img className="h-40 rounded w-full object-full object-center mb-6"
                 src={logo} alt="content"/>
            <h2 className="text-lg font-medium title-font mb-4">{news.title}</h2>
            <p className="leading-relaxed text-base">{news.description}</p>
            {
                isAuth ?
                    <div className="flex justify-space-between mt-5">
                        <button
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            onClick={(e) => {
                                updateMode("update")
                                //console.log(news)
                                updateModeData(news)
                                e.stopPropagation();
                            }}
                        >Update
                        </button>
                        <button
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                            onClick={(e) => {
                                axios({
                                    method: 'delete',
                                    url: 'http://localhost:3001/api/news/' + news._id,
                                    headers: {
                                        "Authorization": "Bearer " + token
                                    }
                                })
                                    .then(function (response) {
                                        console.log(["log de la reponse", response]);
                                        updateMode("delete")
                                        e.stopPropagation();
                                        updateNewsListUpdated(true);
                                    })
                                    .catch(function (error) {
                                        console.log(["log de l'erreur", error]);
                                    });
                            }}
                        >Delete
                        </button>
                    </div> : ""
            }
        </div>
    )
}

export default CreateNews