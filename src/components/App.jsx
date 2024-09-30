import { Routes, Route, Navigate } from "react-router-dom";
import Products from "../pages/Products";
import DetailsPage from "../pages/DetailsPage";
import CheckoutPage from "../pages/CheckoutPage";
import PageNotFound from "../pages/404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
