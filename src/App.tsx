import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Layout from "components/Layout/Layout"
import Home from "pages/Home/Home"
import Categories from "pages/Categories/Categories"
import Services from "pages/Services/Services"
import RegistrationForm from "components/RegistrationForm/RegistrationForm"
import LoginForm from "components/LoginForm/LoginForm"
import TranslationService from "components/ServiceOffers/TranslationService/TranslationServices"
import ForgotPasswordForm from "components/ForgotPasswordForm/ForgotPasswordForm"
import TechnicalService from "components/ServiceOffers/TechnicalService/TechnicalService"
import ChildcareService from "components/ServiceOffers/ChildcareService/ChildCareService"
import TutoringService from "components/ServiceOffers/TutoringService/TutoringService"



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
          <Route path="/forgot-password" element={<ForgotPasswordForm/>} />
          <Route path="/translation-service" element={<TranslationService />} />
          <Route path="/technical-service" element={<TechnicalService />} />
          <Route path="/childcare" element={<ChildcareService />} />
          <Route path="/tutoring" element={<TutoringService />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
