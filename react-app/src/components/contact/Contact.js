import { useState } from "react"
import emailjs from 'emailjs-com';
import Footer from "../footer/Footer";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_hjgtclq', 'template_jxjide6', e.target, 'user_LwYSRs6src8JJfa5nOOpf')
            .then((result) => {
                alert("Email has been sent. Thanks!")
            }, (error) => {
                alert("Email couldn't be sent.")
            });
        setName('');
        setEmail('');
        setText('');
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
