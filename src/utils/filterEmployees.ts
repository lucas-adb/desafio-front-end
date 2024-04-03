import { Employee } from "../types/employee";
import { formatPhone, removeAccents } from "./formatData";

export function filterEmployees(employee: Employee, search: string) {
  const formattedSearch = removeAccents(search.toLowerCase().trim());

  if (formattedSearch === "") return true;

  const formattedPhone = formatPhone(employee.phone);
  const formattedName = removeAccents(employee.name);
  const formattedJob = removeAccents(employee.job);

  return (
    formattedName.toLowerCase().includes(formattedSearch) ||
    formattedJob.toLowerCase().includes(formattedSearch) ||
    formattedPhone.toLowerCase().includes(formattedSearch)
  );
}