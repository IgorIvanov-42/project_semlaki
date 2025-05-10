import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Layout from "components/Layout/Layout"
import Home from "pages/Home/Home"
import Categories from "pages/Categories/Categories"
import Services from "pages/Services/Services"
import RegistrationForm from "components/RegistrationForm/RegistrationForm"
import LoginForm from "components/LoginForm/LoginForm"
import ForgotPasswordForm from "components/ForgotPasswordForm/ForgotPasswordForm"
import Terms from "components/Terms/Terms"
import ProfileUser from "components/ProfileUser/ProfileUser"
import { AuthProvider } from "components/AuthProvider/AuthProvider"
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute"
import Contacts from "pages/Contacts/Contacts"
import ServicePage from "pages/ServicePage/ServicePage"
import MyServices from "components/MyServices/MyServices"


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/category/:categoryId/services"
              element={<Services />}
            />
            <Route
              path="/category/:categoryId/services/:serviceId"
              element={<ServicePage />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/terms" element={<Terms />} />
            <Route
              path="/profile-user"
              element={<ProtectedRoute element={<ProfileUser />} />}
            />
            <Route path="/my-services" element={<MyServices />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
