import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Layout from "components/Layout/Layout"
import Home from "pages/Home/Home"
import Categories from "pages/Categories/Categories"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
