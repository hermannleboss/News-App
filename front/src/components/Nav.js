import '../styles/Nav.scss'
import logo from '../assets/logo.svg';
import Login from "./Login"
import Signup from "./Signup"
import Form from "./Form"
import '../styles/index.css'
import {useState} from "react";

function Nav() {
    const [isAuth, updateNav]=useState(false)
    const [authType, updateAuthType]=useState("Login")
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo}
                         fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         className="w-40 h-40 text-white p-2 App-header--logo"
                         alt="logo"/>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center">
                    <a className="mr-5 hover:text-gray-300" onClick={() => updateAuthType('Register')}>Register</a>
                    <a className="mr-5 hover:text-gray-300" onClick={() => updateAuthType('Login')}>Login</a>
                </nav>
                <Form authType={authType}/>
            </div>
        </header>
    )
}
export default Nav