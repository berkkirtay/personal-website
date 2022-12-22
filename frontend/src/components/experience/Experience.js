// Copyright(c) 2022 Berk Kırtay

import Footer from "../footer/Footer";

const Experience = () => {
    const tableStyle = {
        width: "100%",
        paddingLeft: "3%",
    };

    const tableItemStyle = {
        color: "rgb(20, 175, 100)",
        width: "72%",
    };

    return (
        <div>
            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Experience: </h4>
                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <td style={tableItemStyle}>
                                <span style={{ display: "list-item" }}>
                                    Software Engineer Intern - Amadeus</span>
                            </td>
                            <td align="center">July 2022</td>
                            <td align="center">-</td>
                            <td align="center">Sep 2022</td>
                        </tr>
                        <tr>
                            <td style={tableItemStyle}>
                                <span style={{ display: "list-item" }}>
                                    Junior Software Developer - Medyasoft</span>
                            </td>
                            <td align="center">July 2021</td>
                            <td align="center">-</td>
                            <td align="center">June 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr />

            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Education: </h4>

                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <td style={tableItemStyle}>
                                <span style={{ display: "list-item" }}>
                                    Computer Science and Engineering - Marmara University</span>
                            </td>
                            <td align="center">Sep 2018</td>
                            <td align="center">-</td>
                            <td align="center">July 2023</td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ paddingLeft: "3%" }}>More detailed experience information can be found at: <a href="https://www.linkedin.com/in/berkkirtay/" target="_blank" rel="noopener noreferrer">
                    Linkedin <i style={{ zoom: "0.8" }} className="fas fa-external-link-alt"></i></a></p>
            </div>
            <Footer />
        </div>
    )
}

export default Experience