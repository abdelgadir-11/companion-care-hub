
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force the theme to "light" initially to prevent flash
  const defaultProps = {
    defaultTheme: "light",
    enableSystem: true,
    enableColorScheme: true,
    ...props
  };
  
  return <NextThemesProvider {...defaultProps}>{children}</NextThemesProvider>
}
