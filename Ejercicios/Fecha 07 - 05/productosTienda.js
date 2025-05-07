const producto1 = {
    nombre:    'almohada',
    precio:     20000,
    categoria: "accesorios"
}
const producto2 = {
    nombre:    'vaso tèrmico',
    precio:     34000,
    categoria: "accesorios"
}
const producto3 = {
    nombre:    'campera',
    precio:     50000,
    categoria: "ropa"
}
const producto4 = {
    nombre:    'auriculares',
    precio:     50000,
    categoria: "electrónica"
}

const productos = [] // El push solo funciona en arreglos y estos se definen con "[]"

// 1
productos.push(producto1, producto2, producto3, producto4); //Agregamos productos al array de productos (todo lo que recibe son objetos)

//2
productos.forEach((producto, posicion) => {
    console.log("Producto: ", producto.nombre, "---> Es el producto Nro: ", posicion +1)
})/*Uso "producto.nombre" para usarlo como nombre de producto. Producto se ubica en todos los datos del producto, nombre se ubica en clave dentro del objeto (tipo de dato)*/

//3
const prodElectricos = productos.filter((product) => product.categoria === "electrónica");
console.log(prodElectricos);

//4
const nameProductos = productos.map((item, index) => {
    const nombre= item.nombre //Acceso al nombe del producto
    return nombre
})
