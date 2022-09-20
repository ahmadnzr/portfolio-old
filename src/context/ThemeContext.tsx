import React, { useCallback, useEffect, useState } from 'react'
import { useStorageService } from '../services/StorageService'

export type ThemeMode = 'light' | 'dark'

export const ThemeContext = React.createContext<{
  theme: ThemeMode | null
  toggleTheme?: () => void
}>({
  theme: null,
  toggleTheme: () => null,
})

interface Props {
  children: React.ReactNode
}

const ThemeContextWrapper = ({ children }: Props) => {
  const themeMode = useStorageService.getItem<ThemeMode>('theme') || 'light'
  const [theme, setTheme] = useState<ThemeMode>(themeMode)

  const handleToggleTheme = useCallback(() => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    useStorageService.setItem<ThemeMode>('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextWrapper
