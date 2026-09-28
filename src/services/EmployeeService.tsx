import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/employees";

export interface EmployeeData {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const listEmployee = () => axios.get(REST_API_URL);

export const createEmployee = (employee: EmployeeData) => axios.post(REST_API_URL, employee);

export const deleteEmployee = (employeeId: number) => axios.delete(`${REST_API_URL}/${employeeId}`);