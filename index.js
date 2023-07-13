// Función para calcular el precio del seguro de auto
function calcularSeguroAuto(edad, marca) {
    let precioBase = 2000;

    // Verificar la edad del conductor
    if (edad < 25) {
      precioBase += 500; // Aplicar recargo por ser menor de 25 años
    }

    // Verificar la marca del auto
    switch (marca) {
    case "Ford":
    precioBase += 1000;
    break;
    case "Chevrolet":
    precioBase += 800;
    break;
    case "Toyota":
    precioBase += 1200;
    break;
    default:
    precioBase += 500;
    }

    return precioBase;
    }

  // Función para calcular el precio del seguro de hogar
function calcularSeguroHogar(tamano, ubicacion) {
    let precioBase = 1500;

    // Verificar el tamaño del hogar
    if (tamano > 200) {
      precioBase += 500; // Aplicar recargo por ser un hogar grande
    }

    // Verificar la ubicación del hogar
    if (ubicacion === "Ciudad") {
    precioBase += 800;
    }

    return precioBase;
    }

    // Función para mostrar el resultado del cotizador
    function mostrarResultado(precio) {
    console.log("El precio del seguro es: $" + precio);
    }

    // Obtener la cantidad de conductores y hogares mediante el prompt
    let numConductores = parseInt(prompt("Ingrese la cantidad de conductores:"));
    let numHogares = parseInt(prompt("Ingrese la cantidad de hogares:"));

    let costoTotalSeguroAuto = 0;
    let costoTotalSeguroHogar = 0;

    // Calcular seguro de auto para cada conductor
    for (let i = 1; i <= numConductores; i++) {
    let edadConductor = parseInt(prompt("Ingrese la edad del conductor " + i + ":"));
    let marcaAuto = prompt("Ingrese la marca del auto del conductor " + i + ":");
    
    let precioSeguroAuto = calcularSeguroAuto(edadConductor, marcaAuto);
    costoTotalSeguroAuto += precioSeguroAuto;
    }

    // Calcular seguro de hogar para cada hogar
    for (let i = 1; i <= numHogares; i++) {
    let tamanoHogar = parseInt(prompt("Ingrese el tamaño del hogar " + i + " (en metros cuadrados):"));
    let ubicacionHogar = prompt("Ingrese la ubicación del hogar " + i + ":");
    
    let precioSeguroHogar = calcularSeguroHogar(tamanoHogar, ubicacionHogar);
    costoTotalSeguroHogar += precioSeguroHogar;
    }

    console.log("El costo total del seguro de auto es: $" + costoTotalSeguroAuto);
    console.log("El costo total del seguro de hogar es: $" + costoTotalSeguroHogar);