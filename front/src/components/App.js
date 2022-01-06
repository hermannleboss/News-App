import '../styles/App.css';
import Nav from './Nav';
import CreateNews from "./CreateNews";
import ListNews from "./ListNews";
import {useState} from "react";
import UpdateNews from "./UpdateNews";
import logo from "../assets/logo.svg";
import axios from "axios";

function App() {

    const [isAuth, updateAuth] = useState(false)
    const [token, updateToken] = useState(null)
    const [userId, updateUserId] = useState(null)
    const [newsListUpdated, updateNewsListUpdated] = useState(false)

    const [mode, updateMode] = useState("create")
    const [modeData, updateModeData] = useState(null)


    return (
        <div className="App bg-neutral-900 text-white">
            <Nav
                isAuth={isAuth} updateAuth={updateAuth}
                token={token} updateToken={updateToken}
                userId={userId} updateUserId={updateUserId}/>
            <div className="App-content">

                {
                    isAuth && mode === "create" ?
                        <CreateNews token={token} userId={userId}
                                    newsListUpdated={newsListUpdated}
                                    updateNewsListUpdated={updateNewsListUpdated}/> :
                        <div className="flex justify-space-between mt-5">
                            {
                                isAuth ?
                                    <button
                                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                        onClick={() => {
                                            updateMode("create")
                                        }}
                                    >Create
                                    </button> : ""
                            }
                        </div>

                }
                {
                    isAuth && mode === "update" ?
                        <UpdateNews token={token} userId={userId}
                                    newsListUpdated={newsListUpdated}
                                    modeData={modeData}
                                    updateNewsListUpdated={updateNewsListUpdated}/> : ""
                }
                {
                    mode === "read" ?
                        <div className="p-6 rounded-lg border-2 border-white rounded-lg">
                            <img className="h-40 rounded w-full object-full object-center mb-6"
                                 src={modeData.imageUrl} alt="content"/>
                            <h2 className="text-lg font-medium title-font mb-4">{modeData.title}</h2>
                            <p className="leading-relaxed text-base">{modeData.description}</p>
                            {
                                isAuth ?
                                    <div className="flex justify-space-between mt-5">
                                        <button
                                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                            onClick={(e) => {
                                                updateMode("update")
                                                //console.log(modeData)
                                                updateModeData(modeData)
                                                e.stopPropagation();
                                            }}
                                        >Update
                                        </button>
                                        <button
                                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                            onClick={(e) => {
                                                axios({
                                                    method: 'delete',
                                                    url: 'http://localhost:3001/api/news/' + modeData._id,
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
                        : ""
                }

                {
                    newsListUpdated ?
                        <ListNews isAuth={isAuth} token={token} newsListUpdated={newsListUpdated}
                                  updateNewsListUpdated={updateNewsListUpdated}
                                  updateMode={updateMode} updateModeData={updateModeData}/> :
                        <ListNews isAuth={isAuth} token={token} newsListUpdated={newsListUpdated}
                                  updateNewsListUpdated={updateNewsListUpdated}
                                  updateMode={updateMode} updateModeData={updateModeData}/>
                }
            </div>
        </div>
    );
}

export default App;
