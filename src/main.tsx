import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import ListaProductos from "./pages/ListaProdcutos";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/productos" element={<ListaProductos />} />
    </Routes>
  </BrowserRouter>,
);
