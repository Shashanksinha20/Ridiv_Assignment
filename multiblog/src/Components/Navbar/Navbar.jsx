import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {

    const links = [
        {
            linkName : "Home",
            link : "/"
        },

        {
            linkName : "About",
            link : "/about"
        },
    ]

    return (
        <div className = "navbar_container">
            {links.map((el) => {
                return (
                    <Link to = {el.link}>
                    <div>{el.linkName}</div>
                    </Link>
                )
            })}
        </div>
    )
}
