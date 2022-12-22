// Copyright(c) 2022 Berk Kırtay

import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react'

export const Nav = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const ref = useRef(null);

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setHamburgerMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css"
            />

            <Link to="/" id='navName' style={{ marginLeft: "10px", fontSize: "180%", position: "relative", zIndex: "20" }} >
                Berk Kırtay
            </Link>
            <div style={{ float: "right" }}>
                <ul className="nav">
                    <li className="nav" style={{ float: "right" }}><Link to="/blog">My Blog</Link></li>
                    <li className="nav" style={{ float: "right" }}><Link to="/work">My Work</Link></li>
                    <li className="nav" style={{ float: "right" }}><Link to="/experience">My Experience</Link></li>
                    <li className="nav" style={{ float: "right" }}><Link to="/contact">Contact me</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburgerMenu"
                ref={ref}>
                <Hamburger
                    toggled={hamburgerMenu}
                    toggle={setHamburgerMenu}
                />
            </div>
            <hr id='bloghr' />
            <style jsx="true">{`
               @media screen and (max-device-width: 768px),
               screen and (orientation: portrait) {
                    li.nav {
                        color: white;
                        float:none;
                        justify-content: center;
                        list-style: none;
                        height: 140px;
                        display: flex;
                        align-items:center;
                    }
                    ul.nav {
                        margin-top: 50px;
                        display:  ${hamburgerMenu ? 'flex' : 'none'};
                        flex-direction: column;
                        background-color:#101820ff;
                        flex-wrap: wrap;
                        position: absolute;
                        z-index:3;
                        right: 0;
                        top: 0;
                        height:650px;
                        width: 800px;
                        justify-content: center;
                        transition-duration: 1s;
                        transition-property: margin-bottom;
                    }
                    .nav a {
                        font-size: 130%;
                        width: 800px;
                    }
                }
            `}</style>
        </div >
    )
}