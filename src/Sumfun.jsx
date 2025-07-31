import React from "react";
function Sumfun() {
    const [no1, setNo1] = React.useState(0);
    const [no2, setNo2] = React.useState(0);
    const [choice, setChoice] = React.useState("");
    const [ans, setAns] = React.useState("");

    const doProcess = () => {
        if (choice == "add") {
            var c = parseInt(no1) + parseInt(no2);
            setAns("Sum is " + c);
        } else if (choice == "sub") {
            var c = parseInt(no1) - parseInt(no2);
            setAns("Sum is " + c);
        } else {
            setAns("select Choice");
        }
    }

    return (<>
        No:1 <input type="text" onChange={(e) => setNo1(e.target.value)} />
        No:2 <input type="text" onChange={(e) => setNo2(e.target.value)} />

        choice:
        <input type="radio" onChange={() => setChoice("add")} name="txt1" value="add" />+
        <input type="radio" onChange={() => setChoice("sub")} name="txt1" value="sub" />-

        <input type="button" onClick={doProcess} value="ClickMe" />
        {ans}
    </>)
}

export default Sumfun;