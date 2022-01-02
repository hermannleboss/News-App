import '../styles/App.css';
import Nav from './Nav';
import CreateNews from "./CreateNews";
import ListNews from "./ListNews";
import {useState} from "react";

function App() {

    const [isAuth, updateAuth] = useState(false)
    const [token, updateToken] = useState(null)
    const [userId, updateUserId] = useState(null)
    return (
        <div className="App bg-neutral-900 text-white">
            <Nav
                isAuth={isAuth} updateAuth={updateAuth}
                token={token} updateToken={updateToken}
                userId={userId} updateUserId={updateUserId}/>
            <div className="App-content">
                <CreateNews token={token} userId={userId}/>
                <ListNews/>
            </div>
        </div>
    );
}

export default App;
