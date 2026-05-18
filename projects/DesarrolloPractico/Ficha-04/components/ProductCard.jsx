import "./ProductCard.css";

function ProductCard({nombre, precio, descripcion, imagen, alAgregar}) {

    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card-img" src={imagen} alt={nombre} />
            </div>
            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <p className="card-subtitle">{descripcion}</p>
                <p className="card-price">{precio}</p>
                <button 
                    className="card-button"
                    onClick={alAgregar}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ProductCard;