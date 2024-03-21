import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/default"
import { GlobalStyle } from "./styles/global"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <p>Hello World</p>
      <GlobalStyle />
    </ThemeProvider>
  )
}

