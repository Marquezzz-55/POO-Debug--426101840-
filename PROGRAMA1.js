class Libro {
  #idLibro;

  constructor(idLibro, titulo) {
    this.#idLibro = idLibro;
    this.titulo = titulo;
  }

  obtenerDetalles() {
    return "Libro ID " + this.#idLibro + ": " + this.titulo;
  }
}

class Multa {
  #idMulta;

  constructor(idMulta, costo, razon) {
    this.#idMulta = idMulta;
    this.costo = costo;
    this.razon = razon;
  }

  imprimirTicket() {
    console.log("Ticket Multa #" + this.#idMulta + " | Causa: " + this.razon + " | Total: $" + this.costo);
  }
}

class Prestamo {
  #idPrestamo

  constructor(idPrestamo, diasTarde) {
    this.#idPrestamo = idPrestamo
    this.diasTarde = diasTarde;
    this.libro = null;
    this.multa = null;
  }

  agregarLibro(unLibro) {
    this.libro = unLibro;
  }

  cobrarMulta() {
    if (this.diasTarde > 0) {
      let total = this.diasTarde * 15;
      this.multa = new Multa(1, total, "Retraso de " + this.diasTarde + " dias");
      this.multa.imprimirTicket();
    } else {
      console.log("Sin multas pendientes.");
    }
  }
}

class Estudiante {
  #idEstudiante;

  constructor(idEstudiante, nombre) {
    this.#idEstudiante = idEstudiante;
    this.nombre = nombre;
  }

  solicitarPrestamo(prestamo) {
    console.log("El alumno " + this.nombre + " (Cuenta: " + this.#idEstudiante + ") pidio un prestamo.");
  }
}

const libro1 = new Libro("L-1", "Estructuras de Datos");
const estudiante1 = new Estudiante("426101840", "Arturo");
const prestamo1 = new Prestamo("P-500", 3);


estudiante1.solicitarPrestamo(prestamo1);
prestamo1.agregarLibro(libro1);


console.log(libro1.obtenerDetalles());
prestamo1.cobrarMulta();