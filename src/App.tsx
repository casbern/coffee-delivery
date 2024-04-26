import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Toaster position="top-right" richColors expand={true} closeButton />
          <Router />
        </CartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
