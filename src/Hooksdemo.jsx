import React from "react";

function Hookdemo() {
    const [counter, setCounter] = React.useState(0);
    const [msg, setMsg] = React.useState("");

    const incrementData = () => {
        if (counter >= 5) {
            setMsg("sorry >=5");
        } else {
            setCounter(counter + 1);
            setMsg("");
        }
    }

    const decrementData = () => {
        if (counter <= 0) {
            setMsg("sorry <= 0");
        } else {
            setCounter(counter - 1);
            setMsg("");
        }
    }

    return (<>
        <h1>Hello to hooks</h1>
        <h1> counter value is {counter}</h1>
        <input type="button" value="+" onClick={incrementData} />
        <input type="button" value="-" onClick={decrementData} />
        {msg}
    </>)
}

export default Hookdemo;