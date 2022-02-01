import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import sha256 from 'crypto-js/sha256';
import { setAuth } from "../../helpers/RequestManager";
import { endAuth } from "../../helpers/RequestManager";

export const Auth = ({ isAuthorized, setAuthorization }) => {
    const [token, setToken] = useState("");
    let navigate = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const hashedToken = sha256(token).toString();
        setAuth(hashedToken, setAuthorization);
        setToken('');
        navigate.push("/blogs");
    };

    const onEnd = (e) => {
        e.preventDefault();
        setToken('');
        endAuth(setAuthorization);
        navigate.push("/authorization");
    };

    if (isAuthorized === true) {
        return (
            <div className="contactForm">
                <h1 style={{ display: "inline", textDecoration: "none", color: "white" }}>Authorization</h1>
                <Link to="/" style={{ display: "inline", float: "right", marginTop: "1.4%", color: "white" }}><button className="button">Go back</button></Link>
                <hr />
                <form className="contactForm" onSubmit={onEnd}>
                    <label>You are already authorized. Do you want to end this session?</label>
                    <input id="send" type="submit" value="End Session" />
                </form>
            </div >
        );
    }
    return (
        <div className="contactForm">
            <h1 style={{ display: "inline", textDecoration: "none", color: "white" }}>Authorization</h1>
            <Link to="/" style={{ display: "inline", float: "right", marginTop: "1.4%", color: "white" }}><button className="button">Go back</button></Link>
            <hr />
            <form className="contactForm" onSubmit={onSubmit}>
                <label>Your token:</label>
                <input type="text" name="token" required
                    value={token} onChange={(e) => setToken(e.target.value)} />
                <input id="send" type="submit" value="Submit" />
            </form>
        </div >
    );
};
