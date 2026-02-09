//*Bienvenida al usuario*//
let nombreUsuario = prompt("Ingrese su nombre");
if (nombreUsuario === null || nombreUsuario.trim() === "") {
  alert("Por favor, reinicie la página y escriba un nombre.");
} else {
  console.log(`¡Bienvenido/a ${nombreUsuario.trim()}!`);

  //*Variables de instrucciones e historial*//

  const instrucciones = `Realizaremos unas acciones matemáticas.

Por favor, escriba los números que deséa calcular.`;

  const comandos = {
    Suma: "+",
    Resta: "-",
    Multiplicación: "*",
    División: "/",
  };

  const historial = [];

  //* Instrucciones en consola*//

  console.info(instrucciones);
  console.log("Operaciones matemáticas disponibles");
  console.table(comandos);

  function mostrarHistorial(historial) {
    console.log("Historial de operaciones recorrido con for");
    for (let i = 0; i < historial.length; i++) {
      const op = historial[i];
      console.log(
        `${i + 1} | ${op.numero1} ${op.ingresoOperacion} ${op.numero2} = ${op.resultado}`,
      );
    }
    console.log("Historial de operaciones recorrido con forEach");

    historial.forEach((op, index) => {
      console.log(
        `${index + 1} | ${op.numero1} ${op.ingresoOperacion} ${op.numero2} = ${op.resultado}`,
      );
    });
  }

  //*Funcion de filtro en historial *//
  function filtroResultados(historial) {
    return historial.filter((op) => op.resultado > 0);
  }

  //*Función de bucle para los números*//

  function ingresoNumero(mensaje) {
    while (true) {
      const dato = prompt(mensaje);

      if (dato === null) return null;

      const numero = Number(dato);
      if (!Number.isNaN(numero)) return numero;

      alert("Por favor ingrese un número válido");
    }
  }

  //* Función búcle para operador matemático*//

  function nuevaOperacion(mensaje) {
    while (true) {
      const operacion = prompt(mensaje);

      if (operacion === null) return null;
      if (["+", "-", "*", "/"].includes(operacion)) return operacion;
      alert("Operación invalida. Ingrese una de las siguientes operaciónes matemáticas ( + , - , * , / )");
    }
  }

  //* FUnciones de operadores matemáticos *//

  function sumar(a, b) {
    return a + b;
  }
  function restar(a, b) {
    return a - b;
  }
  function multiplicar(a, b) {
    return a * b;
  }
  function dividir(a, b) {
    if (b === 0) return null;
    return a / b;
  }

  //*Inicio de bucle de operaciones */

  let continuar = true;

  while (continuar) {
    //* Ingreso del primer número*//

    const numero1 = ingresoNumero("Ingrese el primer número");
    if (numero1 === null) {
      alert("Operación cancelada, por favor reinice la página.");
      continuar = false;
    } else {
      //*Ingreso operación matemática*//

      const ingresoOperacion = nuevaOperacion(
        "Ingrese una de las siguientes operaciónes matemáticas ( + , - , * , / )",
      );
      if (ingresoOperacion === null) {
        alert("Operación cancelada, por favor reinicie la página.");
        continuar = false;
      } else {
        //* Ingreso del segundo número *//
        const numero2 = ingresoNumero("Ingrese el segundo número");
        if (numero2 === null) {
          alert("Operación cancelada, por favor reinicie la página.");
          continuar = false;
        } else {
          //* Operacion con switch *//

          let resultado;
          switch (ingresoOperacion) {
            case "+":
              resultado = sumar(numero1, numero2);
              break;
            case "-":
              resultado = restar(numero1, numero2);
              break;
            case "*":
              resultado = multiplicar(numero1, numero2);
              break;
            case "/":
              resultado = dividir(numero1, numero2);
              if (resultado === null) {
                alert("No se puede dividir por 0.");
                continue;
              }
              break;

            default:
              alert("Operación inválida");
          }

          //*Información en consola *//
          historial.push({ numero1, ingresoOperacion, numero2, resultado });
          console.clear();
          console.info(instrucciones);
          console.log("Operaciones matemáticas disponibles");
          console.table(comandos);
          console.table(historial);
          mostrarHistorial(historial);
          const positivos = filtroResultados(historial);
          console.log("Resultados positivos");
          console.table(positivos);

          const respuesta = prompt("¿Desea realizar otra operación? (Si/No)");
          if (respuesta === null || respuesta.toLowerCase() !== "si") {
            continuar = false;
            alert("Gracias por usar la aplicación :)");
          }
        }
      }
    }
  }
}
