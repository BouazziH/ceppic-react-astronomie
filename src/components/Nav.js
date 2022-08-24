import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
    return(
       <nav className="nav">
<Link to="/">Home</Link>
<Link to="ajouter">Ajouter un article</Link>
<Link to="article">Liste des articles</Link>
<Link to="about">A propos</Link>
       </nav> 
        
        
        
    
    )
};
