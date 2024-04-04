import { Employee } from "../types/employee";

export async function getEmployees(): Promise<Employee[]> {
  const response = await fetch("http://localhost:3000/employees");
  if (!response.ok) throw new Error("Algo de errado aconteceu no fetch");
  const data = await response.json();
  return data;
}
