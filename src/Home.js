import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const linkTo = useCallback((path) => history.push(path), [history]);
  return (
    <>
      <p className="home-text-block">
        Le but de ce site est de vous guider dans le choix, la conception et la
        déclinaison graphique des open badges que vous souhaitez réaliser. Les
        usages et les visuels de badges proposés s'appuient sur une "matrice de
        badges", fruit de plusieurs années de travail collaboratif avec les
        membres du collectif <strong>Badgeons la Normandie</strong> et de
        l'Association <strong>Reconnaître</strong> et piloté par{" "}
        <strong>Le Dôme</strong>.<br />
      </p>
      <div className="blocks-row">
        <div className="user-choice" onClick={() => linkTo("/recurrents")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-bookmark-star"
            viewBox="0 0 16 16"
          >
            <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          </svg>
          Sélectionner parmi les badges les plus récurrents, le badge dont vous
          avez besoin.
        </div>
        <div className="user-choice" onClick={() => linkTo("/matrix")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          Parcourez la Matrice pour sélectionner le badge qui vous convient.
        </div>
        <div className="user-choice" onClick={() => linkTo("/questions")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-diagram-3"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
            />
          </svg>
          Répondez à une suite de questions pour sélectionner le badge le plus
          adapté à votre besoin.
        </div>
      </div>
      <p className="home-text-block">
        Cette matrice de badges s'appuie sur quatre catégories de badges de
        "savoir et compétence" et quatre catégories de badges "d'engagement et
        participation". Chacune de ces catégories peut se décliner en 5 classes
        qui traduisent des postures plus que des niveaux ou une hiérarchie,
        allant de la découverte à la transmission. Pour concevoir votre badge,
        laisser vous guider au fil des questions, reprenez quelques exemples
        déjà imaginés par d'autres ou bien parcourez la matrice et sélectionnez
        directement vos visuels parmi ceux qui vous sont proposés. Vous pourrez
        ensuite le personnaliser, en changeant ses couleurs et son visuel.
      </p>
    </>
  );
}

export default Home;
