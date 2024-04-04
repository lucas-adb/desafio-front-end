import { Employee } from "../../types/employee";
import { formatDate, formatPhone } from "../../utils/formatData";

export function TableRowDesktop({ employee }: { employee: Employee }) {
  return (
    <>
      <tr>
        <td>
          <img
            src={employee.image}
            alt={`profile picture of ${employee.name}`}
            className="tbody__profile-picture"
          />
        </td>
        <td>{employee.name}</td>
        <td>{employee.job}</td>
        <td>{formatDate(employee.admission_date)}</td>
        <td>{formatPhone(employee.phone)}</td>
      </tr>
    </>
  );
}
