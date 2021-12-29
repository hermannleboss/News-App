import '../styles/Header.scss'
import logo from '../assets/logo.svg';
import Login from "./Login"

function Nav(){
    return(
        <div className="App-header">
            <img src={logo} className="App-header--logo" alt="logo"/>
            <Login></Login>
        </div>
    )
}
export default Nav