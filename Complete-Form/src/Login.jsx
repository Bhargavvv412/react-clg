import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const doCheck = () => {
        var lemail = localStorage.getItem("email");
        console.log(lemail);
        navigate("/dashboard");
    }

    return (
        <>
            <h1>Login</h1>
            email: <input type="text"
                onChange={(e) => { setEmail(e.target.value) }}
            />
            password: <input type="text"
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <input
                type="button"
                value="Login"
                onClick={doCheck}
            />

        </>
    )

}
export default Login;
