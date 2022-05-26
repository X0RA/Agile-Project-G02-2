import React from "react"
import { NavLink } from "react-router-dom"

export default function HeaderLinks(links) {

    const current_links = links.links;

    return (
        current_links.map((link) => {
            return (
                <li key={link.name} style={{ float: 'right', color: 'white', paddingTop: "26px", paddingRight: "20px" }} className="ml-4">
                    <NavLink to={link.to} style={{ }}>
                            <p style={{fontFamily: 'Open Sans', paddingTop: "10px", color: '#EA454C', textDecoration: "underline", textDecorationColor: "red"}}>{link.name}</p>
                    </NavLink>
                </li>
            )
        })
    )
}
