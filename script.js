        // Modelo de datos
        let dueños = [];
        let mascotas = [];
        let idDueñoCounter = 1;
        let idMascotaCounter = 1;

        // Estados posibles
        const estadosSalud = ['Sano', 'Enfermo', 'En tratamiento'];
        const especies = ['Perro', 'Gato', 'Ave', 'Reptil', 'Otro'];

        // Función para mostrar en la consola visual
        function logToConsole(message) {
            const consoleOutput = document.getElementById('consoleOutput');
            const entry = document.createElement('div');
            entry.textContent = message;
            consoleOutput.appendChild(entry);
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        }

        // Funciones de validación
        const validarCampo = (valor, nombreCampo) => {
            if (!valor || valor.trim() === '') {
                throw new Error(`El campo ${nombreCampo} no puede estar vacío`);
            }
            return valor.trim();
        };

        const validarNumeroPositivo = (valor, nombreCampo) => {
            const num = Number(valor);
            if (isNaN(num)) {
                throw new Error(`El campo ${nombreCampo} debe ser un número`);
            }
            if (num <= 0) {
                throw new Error(`El campo ${nombreCampo} debe ser positivo`);
            }
            return num;
        };

        const validarOpcion = (valor, opciones, nombreCampo) => {
            if (!opciones.includes(valor)) {
                throw new Error(`El campo ${nombreCampo} debe ser uno de: ${opciones.join(', ')}`);
            }
            return valor;
        };

        // Funciones CRUD para dueños
        const registrarDueño = () => {
            try {
                const nombre = validarCampo(prompt("Ingrese el nombre del dueño:"), "nombre");
                const cedula = validarCampo(prompt("Ingrese la cédula del dueño:"), "cédula");
                const telefono = validarCampo(prompt("Ingrese el teléfono del dueño:"), "teléfono");
                const correo = validarCampo(prompt("Ingrese el correo electrónico del dueño:"), "correo electrónico");

                if (dueños.some(d => d.cedula === cedula)) {
                    throw new Error('Ya existe un dueño con esta cédula');
                }

                const nuevoDueño = {
                    id: idDueñoCounter++,
                    nombre: nombre,
                    cedula: cedula,
                    telefono: telefono,
                    correo: correo
                };

                dueños.push(nuevoDueño);
                alert(`Dueño ${nuevoDueño.nombre} registrado con éxito!`);
                logToConsole(`Nuevo dueño registrado: ${JSON.stringify(nuevoDueño)}`);
            } catch (error) {
                alert(`Error: ${error.message}`);
                logToConsole(`Error al registrar dueño: ${error.message}`);
            }
        };

        const buscarDueñoPorCedula = (cedula) => {
            return dueños.find(d => d.cedula === cedula);
        };

        // Funciones CRUD para mascotas
        const registrarMascota = () => {
            try {
                const nombre = validarCampo(prompt("Ingrese el nombre de la mascota:"), "nombre");
                
                let especie = prompt(`Ingrese la especie de la mascota (${especies.join(', ')}):`);
                especie = validarOpcion(especie, especies, "especie");
                
                const edad = validarNumeroPositivo(prompt("Ingrese la edad de la mascota (años):"), "edad");
                const peso = validarNumeroPositivo(prompt("Ingrese el peso de la mascota (kg):"), "peso");
                
                let estadoSalud = prompt(`Ingrese el estado de salud (${estadosSalud.join(', ')}):`);
                estadoSalud = validarOpcion(estadoSalud, estadosSalud, "estado de salud");
                
                const cedulaDueño = validarCampo(prompt("Ingrese la cédula del dueño:"), "cédula del dueño");
                const dueño = buscarDueñoPorCedula(cedulaDueño);
                
                if (!dueño) {
                    throw new Error('No existe un dueño con esta cédula');
                }

                const nuevaMascota = {
                    id: idMascotaCounter++,
                    nombre: nombre,
                    especie: especie,
                    edad: edad,
                    peso: peso,
                    estadoSalud: estadoSalud,
                    idDueño: dueño.id
                };

                mascotas.push(nuevaMascota);
                alert(`Mascota ${nuevaMascota.nombre} registrada con éxito!`);
                logToConsole(`Nueva mascota registrada: ${JSON.stringify(nuevaMascota)}`);
            } catch (error) {
                alert(`Error: ${error.message}`);
                logToConsole(`Error al registrar mascota: ${error.message}`);
            }
        };

        const buscarMascotaPorNombre = () => {
            try {
                const nombre = validarCampo(prompt("Ingrese el nombre de la mascota a buscar:"), "nombre");
                const mascotasEncontradas = mascotas.filter(m => 
                    m.nombre.toLowerCase().includes(nombre.toLowerCase())
                );
                
                if (mascotasEncontradas.length === 0) {
                    alert("No se encontraron mascotas con ese nombre");
                    logToConsole(`Búsqueda de mascota: No se encontraron mascotas con nombre "${nombre}"`);
                } else {
                    logToConsole(`Mascotas encontradas (${mascotasEncontradas.length}) con nombre "${nombre}":`);
                    mascotasEncontradas.forEach(m => logToConsole(JSON.stringify(m)));
                    
                    let mensaje = "Mascotas encontradas:\n";
                    mascotasEncontradas.forEach(m => {
                        const dueño = dueños.find(d => d.id === m.idDueño);
                        mensaje += `\n- ${m.nombre} (${m.especie}), ${m.edad} años, ${m.peso}kg, ${m.estadoSalud}\n  Dueño: ${dueño.nombre} (${dueño.cedula})`;
                    });
                    alert(mensaje);
                }
            } catch (error) {
                alert(`Error: ${error.message}`);
                logToConsole(`Error en búsqueda de mascota: ${error.message}`);
            }
        };

        const listarTodasMascotas = () => {
            if (mascotas.length === 0) {
                alert("No hay mascotas registradas");
                logToConsole("No hay mascotas registradas para listar");
                return;
            }

            logToConsole(`Listado de todas las mascotas (${mascotas.length}):`);
            mascotas.forEach(m => logToConsole(JSON.stringify(m)));
            
            let mensaje = "Listado de todas las mascotas:\n";
            mascotas.forEach(m => {
                const dueño = dueños.find(d => d.id === m.idDueño);
                mensaje += `\n- ${m.nombre} (${m.especie}), ${m.edad} años, ${m.peso}kg, ${m.estadoSalud}\n  Dueño: ${dueño.nombre} (${dueño.cedula})`;
            });
            alert(mensaje);
        };

        const actualizarEstadoSalud = () => {
            try {
                const nombre = validarCampo(prompt("Ingrese el nombre de la mascota:"), "nombre");
                const mascotasEncontradas = mascotas.filter(m => 
                    m.nombre.toLowerCase().includes(nombre.toLowerCase())
                );
                
                if (mascotasEncontradas.length === 0) {
                    throw new Error("No se encontraron mascotas con ese nombre");
                }
                
                if (mascotasEncontradas.length > 1) {
                    let mensaje = "Hay varias mascotas con ese nombre:\n";
                    mascotasEncontradas.forEach((m, i) => {
                        mensaje += `\n${i+1}. ${m.nombre} (${m.especie}), Dueño: ${dueños.find(d => d.id === m.idDueño).nombre}`;
                    });
                    mensaje += "\n\nPor favor, especifique mejor el nombre.";
                    alert(mensaje);
                    return;
                }
                
                const mascota = mascotasEncontradas[0];
                let nuevoEstado = prompt(
                    `Estado actual: ${mascota.estadoSalud}\nIngrese el nuevo estado (${estadosSalud.join(', ')}):`
                );
                nuevoEstado = validarOpcion(nuevoEstado, estadosSalud, "estado de salud");
                
                mascota.estadoSalud = nuevoEstado;
                alert(`Estado de ${mascota.nombre} actualizado a ${nuevoEstado}`);
                logToConsole(`Mascota actualizada: ${JSON.stringify(mascota)}`);
            } catch (error) {
                alert(`Error: ${error.message}`);
                logToConsole(`Error al actualizar estado de salud: ${error.message}`);
            }
        };

        const eliminarMascota = () => {
            try {
                const nombre = validarCampo(prompt("Ingrese el nombre de la mascota a eliminar:"), "nombre");
                const mascotasEncontradas = mascotas.filter(m => 
                    m.nombre.toLowerCase().includes(nombre.toLowerCase())
                );
                
                if (mascotasEncontradas.length === 0) {
                    throw new Error("No se encontró la mascota");
                }
                
                if (mascotasEncontradas.length > 1) {
                    let mensaje = "Hay varias mascotas con ese nombre:\n";
                    mascotasEncontradas.forEach((m, i) => {
                        mensaje += `\n${i+1}. ${m.nombre} (${m.especie}), Dueño: ${dueños.find(d => d.id === m.idDueño).nombre}`;
                    });
                    mensaje += "\n\nPor favor, especifique mejor el nombre.";
                    alert(mensaje);
                    return;
                }
                
                const mascota = mascotasEncontradas[0];
                const confirmacion = confirm(`¿Está seguro de eliminar a ${mascota.nombre}? Esta acción no se puede deshacer.`);
                
                if (confirmacion) {
                    const index = mascotas.findIndex(m => m.id === mascota.id);
                    mascotas.splice(index, 1);
                    alert(`Mascota ${mascota.nombre} eliminada con éxito`);
                    logToConsole(`Mascota eliminada: ${JSON.stringify(mascota)}`);
                } else {
                    alert("Eliminación cancelada");
                    logToConsole("Eliminación de mascota cancelada por el usuario");
                }
            } catch (error) {
                alert(`Error: ${error.message}`);
                logToConsole(`Error al eliminar mascota: ${error.message}`);
            }
        };

        const listarMascotasDeDueño = () => {
            try {
                const cedula = validarCampo(prompt("Ingrese la cédula del dueño:"), "cédula");
                const dueño = buscarDueñoPorCedula(cedula);
                
                if (!dueño) {
                    throw new Error("No existe un dueño con esta cédula");
                }
                
                const mascotasDueño = mascotas.filter(m => m.idDueño === dueño.id);
                
                if (mascotasDueño.length === 0) {
                    alert(`${dueño.nombre} no tiene mascotas registradas`);
                    logToConsole(`${dueño.nombre} no tiene mascotas registradas`);
                    return;
                }
                
                logToConsole(`Mascotas de ${dueño.nombre} (${mascotasDueño.length}):`);
                mascotasDueño.forEach(m => logToConsole(JSON.stringify(m)));
                
                let mensaje = `Mascotas de ${dueño.nombre} (${dueño.cedula}):\n`;
                mascotasDueño.forEach(m => {
                    mensaje += `\n- ${m.nombre} (${m.especie}), ${m.edad} años, ${m.peso}kg, ${m.estadoSalud}`;
                });
                alert(mensaje);
            } catch (error) {
                alert(`Error: ${error.message}`);
                logToConsole(`Error al listar mascotas de dueño: ${error.message}`);
            }
        };

        // Menú principal
        const mostrarMenu = () => {
            const opciones = [
                "1. Registrar nuevo dueño",
                "2. Registrar nueva mascota",
                "3. Listar todas las mascotas",
                "4. Buscar mascota por nombre",
                "5. Actualizar estado de salud",
                "6. Eliminar mascota por nombre",
                "7. Ver mascotas de un dueño",
                "8. Salir del programa"
            ].join("\n");

            let opcion;
            do {
                opcion = prompt(
                    "SISTEMA DE VETERINARIA\n\n" +
                    "Seleccione una opción:\n\n" +
                    opciones
                );

                switch (opcion) {
                    case "1":
                        registrarDueño();
                        break;
                    case "2":
                        registrarMascota();
                        break;
                    case "3":
                        listarTodasMascotas();
                        break;
                    case "4":
                        buscarMascotaPorNombre();
                        break;
                    case "5":
                        actualizarEstadoSalud();
                        break;
                    case "6":
                        eliminarMascota();
                        break;
                    case "7":
                        listarMascotasDeDueño();
                        break;
                    case "8":
                        alert("Gracias por usar el sistema de la veterinaria");
                        logToConsole("Sesión finalizada");
                        return;
                    case null:
                        alert("Operación cancelada. Seleccione '8' para salir.");
                        break;
                    default:
                        alert("Opción no válida. Por favor, seleccione una opción del 1 al 8.");
                }
            } while (opcion !== "8");
        };

        // Inicializar aplicación con datos de ejemplo
        function inicializarDatosEjemplo() {
            dueños.push({
                id: idDueñoCounter++,
                nombre: 'Juan Pérez',
                cedula: '12345678',
                telefono: '555-1234',
                correo: 'juan@example.com'
            });

            mascotas.push({
                id: idMascotaCounter++,
                nombre: 'Firulais',
                especie: 'Perro',
                edad: 5,
                peso: 12,
                estadoSalud: 'Sano',
                idDueño: 1
            });
            
            logToConsole("Datos de ejemplo cargados:");
            logToConsole(`Dueño: ${JSON.stringify(dueños[0])}`);
            logToConsole(`Mascota: ${JSON.stringify(mascotas[0])}`);
        }

        // Iniciar la aplicación al hacer clic en el botón
        document.getElementById('startBtn').addEventListener('click', () => {
            inicializarDatosEjemplo();
            mostrarMenu();
        });