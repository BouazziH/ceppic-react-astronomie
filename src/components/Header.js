import Nav from "./Nav";
import { Route ,Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Article from "../pages/Article";
import Ajouter from "../pages/Ajouter";
import NotFound from "../pages/NotFound";
export default function Header() {
    return(
<>
        <Nav />
        <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/ajouter" element={<Ajouter />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        
        </Routes>  
         </>        )
};