import { useState } from "react"
import { useHistory } from "react-router-dom";
import { sendEmail } from "../../helpers/RequestManager";
import Footer from "../footer/Footer";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    let navigate = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailBody = {
            name: name,
            email: email,
            text: text
        };
        await sendEmail(emailBody);
        setName('');
        setEmail('');
        setText('');
        navigate.push("/");
    }

    return (
        <div>
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
            <Footer />
        </div >
    )
}

export default Contact
