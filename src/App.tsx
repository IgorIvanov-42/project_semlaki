import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Home from 'pages/Home/Home'



const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Home />
      Migrants
    </BrowserRouter>
  )
}

export default App
