🐾 Gestión Asíncrona de una Veterinaria - README
📝 Descripción del Proyecto
Este proyecto es una aplicación interactiva en JavaScript puro para gestionar mascotas y sus dueños en una clínica veterinaria. La aplicación implementa operaciones CRUD básicas con validaciones y manejo de datos en memoria, destacando el uso de diferentes técnicas de asincronía (callbacks, Promesas y async/await) para simular procesos comunes en una veterinaria como validaciones, búsquedas y confirmaciones.

🛠 Tecnologías Usadas
JavaScript Vanilla (sin frameworks)

HTML básico para la interfaz

Programación asíncrona:

Callbacks

Promesas

Async/Await

setTimeout para simulaciones de retraso

Estructura modular de código

⚡ Implementación de Asincronía
El proyecto aplica diferentes patrones de asincronía en las siguientes funcionalidades:

Registro de dueño: Usa callback + setTimeout para simular validación de datos (1.5s)

Registro de mascota: Callback + setTimeout para validar existencia del dueño (2s)

Búsqueda de mascota: Implementada con Promesas y retraso de 1.5s

Actualización de estado: Async/await con espera simulada de 1s

Eliminación de mascota: Promesa con confirmación tras 2 segundos

Mascotas por dueño: Async/await con retardo de carga de 2s

🏗 Estructura del Código
El código está organizado en funciones modulares para cada operación:

Funciones para CRUD de dueños

Funciones para CRUD de mascotas

Funciones de validación

Funciones asíncronas con diferentes patrones

Menú interactivo principal

🖥 Interfaz
La aplicación se controla completamente mediante:

prompt() para entrada de datos

alert() para mostrar resultados

console.log() para registro de operaciones