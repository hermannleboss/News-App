import '../styles/Nav.scss'
import logo from '../assets/logo.svg';
import Login from "./Login"
import '../styles/index.css'

function Nav() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo}
                         fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         className="w-40 h-40 text-white p-2 App-header--logo"
                         alt="logo"/>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Login></Login>
                </nav>
            </div>
        </header>
    )
}

export default Nav