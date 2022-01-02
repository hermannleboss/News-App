import '../styles/Login.scss'
import Login from "./Login";
import Signup from "./Signup";

function Form({authType, isAuth, updateAuth, token, updateToken, userId, updateUserId}) {
    console.log(authType)
    if (authType === "Register") {
        return (
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Signup
                    isAuth={isAuth} updateAuth={updateAuth}
                    token={token} updateToken={updateToken}
                    userId={userId} updateUserId={updateUserId}/>
                />
            </nav>
        )
    } else if (authType === "Login") {
        return (
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Login
                    isAuth={isAuth} updateAuth={updateAuth}
                    token={token} updateToken={updateToken}
                    userId={userId} updateUserId={updateUserId}/>
                />
            </nav>
        )
    }
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Login
                isAuth={isAuth} updateAuth={updateAuth}
                token={token} updateToken={updateToken}
                userId={userId} updateUserId={updateUserId}/>
            />
        </nav>
    )
}

export default Form