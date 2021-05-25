# Générateur graphique d'open badge

Cette application vous permet de naviguer parmi des modèles d'open badges et de les personnaliser.

## Installer

L'utilisation locale de ce dépôt nécessite `git`, `node` ainsi que `yarn` (ou `npm`). L'architecture du code s'appuie sur [create-react-app](https://create-react-app.dev/).

Cloner le dépôt :
`git clone ***`

Mettre à jour les dépendances :
`yarn`

Générer les fichiers statiques à déployer (dans `/build`):
`yarn build`

Vous pouvez déployer le contenu de `/build` localement ou sur tout type de serveur distant, y compris sur des hébergements "serverless".

## Personnaliser l'application

Il existe de nombreuses possibilités de personnalisation, qui nécessitent toutes de cloner un dépôt local (cf. "Installer").

Pour réaliser des modifications, lancer le projet en mode "développement local" :
`yarn start`

L'application est scindée en deux blocs :

1 - la navigation et les pages de choix du modèle sont implémentées avec React.js (`/src`)
2 - la page de personnalisation du modèle est implémentée en JavaScript standard (`/public/customize`)

Les modifications les plus abordables :

- modifier le style de l'application (`src/index.css`, `src/App.css`, `src/Components/DecisionTree.css` et `public/customize/css/customize.css`)
- ajouter des pictogrammes (svg) dans `public/customize/pictograms` et les référencer dans `public/customize/pictograms/pictograms.json`
- modifier les textes et intitulés

### Personnalisation des modèles

Attention, la personnalisation des modèles nécessite de bien maîtriser le format SVG.

Il est nécessaire de créer deux versions de chaque modèle :

- une version "composant React" à générer à partir du SVG, grâce à `svgr-cli` : `npx @svgr/cli -d out in` (node >= 11)
- une version SVG standard dont les éléments personnalisables doivent être décrits dans `public/customize/models/models.json`

### Todo modèles SVG

- sauvegarder en svg simple (pas en svg Inkscape)
- penser à ajouter un fond blanc si nécessaire
- passer de 30% à 100% en width et height
- ne pas transformer les textes en objets
- modifier les blocs vectoriels (ex : "texte_titre_badge") en indiquant une _color_ dans le groupe principal, et en ajoutant l'attribut `fill="currentColor"` dans les éléments du groupe. Cela permet de modifier la couleur de l'ensemble en une seule action.
- idem pour les attributs "stroke" des pictogrammes

### Fontes

Pour pouvoir télécharger une image png avec la bonne fonte, celle-ci doit également être installée sur le poste de l'utilisateur.

### Utile

Transformer un svg en composant React (svgr-cli) : 

