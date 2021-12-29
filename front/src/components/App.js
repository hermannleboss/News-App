import '../styles/App.css';
import Nav from './Nav';
import CreateNews from "./CreateNews";
import Action from "./Action";
import ListNews from "./ListNews";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <div className="App-content">
                <CreateNews></CreateNews>
                <ListNews></ListNews>
            </div>
        </div>
    );
}

export default App;
