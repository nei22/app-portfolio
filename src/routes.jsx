import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Movies from "./pages/Movies";
// import Movie from "./pages/Movie";
import Navbar from "./components/Navbar";
import Erro from "./pages/Error";
// import Login from "./pages/Login";
// import Cep from "./pages/Cep";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* public */}
        <Route path="*" element={<Erro />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/cep" element={<Cep />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} /> */}
        {/* private */}
        
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;

