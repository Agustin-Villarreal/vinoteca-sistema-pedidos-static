# Pruebas Funcionales – Vinoteca Sistema de Pedidos

Este documento registra las pruebas realizadas sobre la versión final del sistema de gestión de pedidos para vinoteca, desarrollado como proyecto del Taller de Proyectos II.

---

## Tabla de casos de prueba

| Nº | Caso de prueba           | Acción realizada                                                                 | Resultado esperado                                                       | Resultado obtenido                                         | Estado |
|----|--------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------|------------------------------------------------------------|--------|
| 1  | Alta de pedido           | Completar todos los campos del formulario y presionar “Registrar pedido”.       | Se agrega un nuevo pedido al listado, con total calculado correctamente. | El pedido se agrega con los datos correctos y total ok.    | OK     |
| 2  | Validación de campos     | Intentar registrar un pedido dejando algún campo obligatorio vacío.             | El sistema muestra un mensaje indicando que se deben completar campos.   | Se muestra mensaje “Completa todos los campos.”           | OK     |
| 3  | Cálculo de total         | Ingresar cantidad y precio y registrar el pedido.                               | El total = cantidad × precio (formato numérico correcto).                | El total se calcula correctamente con dos decimales.       | OK     |
| 4  | Persistencia local       | Crear uno o más pedidos y recargar la página del navegador.                     | Los pedidos permanecen visibles en el listado.                            | Los pedidos se mantienen gracias a `localStorage`.         | OK     |
| 5  | Búsqueda por texto       | Escribir parte del nombre del cliente o producto en el buscador.                | La tabla muestra solo los pedidos que coinciden con el término buscado.  | El filtrado funciona correctamente (se actualiza al tipear). | OK   |
| 6  | Ordenamiento de columnas | Hacer clic sobre los encabezados de las columnas ordenables (ID, cliente, etc). | El orden de las filas cambia según la columna seleccionada.              | El listado se reordena según la columna y el sentido elegido. | OK   |
| 7  | Exportación a CSV        | Presionar el botón “Exportar CSV”.                                              | Se descarga un archivo `pedidos.csv` con los registros actuales.         | El archivo se genera y puede abrirse en Excel/Calc.        | OK     |
| 8  | Limpieza total           | Presionar el botón “Limpiar todo” y confirmar la acción.                        | Se eliminan todos los pedidos y la tabla queda vacía.                    | Los pedidos se eliminan del listado y de `localStorage`.   | OK     |

---

## Conclusiones de la evaluación

Las pruebas realizadas confirman que:

- El sistema cumple con los requerimientos funcionales definidos.
- La interfaz es usable y responde adecuadamente a las acciones del usuario.
- La persistencia local mediante `localStorage` resulta suficiente para el alcance académico del proyecto.
- La exportación a CSV facilita la posterior utilización de los datos en otras herramientas (por ejemplo, planillas de cálculo).

En base a estas evidencias, el sistema se considera **apto para su entrega como proyecto final** del Taller de Proyectos II.
