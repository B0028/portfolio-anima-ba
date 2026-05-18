import ProductCard from './ProductCard';

function ProductList({ productos, agregarAlCarrito }) {
    return (
        <>
            {productos.map(producto => (
                <ProductCard 
                    key={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    descripcion={producto.descripcion}
                    imagen={producto.imagen}
                    alAgregar={agregarAlCarrito}
                />
            ))}
        </>
    )
}

export default ProductList;