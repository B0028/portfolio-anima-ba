import { lazy } from "react";


{/* PRÁCTICO */}
const Ficha00 = lazy(() => import("./DesarrolloPractico/Ficha-00/Ficha-00"));
import F00IMG from "./DesarrolloPractico/Ficha-00/assets/images/F00.png"
const Ficha01 = lazy(() => import("./DesarrolloPractico/Ficha-01/Ficha-01"));
import F01IMG from "./DesarrolloPractico/Ficha-01/assets/images/F01.png"
const Ficha02 = lazy(() => import("./DesarrolloPractico/Ficha-02/Ficha-02"));
import F02IMG from "./DesarrolloPractico/Ficha-02/assets/images/F02.png"
const Ficha03 = lazy(() => import("./DesarrolloPractico/Ficha-03/Ficha-03"));
import F03IMG from "./DesarrolloPractico/Ficha-03/assets/images/F03.png"
const Ficha04 = lazy(() => import("./DesarrolloPractico/Ficha-04/Ficha-04"));
import F04IMG from "./DesarrolloPractico/Ficha-04/assets/images/F04.png"
const Ficha00B = lazy(() => import("./DesarrolloPractico/Ficha-00B/Ficha-00B"));
import F00BIMG from "./DesarrolloPractico/Ficha-00B/assets/images/F00BIMG.png"
const Ficha01B = lazy(() => import("./DesarrolloPractico/Ficha-01B/Ficha-01B"));
import F01BIMG from "./DesarrolloPractico/Ficha-01B/assets/images/F01BIMG.png"


{/* TEORICO */}
const Ejercicio01 = lazy(() => import("./DesarrolloTeorico/Ejercicio-01/Ejercicio-01"));

const Ejercicio02 = lazy(() => import("./DesarrolloTeorico/Ejercicio-02/Ejercicio-02"));
import EJ02 from "./DesarrolloTeorico/Ejercicio-02/assets/images/EJ02.png"


export const projects = {

  // PRÁCTICO
  practico: [
    {
      id: "f00",
      name: "Ficha 00",
      path: "ficha-00",
      component: Ficha00,
      description: "Cards reutilizables",
      tecnologias: "",
      capture: F00IMG
    },
    {
      id: "f01",
      name: "Ficha 01",
      path: "ficha-01",
      component: Ficha01,
      description: "Contador y renderizado condicional",
      tecnologias: "",
      capture: F01IMG
    },
    {
      id: "f02",
      name: "Ficha 02",
      path: "ficha-02",
      component: Ficha02,
      description: "Listas .map",
      tecnologias: "",
      capture: F02IMG
    },
    {
      id: "f03",
      name: "Ficha 03",
      path: "ficha-03",
      component: Ficha03,
      description: "Listas .map",
      tecnologias: "",
      capture: F03IMG
    },
    {
      id: "f04",
      name: "Ficha 04",
      path: "ficha-04",
      component: Ficha04,
      description: "Listas .map",
      tecnologias: "",
      capture: F04IMG
    },
    {
      id: "f00B",
      name: "Ficha 00 Backend",
      path: "ficha-00B",
      component: Ficha00B,
      description: "Listas .map",
      tecnologias: "",
      capture: F00BIMG
    },
    {
      id: "f01B",
      name: "Ficha 01 Backend",
      path: "ficha-01B",
      component: Ficha01B,
      description: "Listas .map",
      tecnologias: "",
      capture: F01BIMG
    },
  ],
  
  // TEORICO
  teorico: [
    {
      id: "e01",
      name: "Ejercicio 01",
      path: "ejercicio01",
      component: Ejercicio01,
      description: "Rick And Morty",
      tecnologias: "",
      capture: F00IMG
    },
    {
      id: "e02",
      name: "Ejercicio 02",
      path: "ejercicio02",
      component: Ejercicio02,
      description: "SPA",
      tecnologias: "",
      capture: EJ02
    },
  ],
};