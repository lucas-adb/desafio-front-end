import { useState } from "react";
import ChevronDownBlue from "../assets/icons/chevron-down-blue.svg";
import ChevronUpBlue from "../assets/icons/chevron-up-blue.svg";
import { Employee } from "../types/employee";
import { formatDate, formatPhone } from "../utils/formatData";

export function TableRowMobile({ employee } : { employee: Employee }) {
  const [showInfo, setShowInfo] = useState(false);

  // console.log(employee);

  return (
    <>
      <tr>
        <td>
          <img
            src={employee.image}
            alt="profile-picture"
            className="tbody__profile-picture"
          />
        </td>
        <td>{employee.name}</td>
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
                <p>{employee.job}</p>
              </div>
            </td>
          </tr>
          <tr className="hidden-tr">
            <td colSpan={3}>
              <div className="hidden-tr__div">
                <p className="h2">Data de admissão:</p>
                <p>{formatDate(employee.admission_date)}</p>
              </div>
            </td>
          </tr>
          <tr className="hidden-tr">
            <td colSpan={3}>
              <div className="hidden-tr__div">
                <p className="h2">Telefone:</p>
                <p>{formatPhone(employee.phone)}</p>
              </div>
            </td>
          </tr>
          <tr className="hidden-tr__empty-row">
            <td></td>
          </tr>
        </>
      )}
    </>
  );
}
