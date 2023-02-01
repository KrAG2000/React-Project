import { useState } from "react";

function PasswordReg() {

    const [registerPassword, setRegisterPassword] = useState("");
    const store = () => {
        return registerPassword;
    } 

    return (
        <>
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

        </>,
        store
    );
}

export default PasswordReg;
