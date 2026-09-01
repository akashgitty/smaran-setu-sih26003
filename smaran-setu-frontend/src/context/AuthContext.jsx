import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [role, setRole] = useState(() => localStorage.getItem('smaran_role'))

  useEffect(() => {
    if (role) localStorage.setItem('smaran_role', role)
    else localStorage.removeItem('smaran_role')
  }, [role])

  const login = (selectedRole) => setRole(selectedRole)
  const logout = () => setRole(null)

  return <AuthContext.Provider value={{ role, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
