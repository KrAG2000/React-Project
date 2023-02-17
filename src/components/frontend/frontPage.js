import React from "react";
import { Link } from "react-router-dom";
import "./frontPage.css";

function FrontPage() {
    return (
        <div className="fp-div">
            <section className="login">
                <Link className="btn btn-primary" to="/">Home</Link>
                <Link className="btn btn-primary" to="/registration">Register</Link>
                <Link className="btn btn-primary" to="/login">Login</Link>
            </section>
        </div>
    );
}

export default FrontPage;