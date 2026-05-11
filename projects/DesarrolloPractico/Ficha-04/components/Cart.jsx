/**
 * Cart que reciba carrito por props
 * - Mostrar un mensaje si está vacío
 * - Listar los productos agregados
 * - Mostrar el total
 * 
 * 
 */


const total = carrito.reduce((acc, item) => acc + item.precio, 0);
