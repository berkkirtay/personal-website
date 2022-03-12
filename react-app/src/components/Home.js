import Footer from "./footer/Footer";
import pfp from "../assets/img/pfp.jpg";
const Home = () => {
    return (
        <>
            <div className="aboutme">
                <div id="profile">
                    <div id="profile-child-pfp">
                        <img src={pfp} alt="pfp" width="90%" />
                    </div>
                    <div id="profile-child-desc">
                        Hi, I am a junior Computer Science student at Marmara University. I write software. I love
                        learning about anything related to computer science and I am always eager to expand my expertise!
                    </div>
                </div>

                <hr />
                <h4 style={{ paddingLeft: "1%" }}>
                    My primary interests are:
                </h4>
                <ul>
                    <li>Software Engineering</li>
                    <p style={{ width: "85%", paddingLeft: "1%" }}>I am proficient about software development life cycles and knowledgeable about famous software engineering practices. I try to write clean, modular and efficient software.</p>
                    <li>Blockchain Technology</li>
                    <p style={{ width: "85%", paddingLeft: "1%" }}>I am interested in blockchain and web3. I developed some basic applications of blockchain and decentralized transaction systems. I also work on decentralized apps.</p>
                    <li >Cryptography</li>
                    <p style={{ width: "85%", paddingLeft: "1%" }}>I have been interested in Cryptography for a long time and some of my work include digital signature methods and essentials such as SSL, SHA, AES, RSA. </p>
                </ul>
                <hr />
            </div>

            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Check out some of my projects on GitHub:</h4>
                <ul>
                    <li>
                        <a href="https://github.com/berkkirtay/basicblockchain" target="_blank" rel="noopener noreferrer">A Proof-of-Work Based Blockchain
                            Implementation <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/blockchain-web-api" target="_blank" rel="noopener noreferrer">A Web App for My Blockchain
                            Implementation <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/PasswordManager" target="_blank" rel="noopener noreferrer">Password Manager Service <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/geneticalgorithms" target="_blank" rel="noopener noreferrer">Genetic Algorithms Applications <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/basicencryptorGUI" target="_blank" rel="noopener noreferrer">Basic File Encryptor <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/enigmamachine" target="_blank" rel="noopener noreferrer">Enigma Machine Emulator <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/berkcoin" target="_blank" rel="noopener noreferrer">Berkcoin Decentralized App <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>
                </ul>
                <Footer />
            </div>
        </>
    )
}
export default Home

