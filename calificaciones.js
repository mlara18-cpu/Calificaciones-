function calcularPromedio() {
    // 1. Obtener los valores de los inputs
    const nombre = document.getElementById("nombre").value.trim();
    const cal1Texto = document.getElementById("cal1").value;
    const cal2Texto = document.getElementById("cal2").value;
    const cal3Texto = document.getElementById("cal3").value;

    // 2. Validación de información
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (cal1Texto === "" || cal2Texto === "" || cal3Texto === "") {
        alert("Por favor, ingresa las tres calificaciones.");
        return;
    }

    const cal1 = parseFloat(cal1Texto);
    const cal2 = parseFloat(cal2Texto);
    const cal3 = parseFloat(cal3Texto);

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert("Las calificaciones deben ser números válidos.");
        return;
    }

    if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10) {
        alert("Todas las calificaciones deben estar entre 0 y 10.");
        return;
    }

    // 3. Calcular el promedio
    const promedio = (cal1 + cal2 + cal3) / 3;
    const promedioFormateado = promedio.toFixed(2);

    // 4. Determinar el resultado (APROBADO / REPROBADO) y la observación
    let estado = "";
    let claseEstado = "";
    let observacion = "";

    if (promedio >= 9 && promedio <= 10) {
        estado = "APROBADO";
        claseEstado = "aprobado";
        observacion = "Excelente desempeño";
    } else if (promedio >= 8 && promedio < 9) {
        estado = "APROBADO";
        claseEstado = "aprobado";
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7 && promedio < 8) {
        estado = "APROBADO";
        claseEstado = "aprobado";
        observacion = "Buen desempeño";
    } else if (promedio >= 6 && promedio < 7) {
        estado = "APROBADO";
        claseEstado = "aprobado";
        observacion = "Desempeño suficiente";
    } else {
        estado = "REPROBADO";
        claseEstado = "reprobado";
        observacion = "Necesita mejorar";
    }

    // 5. Presentar los resultados dentro de la página web
    const divResultados = document.getElementById("resultados");
    divResultados.style.display = "block";
    divResultados.innerHTML = `
        <p><strong>Estudiante:</strong> ${nombre}</p>
        <p><strong>Calificaciones:</strong> ${cal1}, ${cal2}, ${cal3}</p>
        <p><strong>Promedio obtenido:</strong> ${promedioFormateado}</p>
        <p><strong>Estado:</strong> <span class="${claseEstado}">${estado}</span></p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;
}
