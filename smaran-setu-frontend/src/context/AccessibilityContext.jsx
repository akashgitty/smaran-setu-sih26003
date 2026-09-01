import { createContext, useContext, useState } from 'react'

const AccessibilityContext = createContext(null)

export function AccessibilityProvider({ children }) {
  const [largeText, setLargeText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  return (
    <AccessibilityContext.Provider value={{ largeText, setLargeText, highContrast, setHighContrast, reducedMotion, setReducedMotion }}>
      <div className={`${largeText ? 'text-[1.08rem]' : ''} ${highContrast ? 'contrast-125' : ''}`}>{children}</div>
    </AccessibilityContext.Provider>
  )
}

export const useAccessibility = () => useContext(AccessibilityContext)
