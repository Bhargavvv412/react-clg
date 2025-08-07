import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const doCheck = () => {
        var lemail = localStorage.getItem("email");
        console.log(lemail);
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




// // Login.jsx
// import React from "react";
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const [email, setEmail] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const navigate = useNavigate();

//     const doCheck = () => {
//         const storedEmail = localStorage.getItem("email");
//         const storedPassword = localStorage.getItem("password");

//         if (email === storedEmail && password === storedPassword) {
//             localStorage.setItem("name", email); // or whatever value you want as "name"
//             navigate("/dashboard");
//         } else {
//             alert("Invalid credentials");
//         }
//     };

//     return (
//         <>
//             <h1>Login</h1>
//             Email: <input type="text" onChange={(e) => setEmail(e.target.value)} />
//             <br />
//             Password: <input type="password" onChange={(e) => setPassword(e.target.value)} />
//             <br />
//             <input type="button" value="Login" onClick={doCheck} />
//         </>
//     );
// }

// export default Login;
