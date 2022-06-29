import { useState } from "react";
import { useHistory } from "react-router-dom";
import sha256 from 'crypto-js/sha256';
import { setAuth } from "../../helpers/RequestManager";
import { endAuth } from "../../helpers/RequestManager";
import Footer from "../footer/Footer";

export const Auth = ({ isAuthorized, setAuthorization }) => {
    const [token, setToken] = useState("");
    const [otp, setOTP] = useState("");
    const [otpScreen, setOTPScreen] = useState(false);
    let navigate = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        if (otpScreen === false) {
            const hashedToken = sha256(token).toString();
            setAuth(hashedToken, "", setOTP, setAuthorization);
            if (otp !== "") {
                setOTP("");
                setOTPScreen(true);
            }
        }
        else if (otpScreen === true) {
            const hashedToken = sha256(token).toString();
            setAuth(hashedToken, otp, setOTP, setAuthorization);
            setToken('');
            setOTP('');
            alert("User is authorized successfully!");
            navigate.push("/blogs");
        }
        else {
            alert("Wrong credentials!");
            navigate.push("/blogs");
        }
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
            {otpScreen && (
                <form className="contactForm" onSubmit={onSubmit}>
                    <label>OTP has been sent to your mail address. Enter OTP here:</label>
                    <input type="text" name="token" required
                        value={otp} onChange={(e) => setOTP(e.target.value)} />
                    <input id="send" type="submit" value="Submit" />
                </form>
            )}
            <Footer />
        </div >
    );
};
