import { useEffect } from 'react';

const Ficha01B = () => {
    /*
    useEffect(() => {
        window.location.replace("http://localhost:5000/api/desarrollo-practico/ficha-01");
    }, []);
    */

    return (
        <div style={{ text_align: 'center', margin_top: '50px', font_family: 'sans-serif' }}>
            <h2>Redireccionando al sitio externo...</h2>
            <p>Si no eres redirigido automáticamente, <a href="https://portfolio-anima-ba-backend.onrender.com/api/desarrollo-practico/ficha-01" style={{ color: '#c084fc' }} >haz clic aquí</a>.</p>
        </div>
    );
};

export default Ficha01B;
