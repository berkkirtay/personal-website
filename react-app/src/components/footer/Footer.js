import { Link } from "react-router-dom"

import githubIco from "../../assets/img/github.png"
import linkedinIco from "../../assets/img/linkedin.png"

const Footer = () => {
    return (
        <footer id="footer">
            <Link style={{ display: "inline", float: "left", margin: "0.5%", color: "white" }} to="/contact"><button className="button" >Contact me</button></Link>
            <Link style={{ display: "inline", float: "left", margin: "0.5%", color: "white" }} to="/blogs"><button className="button" >My Blog</button></Link>
            <a href="https://github.com/berkkirtay"><img src={githubIco} alt="GitHub" width="40" height="40" /></a>
            <a href="https://www.linkedin.com/in/berkkirtay/"><img src={linkedinIco} alt="Linkedin" width="40" height="40" style={{ backgroundColor: "#3c3f4b" }} /></a>
        </footer>
    )
}

export default Footer
