import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TableRowDesktop } from "./components/table/TableRowDesktop";
import { TableRowMobile } from "./components/table/TableRowMobile";
import { Employee } from "./types/employee";
import { filterEmployees } from "./utils/filterEmployees";
import { getEmployees } from "./utils/fetchData";
import { TableDesktop } from "./components/table/TableDesktop";
import { TableMobile } from "./components/table/TableMobile";
import { Loading } from "./components/Loading";
import { SearchInput } from "./components/SearchInput";
import { EmployeeNotFound } from "./components/EmployeeNotFound";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function startFetching() {
      try {
        setEmployees([]);
        const result = await getEmployees();
        if (!ignore) {
          setEmployees(result);
        }
      } catch (error) {
        console.error(error);
      }
    }

    let ignore = false;

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  const filteredEmployees = employees?.filter((e) =>
    filterEmployees(e, search)
  );

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <div className="search-and-title-container">
            <h1 className="h1">Funcionários</h1>

            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {!filteredEmployees ? (
            <Loading />
          ) : (
            <>
              <TableMobile>
                {filteredEmployees.map((e) => {
                  return <TableRowMobile key={e.id} employee={e} />;
                })}
              </TableMobile>

              <TableDesktop>
                {filteredEmployees.map((e) => {
                  return <TableRowDesktop key={e.id} employee={e} />;
                })}
              </TableDesktop>
            </>
          )}

          {filteredEmployees?.length === 0 && <EmployeeNotFound />}
        </div>
      </main>
    </>
  );
}

export default App;
