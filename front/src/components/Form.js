import '../styles/Login.scss'
import Login from "./Login";
import Signup from "./Signup";

function Form({authType}) {
console.log(authType)
    if (authType == "Register") {
        return (
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Signup></Signup>
            </nav>
        )
    } else if (authType == "Login") {
        return (
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Login></Login>
            </nav>
        )
    }
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Login></Login>
        </nav>
    )
}

export default Form