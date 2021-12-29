import '../styles/Login.scss'
function Login(){
    return(
        <div>
            <form action="">
                <input type="email" placeholder="Type Your Email" className="m-5 p-3"/>
                <input type="password" placeholder="type your password" className="m-5 p-3"/>
                <button className="bg-white p-3">Submit</button>
            </form>
        </div>
    )
}
export default Login