import React from "react";
import { Route, Router } from "react-router-dom";
import Dashboard from "./Dashboard";

function Signup() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [mobile, setMobile] = React.useState("");

    const doChange = () => {
        localStorage.setItem('name', name);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    }

    return (

        <>
            <h1>Sign Up</h1>
            name: <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            Mobile: <input
                type="text"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
            />
            email: <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            password: <input
                type="text" onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <input type="button" onClick={doChange} />
        </>
    )
}

export default Signup;