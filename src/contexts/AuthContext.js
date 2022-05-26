import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { sendEmailVerification , createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail, updatePassword } from "firebase/auth";



const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function setUpdateEmail(email) {
    return updateEmail(currentUser, email)
  }

  function setUpdatePassword(password) {
    return updatePassword(currentUser, password)
  }

  function setSendVerificationEmail() {
    return sendEmailVerification(currentUser)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    setUpdateEmail,
    setUpdatePassword, 
    setSendVerificationEmail
  }

  return (
    <AuthContext.Provider value={value}>
      {/* {console.log(value)} */}
      {!loading && children}
    </AuthContext.Provider>
  )
}
