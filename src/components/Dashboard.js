import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from './Header'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout , setSendVerificationEmail} = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  const promises = []
  async function handleVerification() {
    promises.push(setSendVerificationEmail())
    Promise.all(promises)
    .then(() => {
      console.log("sent")
    })
    .catch(() => {
      setError("Failed to update account")
    })
    .finally(() => {
    })
  }

  return (
    <>
    <Header />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <br />
          <strong>Verified:</strong> {currentUser.emailVerified? "true" : "false"}
          {currentUser.emailVerified? <br /> : <Button variant="link" onClick={handleVerification}>Send Verification email</Button>}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}
