import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./FormArticle.css";
import { Navigate } from "react-router-dom";

export default function FormArticl() {
  const [titre, setTitre] = useState();
  const [articleContenu, setArticleContenu] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //ajouter une doc a la bd on donnant un nom
      await addDoc(collection(db, "articles"), {
        //on definie les champs de la table articles
        titre: titre,
        articleContenu: articleContenu,
        created: Timestamp.now(),
      });
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (submitted) {
    return (
      <>
        <p> L'article a été enregistré.</p>
        {/* pour la rediriction */}
        <Navigate to="/article" />
      </>
    );
  }

  return (
    <div className="formArticle">
      <form method="POST" onSubmit={handleSubmit}>
      <h1>Ajouter article</h1>  
        <div>
          <input
            type="text"
            name="titre"
            placeholder="Titre de l'article"
            required
            onChange={(event) => setTitre(event.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Contenu de l'article"
            name="articleContenu"
            required
            onChange={(e) => setArticleContenu(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Enregistrer l'article</button>
        </div>
      </form>
    </div>
  );
}
