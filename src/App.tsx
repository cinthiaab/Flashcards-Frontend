import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./cadastro/Cadastro";
import Login from "./login/Login";
import Home from "./home/Home";
import { AuthProvider } from "./context/AuthProvider/index";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
