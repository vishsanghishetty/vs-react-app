import React from 'react';
import logo from "./react-logo.png"

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={logo} alt="react-logo" className="nav-logo" />
                </a>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
