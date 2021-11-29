import "./App.css";
import LogoCanope from "./img/logo_canope14.png";
import LogoAgri from "./img/Logo_cran_noir.svg";
import LogoMetiers from "./img/logo_chambre_metier_artisanat_normandie.svg";
import LogoRegion from "./img/logo-region-normandie-noir.svg";
import LogoEurope from "./img/europe_noir.svg";
import LogoDome from "./img/logo_dome_noir.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Home from "./Home";
import Recurrents from "./Recurrents";
import Matrix from "./Matrix";
import Questions from "./Questions";

function App() {
  return (
    <Router basename="/generateur">
      <div className="App">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <header>
            <h1>
              <Link to="/" style={{ textDecoration: "none", color: "#403b33" }}>
                Générateur de visuel pour{" "}
                <span style={{ color: "#d3643b" }}>Open badge</span>
              </Link>
            </h1>
            <nav>
              <ul>
                <li>
                  <NavLink to="/recurrents" activeClassName="menu-selected">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bookmark-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>{" "}
                    Récurrents
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/matrix" activeClassName="menu-selected">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>{" "}
                    Matrice
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/questions" activeClassName="menu-selected">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-diagram-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                      />
                    </svg>{" "}
                    Questions
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <div id="main-content">
              <Switch>
                <Route path="/recurrents">
                  <Recurrents />
                </Route>
                <Route path="/matrix">
                  <Matrix />
                </Route>
                <Route path="/questions">
                  <Questions />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route
                  exact
                  path="/customize"
                  render={() => {
                    window.location.href =
                      window.location.host + "/customize/index.html";
                    return null;
                  }}
                />
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </div>
          </main>
          <footer>
            <div id="footer-content">
              <div className="bloc-logos">
                <img
                  src={LogoCanope}
                  alt="logo Canopé"
                  className="footer-logo"
                />
                <img src={LogoAgri} alt="logo CRAN" className="footer-logo" />
                <img
                  src={LogoMetiers}
                  alt="logo Chambre des métiers"
                  className="footer-logo"
                />
                <img
                  src={LogoRegion}
                  alt="logo Region"
                  className="footer-logo"
                />
                <img
                  src={LogoEurope}
                  alt="logo Europe"
                  className="footer-logo"
                />
                <img src={LogoDome} alt="logo Dôme" className="footer-logo" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

function NoMatch() {
  return <h2>Cette page n'existe pas</h2>;
}

export default App;
