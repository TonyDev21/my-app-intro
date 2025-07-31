import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/pages/ProductDetail.tsx";
import { CartContextProvider } from "./context/CartContext.tsx";
import CartPage from "./components/pages/CartPage.tsx";

createRoot(document.getElementById("root")!).render(
  <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
);
