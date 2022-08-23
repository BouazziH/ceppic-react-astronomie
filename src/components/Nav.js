import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
    return(
       <nav className="nav">
<Link to="/">Home</Link>
<Link to="article">Articles</Link>
<Link to="ajouter">Ajouter article</Link>
<Link to="about">A propos</Link>
       </nav> 
        
        
        
    
    )
};
