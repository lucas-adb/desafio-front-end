import { useState } from "react";
import "./App.css";
import ChevronDownBlue from "./assets/icons/chevron-down-blue.svg";
import ChevronUpBlue from "./assets/icons/chevron-up-blue.svg";
import ProfilePhoto from "./assets/images/profile-test.png";
import SearchIcon from "./assets/icons/search-icon-gray.svg";
import { Header } from "./components/Header";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Header />

      <main className="main">
        <div className="main__container">
          <h1 className="h1">Funcionários</h1>

          <div className="search-container box-shadow-2">
            <input type="text" placeholder="Pesquisar" className="h3" />
            <img src={SearchIcon} alt="search-icon" />
          </div>

          <div>
            <table className="table--mobile box-shadow-2">
              <thead className="thead--mobile box-shadow-1">
                <tr>
                  <th>FOTO</th>
                  <th>NOME</th>
                  <th>
                    <div className="th__ellipse-div"></div>
                  </th>
                </tr>
              </thead>

              <tbody className="tbody--mobile">
                <tr>
                  <td>
                    <img
                      src={ProfilePhoto}
                      alt="profile-picture"
                      className="tbody__profile-picture"
                    />
                  </td>
                  <td>Giovana L. Arruda</td>
                  <td>
                    <button
                      className="chevron-container-btn"
                      onClick={() => setShowInfo((prevstate) => !prevstate)}
                    >
                      <img
                        src={showInfo ? ChevronUpBlue : ChevronDownBlue}
                        alt="chevron-down"
                      />
                    </button>
                  </td>
                </tr>
                {showInfo && (
                  <>
                    <tr className="hidden-tr">
                      <td colSpan={3}>
                        <div className="hidden-tr__div">
                          <p className="h2">Cargo:</p>
                          <p>Front-end</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="hidden-tr">
                      <td colSpan={3}>
                        <div className="hidden-tr__div">
                          <p className="h2">Data de admissão:</p>
                          <p>00/00/0000</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="hidden-tr">
                      <td colSpan={3}>
                        <div className="hidden-tr__div">
                          <p className="h2">Telefone:</p>
                          <p>+55 (55) 55555-555</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="hidden-tr__empty-row">
                      <td></td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
