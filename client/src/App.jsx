
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from "./pages/products"
import Register from "./pages/register"
import Login from "./pages/Login"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}