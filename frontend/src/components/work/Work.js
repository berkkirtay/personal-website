// Copyright(c) 2022 Berk Kırtay

import Footer from '../footer/Footer';

const Work = () => {
    const workStyle = {
        paddingLeft: "5%"
    };

    return (
        <div>
            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Projects: </h4>
                <ul>
                    <li>
                        <a href="https://github.com/berkkirtay/basicblockchain" target="_blank" rel="noopener noreferrer">A Proof-of-Work Based Blockchain
                            Implementation <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/adaptive-genetic-algorithm-for-n-queens" target="_blank" rel="noopener noreferrer">An Adaptive Genetic Algorithm for N-Queens Problem <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/blockchain-web-api" target="_blank" rel="noopener noreferrer">A Wallet Web App for My Blockchain
                            Implementation <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/berk-8" target="_blank" rel="noopener noreferrer">A CHIP-8 (berk-8) Emulator
                            with C++ and SDL2 <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/basicencryptorGUI" target="_blank" rel="noopener noreferrer">A Basic RSA Algorithm File Encryptor <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/PasswordManager" target="_blank" rel="noopener noreferrer">Password Manager Service <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/berkcoin" target="_blank" rel="noopener noreferrer">Berkcoin Decentralized App <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/personal-website" target="_blank" rel="noopener noreferrer">Source Code of This Website <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/geneticalgorithms" target="_blank" rel="noopener noreferrer">Genetic Algorithms Applications <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/enigmamachine" target="_blank" rel="noopener noreferrer">Enigma Machine Emulator <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>
                </ul>

                <p style={workStyle}>My open-source projects are available at: <a href="https://github.com/berkkirtay" target="_blank" rel="noopener noreferrer">
                    GitHub <i style={{ zoom: "0.8" }} className="fas fa-external-link-alt"></i></a></p>
            </div>

            <hr />
            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Research: </h4>
                <p style={workStyle}>Will be filled later.</p>

            </div>

            <Footer />
        </div >
    )
}

export default Work