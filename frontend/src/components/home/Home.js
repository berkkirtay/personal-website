// Copyright(c) 2022 Berk Kırtay

import Footer from "../footer/Footer";
import pfp from "../../assets/img/pfp.jpg";
const Home = () => {
    const pStyle = {
        width: "85%",
        paddingLeft: "1%"
    };

    return (
        <>
            <div className="aboutme">
                <div id="profile">
                    <div id="profile-child-pfp">
                        <img src={pfp} alt="pfp" width="90%" />
                    </div>
                    <div id="profile-child-desc">
                        Hi, I am a senior Computer Science student at Marmara University. I write software. I love
                        learning about anything related to computer science and I am always eager to broaden my expertise!
                    </div>
                </div>

                <hr />
                <h4 style={{ paddingLeft: "1%" }}>
                    My primary interests are:
                </h4>
                <ul>
                    <li>Software Engineering</li>
                    <p style={pStyle}>I am proficient about software development life cycles and knowledgeable about famous software engineering practices. I try to write clean, modular and efficient software.</p>

                    <li >Cryptography</li>
                    <p style={pStyle}>I have been studying and implementing concepts concerning Cryptography for a long time and some of my work include PKCS standards and essentials such as SSL, SHA, AES, RSA. </p>

                    <li >Artificial Intelligence</li>
                    <p style={pStyle}>I am familiar with some metaheuristic techniques in the combinatorial optimization literature. I work with evolutionary algorithms and machine learning models in my studies. </p>

                    <li>Blockchain Technology</li>
                    <p style={pStyle}>I am interested in blockchain and web3. I developed some basic applications of blockchain and decentralized transaction systems. I also work on decentralized apps.</p>
                </ul>
            </div>
            <Footer />
        </>
    )
}
export default Home
