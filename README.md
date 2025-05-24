# 🐾 **Mascota Feliz - Gestión Asíncrona de Veterinaria**  


Bienvenido a **Veterinaria Mascota Feliz**, una aplicación interactiva desarrollada en **JavaScript puro** para gestionar mascotas y sus dueños en una clínica veterinaria. Este proyecto implementa operaciones CRUD con validaciones y simula procesos asíncronos como validaciones de datos, búsquedas y confirmaciones.  

---

## 🚀 **Características Principales**  

✅ **CRUD Completo** para dueños y mascotas  
✅ **Validaciones** de datos en tiempo real  
✅ **Simulaciones asíncronas** con:  
   - 📞 **Callbacks**  
   - 🤝 **Promesas**  
   - ⏳ **Async/Await**  
✅ **Interfaz intuitiva** mediante `prompt()`, `alert()` y `console.log()`  
✅ **Código modular** para mejor mantenibilidad  

---

## 🛠 **Tecnologías Utilizadas**  

| Tecnología | Uso |
|------------|-----|
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) | Lógica principal y asincronía |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) | Estructura básica |
| ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white) | Control de versiones |

---

## ⚙ **Funcionalidades Asíncronas**  

| Operación | Técnica | Simulación |
|-----------|---------|------------|
| **Registro de dueño** | Callback + `setTimeout` | Validación en **1.5 segundos** |
| **Registro de mascota** | Callback + `setTimeout` | Verificación de dueño en **2 segundos** |
| **Búsqueda de mascota** | Promesa | Retraso de **1.5 segundos** |
| **Actualizar estado de salud** | Async/Await | Espera de **1 segundo** (simulando revisión veterinaria) |
| **Eliminar mascota** | Promesa + confirmación | Retraso de **2 segundos** antes de borrar |
| **Listar mascotas por dueño** | Async/Await | Carga de datos en **2 segundos** |

