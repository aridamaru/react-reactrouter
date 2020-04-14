import React from 'react'

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="brand-logo">React + Typescript</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Todo List</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </div>
    </nav>
)