import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <>
            <h1>Login</h1>
            email: <input type="text"
                onChange={(e) => { setEmail(e.target.value) }}
            />
            password: <input type="text"
                onChange={(e) => { setPassword(e.target.value) }}
            />

        </>
    )

}
export default Login;