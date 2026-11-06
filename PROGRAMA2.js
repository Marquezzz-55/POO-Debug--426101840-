// ====================================================================
// PRÁCTICA: LÓGICA, ARREGLOS Y CICLOS
// Resuelve los siguientes 5 ejercicios completando el código dentro 
// de cada función. Puedes probar tu avance ejecutando este archivo.
// ====================================================================

console.log("=== INICIANDO PRUEBAS ===\n");

// --------------------------------------------------------------------
// EJERCICIO 1: Filtro de Ruido en Sensores
// --------------------------------------------------------------------
function filtrarRuido(lecturas) {
    let lecturasLimpias = [];
    for(let i = 0; i < lecturas.length; i++){
        if (lecturas[i] >= 0) {
            lecturasLimpias.push(lecturas[i]);
        }
    }
    
    return lecturasLimpias;
}

const datosSensor = [22, -5, 24, -1, 25];
console.log("Ejercicio 1 - Filtro de Ruido:");
console.log("Entrada:", datosSensor);
console.log("Salida: ", filtrarRuido(datosSensor));
console.log("--------------------------------------------------\n");


// --------------------------------------------------------------------
// EJERCICIO 2: El Fabricante de Identidades (Matriz Identidad NxN)
// --------------------------------------------------------------------
function crearIdentidad(j) {
    let matriz = [];
    // Utiliza un doble ciclo for para construir una matriz identidad de NxN.
    // Si la fila (i) es igual a la columna (j), inserta un 1. Si no, un 0.


    for (let i = 0; i < n; i++){
        let fila = [];
        for(let j = 0; j < n; j++){
            if(i === j){
                fila.push(1);
            } else {
                fila.push(0);
            }
        }
        matriz.push(fila);
    }
    
    return matriz;
}

const dimension = 3;
console.log("Ejercicio 2 - Matriz Identidad (3x3):");
console.log(crearIdentidad(dimension));
console.log("--------------------------------------------------\n");


// --------------------------------------------------------------------
// EJERCICIO 3: La Traza de la Matriz
// --------------------------------------------------------------------
function calcularTraza(matriz) {
    let traza = 0;
    // Calcula la suma de la diagonal principal.
    // RETO: Hazlo utilizando un ÚNICO ciclo for, no dos. 
    // Recuerda que en la diagonal, la fila y la columna son iguales.


    for(let i = 0; i < matriz.length; i++){
        traza = traza + matriz[i][i];
    }
    
    return traza;
}

matriz4x4 = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
console.log("Ejercicio 3 - Traza de la Matriz:");
console.log("Salida esperada: 34");
console.log("Salida real:   ", calcularTraza(matriz4x4));
console.log("--------------------------------------------------\n");


// --------------------------------------------------------------------
// EJERCICIO 4: Limpieza de Cuadrantes (Modificación in-situ)
// --------------------------------------------------------------------
function limpiarCuadrantes(matriz) {
    // Haz un barrido completo de la matriz con un doble ciclo for.
    // Si encuentras un número menor a cero, sobrescríbelo con un 0.

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if (matriz[i][j] < 0){
                matriz[i][j] = 0;
            }
        }
    }
    
    return matriz;  // Retornamos la misma matriz ya modificada
}

const cuadrantes = [
    [5, -2,  3],
    [-1, 4, -7],
    [8,  9, -4]
];
console.log("Ej 4 - Limpieza de Cuadrantes:");
console.log("Salida: ", limpiarCuadrantes(cuadrantes));
console.log("--------------------------------------------------\n");


// --------------------------------------------------------------------
// EJERCICIO 5: Radar
// --------------------------------------------------------------------
function buscarObjetivo(matriz, objetivo) {

    // Escanea la matriz buscando el 'objetivo'.
    // En el momento que lo encuentres, retorna un arreglo con las coordenadas: [fila, columna]
    // Si terminas de revisar toda la matriz y no está, retorna: [-1, -1]
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === objetivo) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

const mapaRadar = [
    [10, 15, 20],
    [25, 30, 35],
    [40, 45, 50]
];
console.log("Ejercicio 5 - Radar:");
console.log("Buscando el 35 (Debe salir [1, 2]): ", buscarObjetivo(mapaRadar, 35));
console.log("Buscando el 99 (Debe salir [-1, -1]):", buscarObjetivo(mapaRadar, 99));
console.log("==================================================\n");