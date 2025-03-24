/*import { Global, css } from "@emotion/react"

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-image: url("/src/assets/background.JPG");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        // min-height: 100vh;
      }

      #root {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        font-family: "Arial", sans-serif;
      }
    `}
  />
)

export default GlobalStyles */

import { Global, css } from "@emotion/react"

const globalStyles = css`
  @import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);

  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    font-family: Lato, sans-serif;
  }
`

function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles 
