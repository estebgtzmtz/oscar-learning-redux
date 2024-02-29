import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { spotifyTheme } from './SpotifyTheme'


export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={spotifyTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
