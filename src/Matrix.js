import React, { useState } from "react";
import MatrixCell from "./Components/MatrixCell";
import {
  Cp1,
  Cp2,
  Cp3,
  Cp4,
  Cp5,
  Gp1,
  Gp2,
  Gp3,
  Gp4,
  Gp5,
  Pc1,
  Pc2,
  Pc3,
  Pc4,
  Pc5,
  Pj1,
  Pj2,
  Pj3,
  Pj4,
  Pj5,
  Se1,
  Se2,
  Se3,
  Se4,
  Se5,
  Sf1,
  Sf2,
  Sf3,
  Sf4,
  Sf5,
  Sv1,
  Sv2,
  Sv3,
  Sv4,
  Sv5,
  Xp1,
  Xp2,
  Xp3,
  Xp4,
  Xp5,
} from "./Badges";

function Matrix() {
  const [display, setDisplay] = useState("left");
  const [displayMode, setDisplayMode] = useState("partial");

  const toggleDisplayMode = () => {
    const newDisplayMode = displayMode === "partial" ? "all" : "partial";
    setDisplayMode(newDisplayMode);
  };

  return (
    <>
      <h2>Matrice des badges</h2>
      <p id="matrix-change-display-mode" onClick={toggleDisplayMode}>
        <button>{displayMode === "all" ? "Vue partielle" : "Voir tout"}</button>
      </p>
      <div style={{ display: "flex" }}>
        {displayMode === "partial" && display === "right" && (
          <div id="matrix-arrow-left" onClick={() => setDisplay("left")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
            <br />
            <p>Savoirs et compétences</p>
            Compétence
            <br />
            Savoir
            <br />
            Savoir-faire
            <br />
            Savoir-être
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th className="matrix-supheader">&nbsp;</th>
              {(displayMode === "all" || display === "left") && (
                <th colSpan="4" className="matrix-supheader">
                  Savoirs et compétences
                </th>
              )}
              {(displayMode === "all" || display === "right") && (
                <th colSpan="4" className="matrix-supheader">
                  Engagement et participation
                </th>
              )}
            </tr>
            <tr>
              <th>&nbsp;</th>
              {(displayMode === "all" || display === "left") && (
                <>
                  <th className="matrix-header">Compétence</th>
                  <th className="matrix-header">Savoir</th>
                  <th className="matrix-header">Savoir-faire</th>
                  <th className="matrix-header">Savoir-être</th>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <th className="matrix-header">Expérience</th>
                  <th className="matrix-header">
                    Projet
                    <br />
                    Programme
                  </th>
                  <th className="matrix-header">
                    Groupe
                    <br />
                    Communauté
                  </th>
                  <th className="matrix-header">Parcours</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" rowSpan="5" className="matrix-supheader">
                <span
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "sideways-right",
                    transform: "rotate(180deg)",
                    minWidth: "50px",
                  }}
                >
                  Postures
                </span>
              </th>
              {(displayMode === "all" || display === "left") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="cp1"
                      tooltipText="Voir, découvrir, prendre connaissance<br />Classe de badge de compétence qui indique une posture passive, mais qui peut aussi témoigner que l'on n'a encore rien fait mais que l'on souhaite pratiquer.<br />Texte conseillé : j'ai découvert, je souhaite pratiquer."
                    >
                      <Cp1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sv1"
                      tooltipText="Voir, découvrir, prendre connaissance<br />Classe de badge de savoir qui indique une posture passive, ou bien que l'on souhaite apprendre.<br />Texte conseillé :  j'ai découvert, je veux apprendre, je souhaite m'initier."
                    >
                      <Sv1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sf1"
                      tooltipText="Voir, découvrir, prendre connaissance<br />Classe de badge de savoir faire qui indique une posture passive pu bien que l'on souhaite apprendre.<br />Texte conseillé :  j'ai découvert, je veux apprendre, je souhaite connaitre, j'ai découvert, je veux apprendre, je veux tester."
                    >
                      <Sf1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="se1"
                      tooltipText="Voir, découvrir, prendre connaissance<br />Classe de badge qui indique une posture passive, ou bien que l'on souhaite apprendre.<br />Texte conseillé :  j'ai découvert, je veux apprendre, je souhaite connaitre, j'ai découvert, je veux comprendre, je veux tester"
                    >
                      <Se1 />
                    </MatrixCell>
                  </td>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="xp1"
                      tooltipText="Classe de badge indiquant un degré de participation passif à un événement, une expérience, sur un temps court ou prolongé.<br />Texte conseillé : j'y étais, je suis venus., j'ai envie d'y aller, ..."
                    >
                      <Xp1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pj1"
                      tooltipText="Classe de badge indiquant la découverte ou l'envie de participer à un projet, un programme ou un dispositif.<br />Texte conseillé : j'ai découvert, je souhaite m'engager, je souhaite participer"
                    >
                      <Pj1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="gp1"
                      tooltipText="Classe de badge indiquant la découverte ou l'envie de participer à un groupe ou à une communauté. <br />Texte conseillé : j'ai découvert, je souhaite m'engager, je souhaite participer"
                    >
                      <Gp1 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pc1"
                      tooltipText="Badge pour témoigner d'un etat de départ, d'un rêve de désir, d'envie ou de souhait.<br />Texte conseillé : j'en suis là, je souhaite m'engager, je vous souhaite de, badge de rêve, quand je serai grand je serai"
                    >
                      <Pc1 />
                    </MatrixCell>
                  </td>
                </>
              )}
            </tr>
            <tr>
              {(displayMode === "all" || display === "left") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="cp2"
                      tooltipText="S'initier, commencer à apprendre, tester, ...<br />Classe de badge de compétence qui indique une action, une initiation.<br />Texte conseillé : j'ai essayé, j'ai testé"
                    >
                      <Cp2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sv2"
                      tooltipText="S'initier, commencer à apprendre, ... <br />Classe de badge de savoir qui indique une action, une première participation, une initiation.<br />Texte conseillé : je suis initié·e, j'ai testé, j'ai des notions, on m'a initié, initiation."
                    >
                      <Sv2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sf2"
                      tooltipText="S'initier, commencer à apprendre, tester, ...<br />Classe de badge de savoir faire qui indique une action, une première participation, une initiation.<br />Texte conseillé : je suis initié·e, j'ai testé, j'ai des notions, on m'a initié, j'ai expérimenté, on m'a guidé, j'ai fait."
                    >
                      <Sf2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="se2"
                      tooltipText="S'initier, tester, comprendre<br />Classe de badge de savoir être qui indique une action, une tentative.<br />Texte conseillé : j'ai testé, on m'a initié, j'ai expérimenté, on m'a guidé, j'ai essayé, je m'intéresse à"
                    >
                      <Se2 />
                    </MatrixCell>
                  </td>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="xp2"
                      tooltipText="Classe de badge indiquant un degré de participation actif ou symbolique à un événement, attestation de présence à une formation, sur un temps court ou prolongé.<br />Texte conseillé :  j'ai assisté, j'ai expérimenté, j'ai testé, ... je soutien."
                    >
                      <Xp2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pj2"
                      tooltipText="Classe de badge indiquant le soutien moral, financier ou politique à un projet, un programme ou un dispositif.<br />Texte conseillé : je soutien, membre soutien, adhérent·e,"
                    >
                      <Pj2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="gp2"
                      tooltipText="Classe de badge indiquant le soutien moral, financier ou politique à un groupe ou une communauté.<br />Texte conseillé : je soutien, membre soutien, adhérent·e, "
                    >
                      <Gp2 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pc2"
                      tooltipText="Badge pour témoigner d'un début de parcours.<br />Texte conseillé : je m'engage, je suis engagé, j'ai débuté, je me suis engagé"
                    >
                      <Pc2 />
                    </MatrixCell>
                  </td>
                </>
              )}
            </tr>
            <tr>
              {(displayMode === "all" || display === "left") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="cp3"
                      tooltipText="Classe de badge de compétence qui indique une connaissance pratique.<br />Texte conseillé : Je peux, je pratique"
                    >
                      <Cp3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sv3"
                      tooltipText="Connaître, étudier : Classe de badge de savoir qui indique une connaissance d'un sujet, qu'on l'a étudié, que l'on a été formé.<br />Texte conseillé : je connais, je pratique, je suis formé, j'ai étudié."
                    >
                      <Sv3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sf3"
                      tooltipText="Faire et savoir faire, savoir reproduire : classe de badge de savoir faire qui indique une connaissance pratique.<br />Texte conseillé : je pratique, je suis formé, je sais faire, je fais."
                    >
                      <Sf3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="se3"
                      tooltipText="Trait de caractère ou savoir être mis ene oeuvre spécifiquement.<br />Texte conseillé : je suis, j'essaye de ... , "
                    >
                      <Se3 />
                    </MatrixCell>
                  </td>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="xp3"
                      tooltipText="Classe de badge indiquant un apport, une intervention, une contribution à un événement, une formation, une manifestation.<br />Texte conseillé : je suis intervenu, partenaire officiel, je contribue, j'ai survécu, ..."
                    >
                      <Xp3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pj3"
                      tooltipText="Classe de badge indiquant un apport, une contribution active à un projet, un programme ou un dispositif.<br />Texte conseillé : je contribue, j'ai contribué, membre actif, j'agis pour, ..."
                    >
                      <Pj3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="gp3"
                      tooltipText="Classe de badge indiquant un apport, une contribution active à un groupe ou une communauté.<br />Texte conseillé : je contribue, j'ai contribué, membre actif, j'agis pour, ..."
                    >
                      <Gp3 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pc3"
                      tooltipText="Badge pour témoigner d'un parcours en cours ou passé.<br >/Texte conseillé : je suis, j'ai été"
                    >
                      <Pc3 />
                    </MatrixCell>
                  </td>
                </>
              )}
            </tr>
            <tr>
              {(displayMode === "all" || display === "left") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="cp4"
                      tooltipText="Être amateur·e, enrichir ses méthode et entretenir ses outils, avoir une approche réflexive poussée sur ses pratiques<br />Classe de badge de compétence qui indique une forme d'innovation, de créativité, de réflexivité.<br />Texte conseillé : je sais, je comprends"
                    >
                      <Cp4 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sv4"
                      tooltipText="Être amateur·e, enrichir et produire de la connaissance sur un sujet<br />Classe de badge de savoir qui indique une connaissance importante d'un sujet, une expertise.<br />Texte Conseillé : expertise, je suis expert·e, je suis amateur·e"
                    >
                      <Sv4 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sf4"
                      tooltipText="Être amateur·e, enrichir ses méthode et entretenir ses outils<br />Classe de badge de savoir faire qui indique une forme d'innovation et de créativité.<br />Texte conseillé : expertise, je suis expert·e, je suis amateur·e, je sais imaginer, créer, innover, j'entretien, je sais entretenir."
                    >
                      <Sf4 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="se4"
                      tooltipText="Trait de personnalité, état d'esprit.<br />Texte conseillé : je suis exemplaire, je pense être ..."
                    >
                      <Se4 />
                    </MatrixCell>
                  </td>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="xp4"
                      tooltipText="Classe de badge indiquant une interaction, une contribution collaborative, un encadrement particulier à un événement, une formation, une manifestation.<br />Texte conseillé : j'ai co-conçu, j'ai animé, j'anime"
                    >
                      <Xp4 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pj4"
                      tooltipText="Classe de badge indiquant un suivi, une mise en vie, une animation d'un projet, un programme ou un dispositif.<br />Texte conseillé : j'anime."
                    >
                      <Pj4 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="gp4"
                      tooltipText="Classe de badge indiquant un suivi, une mise en vie, une animation d'un groupe ou une communauté.<br />Texte conseillé : j'anime, j'administre"
                    >
                      <Gp4 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pc4"
                      tooltipText="Badge pour témoigner de l'aboutissement d'un parcours.<br />Texte conseillé : j'ai survécu à, j'ai réalisé, je suis parvenu à"
                    >
                      <Pc4 />
                    </MatrixCell>
                  </td>
                </>
              )}
            </tr>
            <tr>
              {(displayMode === "all" || display === "left") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="cp5"
                      tooltipText="Je transmets, je peux tranmettre ou former à une compétence, une pratique."
                    >
                      <Cp5 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sv5"
                      tooltipText="Maîtrise d'un sujet : classe de badge de savoir qui indique la capacité à transmettre.<br />Texte conseillé : Je peux former, je peux transmettre, je peux apprendre."
                    >
                      <Sv5 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="sf5"
                      tooltipText="Maîtrise d'un savoir faire.<br />Texte conseillé : Je peux former, je peux transmettre, je sais transmettre"
                    >
                      <Sf5 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="se5"
                      tooltipText="Formateur, gourou et maître zen ? Je peux transmettre, Je sais transmettre"
                    >
                      <Se5 />
                    </MatrixCell>
                  </td>
                </>
              )}
              {(displayMode === "all" || display === "right") && (
                <>
                  <td>
                    <MatrixCell
                      badgeId="xp5"
                      tooltipText="Classe de badge indiquant le pilotage, l'organisation d'un événement, d'une formation, d'une manifestation.<br />Texte conseillé : j'ai piloté, j'ai organisé, organisation,..."
                    >
                      <Xp5 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pj5"
                      tooltipText="Classe de badge indiquant l'organisation, le pilotage, seul ou à plusieurs d'un projet, un programme ou un dispositif.<br />Texte conseillé : comité de pilotage, je pilote, j'organise"
                    >
                      <Pj5 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="gp5"
                      tooltipText="Classe de badge indiquant l'organisation, le pilotage, seul ou à plusieurs d'un groupe ou une communauté.<br />Texte conseillé : membre du bureau, je pilote, j'organise, je co-dirige, j'ai fondé / membre fondateur, je suis reponsable."
                    >
                      <Gp5 />
                    </MatrixCell>
                  </td>
                  <td>
                    <MatrixCell
                      badgeId="pc5"
                      tooltipText="Badge pour témoigner de la capacité à accompagner un parcours.<br />Texte conseillé : J'ai accompagné, j'accompagne, je peux guider, je peux escorter"
                    >
                      <Pc5 />
                    </MatrixCell>
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
        {displayMode === "partial" && display === "left" && (
          <div id="matrix-arrow-right" onClick={() => setDisplay("right")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-arrow-right-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
            <p>Engagement et participation</p>
            Expérience
            <br />
            Projet / Programme
            <br />
            Groupe / Communauté
            <br />
            Parcours
          </div>
        )}
      </div>
    </>
  );
}

export default Matrix;
