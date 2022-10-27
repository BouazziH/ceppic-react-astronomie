# Blog d'astronomie avec React JS pour le frontend et Firebase pour le backend

Le but de ce blog est de creer des articles et de les lister,le contenu des articles a pour theme l'astronomie.

1. Forker le depot suivant [https://github.com/formeka/ceppic-react-astronomie](https://github.com/formeka/ceppic-react-astronomie) ensuite travailler en le clonant localement.
2. Vous devez avoir un **header** et un **footer** :
   - le **header** doit avoir un menu avec 3 liens : **Articles**,**Ajouter Article**,**A Propos**
   - le **footer** doit comporter un [Copyleft](https://fr.wikipedia.org/wiki/Copyleft) et l'annee courante
3. L'acceuil de l'application donne sur une page avec un texte libre expliquant le theme et le contenue de ce blog.
4. La page **Articles** doit lister tous les articles du plus recent au plus plus ancien.
5. La page **Ajouter Article** comporte un formulaire avec 2 champs : **titre**, **article** , lors de la validation inserer en base de donnee egalement un champ **created** qui prendra la date courante de l'insertion.
6. S'inspirer de la branche **08-bdd** du depot [ceppic-react: https://github.com/formeka/ceppic-react](https://github.com/formeka/ceppic-react) afin d'integrer **firebase** , les explications se trouve dans le [readme](https://github.com/formeka/ceppic-react/blob/08-bdd/README.md).
7. La page **A Propos** contient du texte libre sur le createur de l'application.
8. Utiliser **git** et **github** (ou autre **gitlab** etc ...) afin de versionner votre code .
9. Travailler sur une branche **developp** ainsi que des branches **feature/xxx** en effectuant des **PR(pull request)**.
10. Faite des **commits atomiques**.
11. Travailler le visuel de votre application (**style css**)
12. Deployer son application sur github pages :
*cree une branch deploy git 
* npm install gh-pages
* ajouter dans le script package.json
  "homepage": "https://formeka.github.io/ceppic-react-astronomie/",
"scripts": {
 "start": "react-scripts start",
 "build": "react-scripts build",
 "test": "react-scripts test",
 "eject": "react-scripts eject",
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build"
},
* Deployer l'application : npm run deploy