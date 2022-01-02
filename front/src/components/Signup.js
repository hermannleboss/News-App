import '../styles/Login.scss';
import {useForm} from "react-hook-form";
import axios from "axios"


function Signup() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
                axios({
                    method: 'post',
                    url: 'http://localhost:3001/api/auth/signup',
                    data,
                })
                    .then(function (response) {
                        console.log("Vous êtes Inscrit")
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })}>

                <input
                    //{...register("email", {required: "This is required", pattern: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/"})}
                    {...register("email", {required: "This is required"})}
                    type="email" placeholder="Type Your Email" className="m-5 p-3"/>
                <input
                    {...register("password", {required: "This is required"})}
                    type="password" placeholder="type your password" className="m-5 p-3"/>
                <button className="bg-white p-3">Register</button>
            </form>
        </div>
    )
}

export default Signup