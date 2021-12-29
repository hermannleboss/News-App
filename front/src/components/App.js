import logo from '../assets/logo.svg';
import '../styles/App.css';
import Nav from './Nav';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Nav></Nav>
            </header>
        </div>
    );
}

export default App;
