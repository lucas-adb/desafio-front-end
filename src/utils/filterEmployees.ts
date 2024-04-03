import { Employee } from "../types/employee";

export function filterEmployees(employee: Employee, search: string) {
  const formattedSearch = search.toLowerCase().trim();

  if (formattedSearch === "") return true;

  return (
    employee.name.toLowerCase().includes(formattedSearch) ||
    employee.job.toLowerCase().includes(formattedSearch) ||
    employee.phone.toLowerCase().includes(formattedSearch)
  );
}