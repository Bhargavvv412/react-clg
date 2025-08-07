import React from "react";
import { useNavigate } from "react-router-dom";

function Changepassword() {
    var mynavigation = useNavigate()
    const [opass, setOpass] = React.useState("")
    const [npass, setNpass] = React.useState("")
    const [cpass, setCpass] = React.useState("")
    React.useEffect(() => {
        var a = localStorage.getItem("isLoggedin");
        if (!a) {
            mynavigation('/Login')
        }
    })

    const doProcess = () => {
        var lpassword = localStorage.getItem("password");
        if (lpassword == opass) {
            if (npass == cpass) {
                if (lpassword == npass) {
                    alert("can not use old password as new password");
                } else {
                    localStorage.setItem("password", npass);
                    alert("password changed");
                }
            } else {
                alert("new passeord and confirm password doesnot match");
            }
        } else {
            alert("old password does not match");
        }
    }

    return (
        <>
            <h1>Change Password</h1>
            Old Password: <input type="text" onChange={(e) => { setOpass(e.target.value) }} />
            New Password: <input type="text" onChange={(e) => { setNpass(e.target.value) }} />
            Confirm Password: <input type="text" onChange={(e) => { setCpass(e.target.value) }} />
            <input type="button" onClick={doProcess} />
        </>
    )
}
export default Changepassword;