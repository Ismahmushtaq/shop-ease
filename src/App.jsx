import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useParams,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartContextProvider from "./context/CartContextProvider";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};


const App = () => {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            {<Route path="products/:id" element={<ProductDetailPage />} />}
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<CartPage />} />
          <Route path="dashboard" element={<PrivateRoute>{<DashboardPage />}</PrivateRoute>} />
          <Route path="profile" element={<PrivateRoute>{<ProfilePage />}</PrivateRoute>} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
  </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;


