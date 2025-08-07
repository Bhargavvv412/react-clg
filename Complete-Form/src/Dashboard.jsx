// Dashboard.jsx
import React from "react";

function Dashboard() {
    const name = localStorage.getItem("name");

    return (
        <div>
            <h1>Hello, {name}</h1>
            <input type="button" />
        </div>
    );
}

export default Dashboard;
