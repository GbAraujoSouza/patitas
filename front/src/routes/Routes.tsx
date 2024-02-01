import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Fidelidade from "../pages/Fidelidade";
import Perfil from "../pages/Perfil";
import Search from "../pages/Search";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";


const Router = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Search />} path="/search" />
          <Route element={<Fidelidade />} path="/fidelidade" />
          <Route element={<Perfil />} path="/profile" />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default Router