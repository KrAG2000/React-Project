import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase-backend/firebase-backend";
import './registration.css';

import { useNavigate } from "react-router";

function Login() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");


    const [form, setForm] = useState({
        name: "",
        position: ""
    });

    const navigate = useNavigate();
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }


    // **********register function**********
    const register = async (e) => {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };

        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ name: "", position: "" });
        navigate("/");

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        }
        catch (error) {
            console.log("Sorry", error.message);
        }
    }

    // **********signIn function**********    
    const signIn = async () => {

    }
    // **********signOut function**********
    const signOut = async () => {

    }



    return (
        <>
            {/* **********************Main card body********************* */}
            <div className="card">
                <div className="card-body">
                    <span className="google-heading" id="G">G</span>
                    <span className="google-heading" id="o1">o</span>
                    <span className="google-heading" id="o2">o</span>
                    <span className="google-heading" id="g">g</span>
                    <span className="google-heading" id="l">l</span>
                    <span className="google-heading" id="e">e</span>
                    <h4 className="card-title">Sign in</h4>
                    <p className="card-text">to continue to Gmail</p>
                </div>


                {/* **********************Registration section********************* */}
                <div className="sect2">

                    <label htmlFor="fname" className="label">First Name</label>
                    <input
                        type="text"
                        name="fname"
                        placeholder="First name"
                        value={form.fname}
                        onChange={(e) => updateForm({ fname: e.target.value })}
                    // onChange={(event) => {
                    //     setRegisterEmail(event.target.value);
                    // }}
                    />
                </div>
                <div className="sect2">
                    <label htmlFor="lname" className="label">Last Name</label>
                    <input
                        type="text"
                        name="lname"
                        placeholder="Last name"
                        value={form.lname}
                        onChange={(e) => updateForm({ lname: e.target.value })}
                    // onChange={(event) => {
                    //     setRegisterEmail(event.target.value);
                    // }}
                    />
                </div>
                <div className="sect2">
                    <label htmlFor="email" className="label">Email or phone</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail address"
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                </div>
                <div className="sect2">
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        className="input-email"
                        type="password"
                        name="password"
                        placeholder="Rogue-able password"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                </div>
                {/* **********************Extra info/recovery section********************* */}
                <p className="forgot">Forgot email?</p>
                <span className="bottom">Not your computer? Use a private window to sign in.
                    <strong className="pre-footer"> Learn more</strong>
                </span>


                <div className="card-footers">
                    <p className="sub-card-footer">Create account</p>
                    <p className="sub-card-footer-2" onClick={register}><strong>Next</strong></p>
                </div>
            </div>
        </>
    );
}

export default Login;

// ****************************************
// REGISTRATION EMAIL IN MAIN SECTION ABOVE

/*
<div className="extra">

REGISTRATION PASSWORD
    <label for="password" className="label">Password</label>
    <input
        className="input-email"
        type="password"
        name="password"
        placeholder="REG PASSWORD"
        onChange={(event) => {
            setRegisterPassword(event.target.value);
        }}
    />

SIGN IN EMAIL
    <label for="email-SI" className="label">Email or phone</label>
    <input
        className="input-email"
        type="email"
        name="email-SI"
        placeholder="SIGN IN EMAIL"
        onChange={(event) => {
            setSignInEmail(event.target.value);
        }}
    />

SIGN IN PASSWORD
    <label for="password-SI" className="label">Password</label>
    <input
        className="input-email"
        type="password"
        name="password-SI"
        placeholder="SIGN IN PASSWORD"
        onChange={(event) => {
            setSignInPassword(event.target.value);
        }}
    />
</div>
*/

// () => {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerEmail)) {
//         console.log("Success", registerEmail);
//         register();
//     }
//     else{
//         console.log("Invalid email address!");
//         console.log(setRegisterEmail);
//     }
// }