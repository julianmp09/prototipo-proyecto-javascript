// Definir la clase del objeto Producto
class Producto{
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}  
  // Crear un array para almacenar los productos
  let productos = [];
  
  // Función para agregar un nuevo producto al array
  const agregarProducto = () => {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = Number(prompt("Ingrese el precio del producto:"));
  
    // Validar que el precio sea un número válido
    if (isNaN(precio)) {
      alert("Por favor, ingrese un precio válido.");
      return;
    }
  
    // Crear un nuevo objeto Producto y agregarlo al array
    let nuevoProducto = new Producto(nombre, precio);
    productos.push(nuevoProducto);
  
    alert("Producto agregado con éxito.");
  }
  
  // Función para calcular la suma total de los precios de los productos
  const calcularSumaTotal = () => {
    // Utilizar el método reduce para sumar los precios de los productos
    let sumaTotal = productos.reduce((acumulador, producto) => {
      return acumulador + producto.precio;
    }, 0);
  
    alert(`La suma total de los productos es de: $${sumaTotal} pesos argentinos.`);
  }
  
  // Función para buscar un producto por nombre
  const buscarProductoPorNombre = () =>{
    let nombreBuscado = prompt("Ingrese el nombre del producto a buscar:");
    
    // Utilizar el método find para buscar el producto por nombre
    let productoEncontrado = productos.find((producto) => {
      return producto.nombre === nombreBuscado;
    });
  
    if (productoEncontrado) {
      alert(`Producto encontrado:\nNombre: ${productoEncontrado.nombre} \nPrecio: $${productoEncontrado.precio} pesos argentinos.`);
    } else {
      alert("Producto no encontrado.");
    }
  }
  
  // Menú de opciones
  const resultado = () =>{
    while (true) {
        let opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Calcular suma total\n3. Buscar producto por nombre\n4. Salir");
      
        switch (opcion) {
          case "1":
            agregarProducto();
            break;
          case "2":
            calcularSumaTotal();
            break;
          case "3":
            buscarProductoPorNombre();
            break;
          case "4":
            alert("Saliendo del programa. ¡Hasta luego!");
            // Terminar el bucle y salir del programa
            return;
          default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
        }
      }
  }

  
resultado();