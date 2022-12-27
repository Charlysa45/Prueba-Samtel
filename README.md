# Prueba Técnica "To Do List" by Carlos Rincón

=====================================================

Este proyecto es una prueba técnica para el puesto de Desarrollador Frontend para la empresa Samtel Consultores Colombia. 

A continuación encontrará las instrucciones de operación de la aplicación.

=====================================================

La aplicación cuenta con dos páginas principales: 

- Login 
- Home

**Login**

En la página de Login encontrará un formulario con dos campos a ingresar: *username* y *password*, validados de forma que tanto el usuario como la contraseña ingresadas sean correspondientes y se logre un ingreso exitoso. **(los usuarios y contraseñas disponibles se encuentran más abajo del documento).**

Para la validación del sistema de login, se utilizaron los usuarios almacenados en la API de libre uso *"DummyJSON"*, la cual cuenta con un gran número de fake-accounts con sus respectivas tokens de sesión, muy útiles para el desarrollo de la aplicación.

*Sitio web de DummyJSON:* https://dummyjson.com/

**cuentas utilizables para inicio de sesión en la aplicación:**

**username:** atuny0  
**password:** 9uQFF1Lh

========

**username:** hbingley1  
**password:** CQutx25i8r

========

**username:** rshawe2  
**password:** OWsTbMUgFc

========

**username:** yraigatt3  
**password:** sRQxjPfdS

========

**username:** kmeus4  
**password:** aUTdmmmbH

========

*(Hay más usuarios disponibles en la documentación web de DummyJSON)*

**Home**

En el home podrá visualizar una tarjeta de usuario dinámica, la cual se servirá de los datos existentes del usuario logeado en la API pública de *DummyJSON* como su nombre y su apellido.

Al hacer click en la tarjeta, se desplegará el botón correspondiente para realizar el logout o la salida del usuario.

En el centro podrá visualizar la maqueta de una herramienta de enlistado de tareas. Aparecerá un campo para añadir una tarea y tres "tasks" con una checkbox por defecto renderizadas dinámicamente sirviéndose de un archivo JSON alojado localmente en la carpeta del proyecto.

==========================================

**Librerías**

Se utilizaron las siguientes librerías para el desarrollo de la aplicacion:

-**react-router-dom:** paginacíón dinámica de la aplicación.

-**axios:** simplificación de peticiones a la API utilizada.

'-**react-icons:** librería de iconos para react.

-**framer-motion:** animaciones dinámicas.

==============================================

Proyecto realizado por Carlos Rincón S. - 2022, Colombia.