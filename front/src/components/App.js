import logo from '../assets/logo.svg';
import '../styles/App.css';
import Nav from './Nav';
import CreateNews from "./CreateNews";
import Action from "./Action";
import ListNews from "./ListNews";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Nav></Nav>
                <CreateNews></CreateNews>
                <Action></Action>
                <ListNews></ListNews>
            </header>
        </div>
    );
}

export default App;
