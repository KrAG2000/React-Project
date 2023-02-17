import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import './registration.css';
import { auth } from "../../firebase-backend/firebase-backend";

import { redirect } from "react-router"; // Better than "useNavigate"

function Registration() {

    const [basicDetails, setBasicDetails] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: {
            date: "",
            month: "",
            year: ""
        }
    })
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    /*
    const [registration, setRegistration] = useState({
        email: "",
        password: ""
    })
    */
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log(`User: `, currentUser);
        return;
    })

    function updateDetails(value) {
        return setBasicDetails((prev) => {
            return { ...prev, ...value };
        });
    }

    // **********register function**********
    const register = async () => {
        try {

            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            /*
            const user = await createUserWithEmailAndPassword(
                auth,
                registration.email,
                registration.password
            );
            */
            console.log("New User", user);

        }
        catch (error) {
            console.log("Something is wrong with registration section of FIREBASE: ", error.message);
        }

        /* 
        e.preventDefault();
    
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newObject = { ...basicDetails };
    
        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObject),
        })
            .catch(error => {
                console.log("Something is wrong with MONGO-DB section: ", error)
                return;
            });
            
        const navigate = useNavigate();    
        navigate("/");
        redirect("/");
        */
    }

    return (
        <div className="card" >
            {/* **********************Main card body********************* */}
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
            <div className="BD-sect">

                <div className="sect2">
                    <label htmlFor="fname" className="label">First Name</label>
                    <input
                        type="text"
                        name="fname"
                        className="reg-input-text"
                        placeholder="First name"
                        onChange={(event) => {
                            updateDetails({
                                firstName: event.target.value
                            });
                        }}
                    />
                </div>
                <div className="sect2">
                    <label htmlFor="lname" className="label">Last Name</label>
                    <input
                        type="text"
                        name="lname"
                        className="reg-input-text"
                        placeholder="Last name"
                        onChange={(event) => {
                            updateDetails({
                                lastName: event.target.value
                            });
                        }}
                    />
                </div>
            </div>
            <div className="sect2">
                <label htmlFor="email" className="label">Email or phone</label>
                <input
                    type="email"
                    name="email"
                    className="reg-input-email"
                    placeholder="E-mail address"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                        /*
                        setRegistration({
                            email: event.target.value
                        });
                        */
                    }}
                />
            </div>
            <div className="sect2">
                <label htmlFor="password" className="label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="reg-input-password"
                    placeholder="Strong password"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                        /*
                        setRegistration({
                            password: event.target.value
                        });
                        */
                    }}
                />
            </div>
            {/* **********************Extra info/recovery section********************* */}
            <a href="https://wa.me" className="forgot">Forgot email?</a>
            <span className="bottom">Not your computer? Use a private window to sign in.
                <strong className="pre-footer"> Learn more</strong>
            </span>


            <div className="card-footers">
                <a href="https://www.yahoo.com" className="sub-card-footer">Create account</a>
                <p className="sub-card-footer-2" onClick={register}>Next</p>
            </div>
            {/* <section>{user.email}</section> */}
        </div >
    );
}

export default Registration;

// ****************************************
// REGISTRATION EMAIL IN MAIN SECTION ABOVE

/*
<div className="extra">

REGISTRATION PASSWORD
    <label for="password" className="label">Password</label>
    <input
        className="reg-input-email"
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
        className="reg-input-email"
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
        className="reg-input-email"
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