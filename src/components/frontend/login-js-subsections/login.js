import React, { useState } from "react";
import { 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut
} from "firebase/auth";
import { auth } from "../../firebase-backend/firebase-backend";
import "./login.css"

function Login(){
    /*
    const [signInPassword, setSignInPassword] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    */

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    // **********signIn function**********    
    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                login.email,
                login.password
            )
            console.log(JSON.stringify(user.login.email));
        }
        catch (error) {
            console.log("Something is wrong with sign in section of FIREBASE: ", error.message);
        }
    }
    // **********signOut function**********
    const signOut = async () => {
        await signOut(auth);
    }

    return(
        <div>
            <div className="login-sect2">
                <label htmlFor="email" className="login-label">Email or phone</label>
                <input
                    type="email"
                    name="email"
                    className="login-input-email"
                    placeholder="E-mail address"
                    onChange={(event) => {
                        setLogin({
                            email: event.target.value
                        });
                    }}
                />
            </div>
            <div className="login-sect2">
                <label htmlFor="password" className="login-label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="login-input-password"
                    placeholder="Strong password"
                    onChange={(event) => {
                        setLogin({
                            password: event.target.value
                        });
                    }}
                />
            </div>

            <p 
                className="login-sub-card-footer-2" 
                onClick={
                    signIn
                }><strong>Sign In</strong>
            </p>

{/* Sign out button to be visible if user is already logged in  */}
            <p 
                className="login-sub-card-footer-2" 
                onClick={
                    signOut
                }><strong>Sign Out</strong>
            </p>
        </div>
    );
}

export default Login;