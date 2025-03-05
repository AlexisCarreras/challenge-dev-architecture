# **Challenge Dev Architecture**

Este proyecto es una solución técnica que implementa una arquitectura basada en **Next.js** y un **Backend for Frontend (BFF)** con **Express**. El objetivo es transformar una maqueta HTML en una aplicación web funcional, con un enfoque en la organización del código, la separación de responsabilidades y la implementación de mejores prácticas.

---

## **Tabla de Contenidos**

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Decisiones Técnicas](#decisiones-técnicas)
3. [Requisitos Cumplidos](#requisitos-cumplidos)
4. [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
5. [Testing y Coverage](#testing-y-coverage)
6. [Despliegue](#despliegue)
7. [Endpoints y Filtros](#endpoints-y-filtros)
8. [Comandos Principales](#comandos-principales)

---

## **Estructura del Proyecto**

El proyecto está organizado como un **monorepo** utilizando `pnpm workspaces`, con una clara separación entre el frontend y el backend:

```
.
├── README.md
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
├── bff/                  # Backend for Frontend (Express + TypeScript)
│   ├── src/
│   │   ├── controllers/  # Controladores para manejar las rutas
│   │   ├── services/     # Lógica de negocio y transformación de datos
│   │   ├── routes/       # Definición de rutas
│   │   ├── utils/        # Utilidades compartidas
│   │   └── index.ts      # Punto de entrada del BFF
│   └── tests/            # Tests unitarios
├── front/                # Frontend (Next.js + TypeScript)
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   ├── pages/        # Páginas de Next.js
│   │   ├── services/     # Servicios para consumir el BFF
│   │   └── utils/        # Utilidades compartidas
│   └── tests/            # Tests unitarios
└── ...
```

---

## **Decisiones Técnicas**

### **1. Separación de Capas**

- **Frontend (Next.js)**: Se encarga del renderizado de la interfaz de usuario y la interacción con el usuario. Utiliza **Server-Side Rendering (SSR)** para mejorar el rendimiento y la experiencia del usuario.
- **Backend for Frontend (BFF - Express)**: Se encarga de consumir la API externa, transformar los datos (filtrado, agrupación de tags, etc.) y enviarlos al frontend en un formato optimizado.

### **2. TypeScript**

- Todo el proyecto está tipado con **TypeScript**, lo que mejora la calidad del código y facilita el mantenimiento.

### **3. Monorepo con pnpm**

- Se utiliza **pnpm workspaces** para gestionar las dependencias de manera eficiente y mantener separadas las configuraciones del frontend y el BFF.

### **4. Docker**

- Se incluyen `Dockerfile` para el frontend y el BFF, además de un `docker-compose.yml` para orquestar ambos servicios. Esto permite levantar el proyecto localmente con Docker.

### **5. Testing**

- Se implementaron **tests unitarios** para componentes críticos y lógica de negocio, con una cobertura del 100% tanto en el frontend como en el BFF.

---

## **Requisitos Cumplidos**

### **1. Separación de Capas**

- El proyecto tiene una clara separación entre el frontend y el BFF, cumpliendo con la arquitectura propuesta.

### **2. Transformación de Datos**

- El BFF filtra los artículos con `subtype === "7"`, agrupa y totaliza los tags, y envía los datos transformados al frontend.

### **3. Renderizado SSR**

- El frontend utiliza `getServerSideProps` para renderizar los datos en el servidor, asegurando una carga inicial rápida.

### **4. Testing**

- Se implementaron tests unitarios para componentes críticos y lógica de negocio, con una cobertura del 100%.

### **5. Despliegue**

- El proyecto está desplegado en **Render**, con enlaces públicos para el frontend y el BFF.

---

## **Cómo Ejecutar el Proyecto**

### **Localmente**

1. Clona el repositorio:

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Ejecuta el BFF:

   ```bash
   pnpm --filter bff dev
   ```

4. Ejecuta el Frontend:

   ```bash
   pnpm --filter front dev
   ```

5. Accede a los servicios:

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - BFF: [http://localhost:5000](http://localhost:5000)

### **Con Docker**

1. Construye y levanta los contenedores:

   ```bash
   docker-compose up --build
   ```

2. Accede a los servicios:

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - BFF: [http://localhost:5000](http://localhost:5000)

---

## **Testing y Coverage**

### **Ejecutar Tests**

- **BFF**:

  ```bash
  pnpm run coverage:bff       # Ver cobertura en consola
  pnpm coverage:ui:bff       # Ver cobertura en UI (http://localhost:8080)
  ```

- **Frontend**:

  ```bash
  pnpm run coverage:front    # Ver cobertura en consola
  pnpm coverage:ui:front     # Ver cobertura en UI (http://localhost:8081)
  ```

---

## **Despliegue**

El proyecto está desplegado en **Render**:

- **Frontend**: [https://front-challenge-architecture.onrender.com/](https://front-challenge-architecture.onrender.com/)
- **BFF**: [https://bff-6n7g.onrender.com/](https://bff-6n7g.onrender.com/)

---

## **Endpoints y Filtros**

### **Endpoints del BFF**

- **Todos los artículos**:
  - Local/Docker: [http://localhost:5000/api/articles](http://localhost:5000/api/articles)
  - Producción: [https://bff-6n7g.onrender.com/api/articles](https://bff-6n7g.onrender.com/api/articles)
- **Artículos filtrados por tag**:
  - Local/Docker: [http://localhost:5000/api/articles?tag=leche-de-coco-tid48865](http://localhost:5000/api/articles?tag=leche-de-coco-tid48865)
  - Producción: [https://bff-6n7g.onrender.com/api/articles?tag=leche-de-coco-tid48865](https://bff-6n7g.onrender.com/api/articles?tag=leche-de-coco-tid48865)

### **Filtros en el Frontend**

- **Artículos filtrados por tag**:
  - Local/Docker: [http://localhost:3000/tema/azucar-tid47141](http://localhost:3000/tema/azucar-tid47141)
  - Producción: [https://front-challenge-architecture.onrender.com/tema/azucar-tid47141](https://front-challenge-architecture.onrender.com/tema/azucar-tid47141)

---

## **Comandos Principales**

| Comando                     | Descripción                                      |
|-----------------------------|--------------------------------------------------|
| `pnpm lint --fix`           | Corrige errores de linteo en todo el monorepo.   |
| `pnpm --filter bff dev`     | Ejecuta el BFF localmente.                      |
| `pnpm --filter front dev`   | Ejecuta el Frontend localmente.                 |
| `docker-compose up --build` | Levanta el proyecto con Docker.                 |
| `docker-compose down`       | Detiene los contenedores de Docker.             |

---