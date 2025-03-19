import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Layout from "components/Layout/Layout"
import Home from "pages/Home/Home"
import Categories from "pages/Categories/Categories"
import Login from "pages/Login/Login"

import Services from "pages/Services/Services"
import RegistrationForm from "components/RegistrationForm/RegistrationForm"
import LoginForm from "components/LoginForm/LoginForm"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
