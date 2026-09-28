import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../services/EmployeeService';

export const EmployeeComponent: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigator = useNavigate();

  function saveEmployee(e: React.FormEvent) {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    createEmployee(employee).then((Response) => console.log(Response.data))
    navigator('/Employees');
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h3>Añadir Empleado</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={saveEmployee}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="Introduce el nombre"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Apellidos:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Introduce los apellidos"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Introduce el email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button type="submit" className="btn btn-success">
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={saveEmployee}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;

