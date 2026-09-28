import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const ListEmployeeComponent: React.FC = () => {
  const navigator = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployee()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de empleados:', error);
      });
  }

  function addNewEmployee() {
    navigator('/addEmployee');
  }

  function updateEmployee(id: number) {
    navigator(`/editEmployee/${id}`);
  }

  function removeEmployee(id: number) {
    deleteEmployee(id)
      .then(() => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error('Error al eliminar el empleado:', error);
      });
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Empleados</h2>
      <div className="table-responsive">
        <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
          Añadir empleado
        </button>
        <table className="table table-striped table-hover table-bordered shadow-sm">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button
                    className="btn btn-info me-2"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeEmployee(employee.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
