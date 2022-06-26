import { useState } from "react";
import { useHistory } from "react-router-dom";
import sha256 from 'crypto-js/sha256';
import { setAuth } from "../../helpers/RequestManager";
import { endAuth } from "../../helpers/RequestManager";
import Footer from "../footer/Footer";

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

    return (
        <div>
            {isAuthorized === true ? (
                <form className="contactForm" onSubmit={onEnd}>
                    <label>You are already authorized. Do you want to end this session?</label>
                    <input id="send" type="submit" value="End Session" />
                </form>
            ) :
                (
                    <form className="contactForm" onSubmit={onSubmit}>
                        <label>Authorization token:</label>
                        <input type="text" name="token" required
                            value={token} onChange={(e) => setToken(e.target.value)} />
                        <input id="send" type="submit" value="Submit" />
                    </form>
                )
            }
            <Footer />
        </div >
    );
};