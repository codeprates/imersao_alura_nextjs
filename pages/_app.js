import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;    
  }
`

// Após importar o db.json, comentar o bloco abaixo
// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// }
// e substituir por
const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
// É preciso mover o GlobalStyles para dentro da tag ThemProvider para que o
// global seja aplicado a todos os componentes que foram criados
// de:
{/* <GlobalStyle />
<ThemeProvider theme={theme}> */}
// para:
{/* <ThemeProvider theme={theme}>
  <GlobalStyle /> */}