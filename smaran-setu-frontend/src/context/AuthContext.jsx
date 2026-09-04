import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

function readProfile(role) {
  if (!role) return null

  try {
    return JSON.parse(
      localStorage.getItem(`smaran_profile_${role}`) || 'null'
    )
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [role, setRole] = useState(() => {
    return localStorage.getItem('smaran_role')
  })

  const [profile, setProfile] = useState(() => {
    const savedRole = localStorage.getItem('smaran_role')
    return readProfile(savedRole)
  })

  useEffect(() => {
    if (role) {
      localStorage.setItem('smaran_role', role)
    } else {
      localStorage.removeItem('smaran_role')
    }
  }, [role])

  const login = (selectedRole) => {
    setRole(selectedRole)
    setProfile(readProfile(selectedRole))
  }

  const saveProfile = (profileData) => {
    if (!role) return

    localStorage.setItem(
      `smaran_profile_${role}`,
      JSON.stringify(profileData)
    )

    setProfile(profileData)
  }

  const getProfile = (selectedRole) => {
    return readProfile(selectedRole)
  }

  const logout = () => {
    setRole(null)
    setProfile(null)
  }

  return (
    <AuthContext.Provider
      value={{
        role,
        profile,
        login,
        logout,
        saveProfile,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)