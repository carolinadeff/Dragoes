import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('dragons')
    return !!isLogged
  })

  const signIn = (user, password) => {
    if (user === 'admin' && password === '1234') {
      localStorage.setItem('dragons', 'true')
      setLogged(true)
    } else {
      alert('dados inválidos')
    }
  }

  const signOut = () => {
    localStorage.removeItem('dragons')
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export {
  AuthProvider, useAuth
}
