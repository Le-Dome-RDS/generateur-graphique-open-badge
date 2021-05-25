import React from "react";
import { Pc2, Xp3, Sv2, Sv5, Sf2, Sf5, Gp4, Cp4, Cp5, Pc4 } from "./Badges";

function Recurrents() {

  return (
    <>
      <h2>Voici des usages courants</h2>
      <p style={{ marginLeft: "15px" }}>
        Sélectionnez parmi les badges les plus récurrents celui dont vous avez
        besoin.
      </p>
      <div className="blocks-row">
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=pc2"}>
            <p>
              Reconnaître l'entrée dans un parcours de formation de découverte,
              d'apprentissage
            </p>
            <Pc2 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=xp3"}>
            <p>
              Reconnaitre la participation à une session de formation, une
              expérience, un événement
            </p>
            <Xp3 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=sv2"}>
            <p>Reconnaitre une initiation, un test d'un savoir</p>
            <Sv2 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=sv5"}>
            <p>Reconnaître la capacité à transmettre un savoir</p>
            <Sv5 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=sf2"}>
            <p>Reconnaître une initiation, un test, un savoir faire</p>
            <Sf2 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=sf5"}>
            <p>Reconnaître la capacité à transmettre un savoir faire</p>
            <Sf5 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=gp4"}>
            <p>Reconnaître l'engagement actif dans une communauté apprenante</p>
            <Gp4 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=cp4"}>
            <p>Reconnaître la pratique amateure</p>
            <Cp4 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=cp5"}>
            <p>
              Reconnaître la capacité à transmettre une pratique associant
              savoir, savoir faire et savoir être
            </p>
            <Cp5 />
          </a>
        </div>
        <div className="recurrent-choice">
          <a href={process.env.PUBLIC_URL + "customize/index.html?id=pc4"}>
            <p>
              Se créer un badge de rêve ou reconnaître l'aboutissement d'un
              parcours individuel
            </p>
            <Pc4 />
          </a>
        </div>
      </div>
    </>
  );
}

export default Recurrents;
