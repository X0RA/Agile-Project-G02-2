import React from "react"
import { NavLink } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
import HeaderLinks from "./HeaderLinks"

const logged_out = [
    
    { name: "Sign Up", to: '/signup'},
    { name: 'Sign In', to: '/login' },
    { name: 'Recalls', to: '/recalls' }
]

const logged_in = [
    { name: 'Recalls', to: '/recalls' },
    { name: 'Dashboard', to: '/dashboard' }
]

export default function Header() {
    const { currentUser } = useAuth()
  return (
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, overflow: 'hidden'}}>
                <NavLink to='/' style={{ }}>
                    <li>
                        <h1 style={{ textDecoration: "none", fontSize: "clamp(1rem, -0.9rem + 8.333vw, 3.5rem)", fontWeight: '800', color: "#0d0d0d", fontFamily: 'Open Sans', padding: "1vh", float: 'Left' }}>
                        Check Your Car</h1>
                    </li>
                </NavLink>
                {currentUser ? <HeaderLinks links={logged_in} /> : <HeaderLinks links={logged_out} />}
      </ul>
  )
}
