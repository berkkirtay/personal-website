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

    const onSubmit = async (e) => {
        e.preventDefault();
        const hashedToken = sha256(token).toString();
        if (otpScreen === false) {
            const result = await setAuth(hashedToken, "");
            if (result === "otp") {
                setOTPScreen(true);
            }
            else {
                alert("Wrong credentials!");
            }
        }
        else {
            const result = await setAuth(hashedToken, otp);
            if (result === "authorized") {
                setAuthorization(true);
                alert("You are authorized successfully!");
                navigate.push("/blog");
                setToken('');
                setOTP('');
                setOTPScreen(false);
            }
            else {
                alert("Wrong otp!");
            }
        }
    };

    const onEnd = (e) => {
        e.preventDefault();
        setToken('');
        endAuth(setAuthorization);
        navigate.push("/authorization");
    };

    if (isAuthorized === true) {
        return (
            <div>
                <form className="contactForm" onSubmit={onEnd}>
                    <label>You are already authorized. Do you want to end this session?</label>
                    <input id="send" type="submit" value="End Session" />
                </form>
                <Footer />
            </div>
        );
    }
    else {
        return (
            <div>
                {otpScreen === true ?
                    (
                        <form className="contactForm" onSubmit={onSubmit}>
                            <label>OTP has been sent to your mail address. Enter OTP here:</label>
                            <input type="text" name="token" required
                                value={otp} onChange={(e) => setOTP(e.target.value)} />
                            <input id="send" type="submit" value="Submit" />
                        </form>
                    )
                    :
                    (
                        <form className="contactForm" onSubmit={onSubmit}>
                            <label>Authorization token:</label>
                            <input type="text" name="token" required
                                value={token} onChange={(e) => setToken(e.target.value)} />
                            <input id="send" type="submit" value="Submit" />
                        </form>
                    )}
                <Footer />
            </div>
        );
    }
};
