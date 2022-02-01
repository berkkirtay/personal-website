import { Link } from "react-router-dom"
import { useState } from "react"
import { useHistory } from "react-router-dom";
import { sendEmail } from "../../helpers/RequestManager";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    let navigate = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const emailBody = {
            name: name,
            email: email,
            text: text
        };
        sendEmail(emailBody);
        setName('');
        setEmail('');
        setText('');
        navigate.push("/");
    }

    return (
        <div className="contactForm">
            <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
                <h1 style={{ display: "inline" }}>Contact me</h1>
            </Link>
            <Link to="/" style={{ display: "inline", float: "right", marginTop: "1.4%", color: "white" }}><button className="button">Go back</button></Link>

            <hr />
            <form className="contactForm" onSubmit={onSubmit}>
                <label>Your name:</label>
                <input type="text" name="name" required
                    value={name} onChange={(e) => setName(e.target.value)} />
                <label>Your e-mail:</label>
                <input type="text" name="email" required
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Your message:</label>
                <textarea name="text" style={{ height: "300px" }} required
                    value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <input id="send" type="submit" value="Submit" />
            </form>
        </div >
    )
}

export default Contact
