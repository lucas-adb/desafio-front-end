import { useState } from "react";
import "./App.css";
import ChevronDownBlue from "./assets/icons/chevron-down-blue.svg";
import ProfilePhoto from "./assets/images/profile-test.png";

function App() {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <main className="main">
      <header>
        <h1>Be</h1>
      </header>

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
                  <img src={ChevronDownBlue} alt="chevron-down" />
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
    </main>
  );
}

export default App;
