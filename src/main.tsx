import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import ListaProductos from "./pages/ListaProdcutos";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<ListaProductos />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
);
