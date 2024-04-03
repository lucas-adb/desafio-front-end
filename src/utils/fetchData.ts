import { Employee } from "../types/employee";

export async function getEmployees(): Promise<Employee[]> {
  const response = await fetch("http://localhost:3000/employees");
  const data = await response.json();
  return data;
}