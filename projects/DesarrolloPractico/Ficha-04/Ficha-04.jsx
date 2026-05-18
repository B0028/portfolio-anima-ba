import { useState } from "react";
import Navbar from "../../../src/components/layout/Navbar";
import Card from "../../../src/components/ui/Card";
import PageTitle from "../../../src/components/ui/PageTitle.jsx";

import ProductList from './components/ProductList';
import ProductCard from "./components/ProductCard";

import "./Ficha-04.css";

import { Hashirama, Gunbai, Samehada, Maneuvering, SueroTitan, LlaveSotano, FormaShikau, SombreroUrahara, Hogyoku } from "./assets/images"
/*

import Cart from "./imagens/Cart";
import Header from "./imagens/Header";

import ProductList from './imagens/ProductList';

Concepto clave
Pasar funciones por props = comunicación entre componentes
*/

function Ficha04() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto])
    }

    const productos = [
    // --- NARUTO ---
    {
        id: "nar-01",
        nombre: "Cristal de Hashirama",
        precio: `$ ${150.00}`,
        descripcion: "Collar del Primer Hokage",
        imagen: Hashirama,
    },
    {
        id: "nar-02",
        nombre: "Gunbai",
        precio: `$ ${450.00}`,
        descripcion: "Abanico Gigante de Madara Uchiha",
        imagen: Gunbai,
    },
    {
        id: "nar-03",
        nombre: "Piel de Tiburón",
        precio: `$ ${600.00}`,
        descripcion: "Espada Samehada",
        imagen: Samehada,
    },

    // --- SHINGEKI NO KYOJIN (Attack on Titan) ---
    {
        id: "snk-01",
        nombre: "Vertical Maneuvering Equipment",
        precio: `$ ${1200.00}`,
        descripcion: "Equipo de Maniobras Tridimensionales",
        imagen: Maneuvering,
    },
    {
        id: "snk-02",
        nombre: "Vial de Inyecció",
        precio: `$ ${850.00}`,
        descripcion: "Suero de Médula de Titán",
        imagen: SueroTitan,
    },
    {
        id: "snk-03",
        nombre: "Llave del Sótano de Grisha Jaeger",
        precio: `$ ${75.00}`,
        descripcion: "",
        imagen: LlaveSotano,
    },

    // --- BLEACH ---
    {
        id: "blc-01",
        nombre: "Forma Shikau",
        precio: `$ ${550.00}`,
        descripcion: "Zanpakutō: Zangets",
        imagen: FormaShikau,
    },
    {
        id: "blc-02",
        nombre: "Sombrero de Kisuke Urahara",
        precio: `$ ${200.00}`,
        descripcion: "",
        imagen: SombreroUrahara,
    },
    {
        id: "blc-03",
        nombre: "Hōgyoku",
        precio: `$ ${999.99}`,
        descripcion: "Esfera de la Desilusión",
        imagen: Hogyoku,
    }
    ];

    return (
        <> 
            <Navbar></Navbar>
            <PageTitle subtext="Mini Ecommerce">Ficha-04</PageTitle>

            <main className="layout-grid">
                <header className="header">dsadsa</header>
                <nav className="navbar">asdasd</nav>
                <aside className="aside">fsdaf</aside>
                <section className="section">
                    <article className="product-section">
                        <ProductList
                            productos={productos}
                            agregarAlCarrito={agregarAlCarrito}
                        />
                    </article>
                    <article></article>
                </section>
                <footer className="footer"></footer>
            </main>
        </>
    )
}

export default Ficha04;


