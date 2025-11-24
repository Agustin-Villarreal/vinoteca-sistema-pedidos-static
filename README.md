# Vinoteca – Sistema de Gestión de Pedidos (Demo Estática)

Proyecto académico individual para **Taller de Proyectos II – Universidad Kennedy**.  
El sistema permite gestionar pedidos de una vinoteca mediante una aplicación web estática, pensada para ejecutarse en cualquier navegador y desplegarse fácilmente en GitHub Pages.

---

## Funcionalidades principales

- Alta de pedidos con:
  - Cliente
  - Producto
  - Cantidad
  - Precio unitario
- Cálculo automático del **total** del pedido.
- Listado dinámico de pedidos con:
  - Búsqueda por cliente o producto.
  - Orden por columnas (ID, cliente, producto, fecha, cantidad, precio, total).
- Persistencia local utilizando **`localStorage`** (los pedidos se mantienen al recargar).
- Exportación de pedidos a archivo **CSV**.
- Limpieza total de registros (botón “Limpiar todo”).

---

## Tecnologías utilizadas

- **HTML5** para la estructura.
- **CSS3** para estilos y diseño responsive.
- **JavaScript** nativo para la lógica del lado del cliente.
- **localStorage** para persistir los datos en el navegador.
- **GitHub** y **GitHub Pages** para control de versiones y despliegue.

---

## Cómo ejecutar el proyecto

### Opción 1 – Local (en tu PC)

1. Descargar o clonar este repositorio.
2. Abrir el archivo `index.html` con cualquier navegador web (doble clic).
3. Ya se puede usar el sistema de gestión de pedidos de forma inmediata.

### Opción 2 – Online (GitHub Pages)

El proyecto está desplegado en GitHub Pages para su evaluación:

- **Demo online:**
  
  Demo online (GitHub Pages): https://agustin-villarreal.github.io/vinoteca-sistema-pedidos-static/

---

## Implementación final

La solución se implementa como una **aplicación web estática**, por lo que no requiere servidor backend ni base de datos externa.  
La persistencia de la información se resuelve mediante `localStorage`, lo que permite conservar los pedidos en el navegador incluso después de recargar la página.

La lógica del sistema se encuentra en el archivo `script.js`, que gestiona:

- Alta de pedidos.
- Cálculo de totales.
- Búsqueda y ordenamiento.
- Exportación a CSV.
- Limpieza de datos.

---

## Evaluación y pruebas

Se realizaron pruebas funcionales sobre los principales casos de uso: alta de pedidos, cálculo de totales, persistencia, búsqueda, ordenamiento, exportación a CSV y limpieza de registros.  
Los casos de prueba detallados y sus resultados se encuentran documentados en el archivo:

- [`tests.md`](./tests.md)

Todas las funcionalidades verificadas se comportaron según lo esperado, cumpliendo con los requisitos definidos para el trabajo práctico de Taller de Proyectos II.

---

## Estado del proyecto

- **Estado:** Finalizado ✅  
- **Alcance:** Cumple con los objetivos planteados en los módulos 1 a 4 del Taller de Proyectos II:
  - Análisis de necesidades
  - Diseño de la solución
  - Desarrollo de la aplicación
  - Implementación y evaluación mediante pruebas

---

## Autor

- **Nombre:** Agustín Villarreal  
- **Carrera:** Tecnicatura Universitaria en Tecnología de la Información  
- **Materia:** Taller de Proyectos II – Universidad Kennedy
