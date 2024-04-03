import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./assets/icons/search-icon-gray.svg";
import { Header } from "./components/Header";
import { TableRowDesktop } from "./components/TableRowDesktop";
import { TableRowMobile } from "./components/TableRowMobile";
import { Employee } from "./types/employee";
import { filterEmployees } from "./utils/filterEmployees";
import { getEmployees } from "./utils/fetchData";
import { TableDesktop } from "./components/TableDesktop";
import { TableMobile } from "./components/TableMobile";

function App() {
  const [employees, setEmployees] = useState<Employee[] | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let ignore = false;
    setEmployees(null);
    getEmployees().then((result) => {
      if (!ignore) {
        setEmployees(result);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <div className="main__container">
          <div className="search-and-title-container">
            <h1 className="h1">Funcionários</h1>

            <div className="search-container">
              <input
                type="text"
                placeholder="Pesquisar"
                className="h3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <img src={SearchIcon} alt="search-icon" />
            </div>
          </div>

          <TableMobile>
            {!employees ? (
              <tr>
                <td>Carregando...</td>
              </tr>
            ) : (
              employees.map((e) => {
                return <TableRowMobile key={e.id} employee={e} />;
              })
            )}
          </TableMobile>

          <TableDesktop>
            {!employees ? (
              <tr>
                <td>Carregando...</td>
              </tr>
            ) : (
              employees
                .filter((e) => filterEmployees(e, search))
                .map((e) => {
                  return <TableRowDesktop key={e.id} employee={e} />;
                })
            )}
          </TableDesktop>
        </div>
      </main>
    </>
  );
}

export default App;
