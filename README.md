# Employee Management System (EMS) - Frontend

Aplicación web frontend sencilla para la gestión de empleados (EMS), desarrollada con React, TypeScript y Vite[cite: 1].

## Tecnologías Utilizadas

* **React**[cite: 1]
* **TypeScript**[cite: 1]
* **Vite**[cite: 1]
* **ESLint**[cite: 1]

## Estructura Principal del Proyecto

```text
src/
├── assets/          # Imágenes y recursos gráficos (hero.png, svg)
├── components/      # Componentes de la interfaz
│   ├── EmployeeComponent.tsx      # Formulario / detalle de empleado
│   └── ListEmployeeComponent.tsx  # Listado de empleados
├── services/        # Capa de comunicación con la API
│   └── EmployeeService.tsx        # Métodos para consumir el backend
├── App.tsx          # Componente principal
└── main.tsx         # Punto de entrada de la aplicación
```[cite: 1]

## Instalación y Configuración

1. **Instalar dependencias:**
   ```bash
   npm install
