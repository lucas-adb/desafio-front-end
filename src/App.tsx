import { useState } from "react";
import "./App.css";
import ChevronDownBlue from "./assets/icons/chevron-down-blue.svg";
import ChevronUpBlue from "./assets/icons/chevron-up-blue.svg";
import ProfilePhoto from "./assets/images/profile-test.png";
import SearchIcon from "./assets/icons/search-icon-gray.svg";
import { Header } from "./components/Header";
import { TableRowMobile } from "./components/TableRowMobile";

const test = {
  id: 1,
  name: "João",
  job: "Back-end",
  admission_date: "2019-12-02T00:00:00.000Z",
  phone: "5551234567890",
  image:
    "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
};

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

                <TableRowMobile employee={test} />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
