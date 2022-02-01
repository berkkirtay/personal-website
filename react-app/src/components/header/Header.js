import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css"
            />
            <Link to="/" style={{ textDecoration: "none", color: "black" }} >
                <h1 style={{ display: "inline", color: "white" }} >Berk Kırtay</h1>
            </Link>
            <hr />
        </header>
    )
}

export default Header
