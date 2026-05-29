import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";

// HOME
import PortFolio from "../layouts/PortFolio.jsx";
import HomeLayout from "../layouts/HomeLayout.jsx"
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import DashboardPractico from "../pages/DesarrolloPractico.jsx"
import DashboardTeorico from "../pages/DesarrolloTeorico.jsx"

// EJERCICIOS
import Exercises from "../layouts/Exercises.jsx";
import { projects } from "../../projects"

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

        {/* PORTFOLIO */}
        <Route path="/" element={<PortFolio />}>
          <Route path="about" element={<About />} />
          <Route path="desarrollo-practico" element={<DashboardPractico />} />
          <Route path="desarrollo-teorico" element={<DashboardTeorico />} />
        </Route>

        {/* DESARROLLO PRÁCTICO */}
        <Route path="/desarrollo-practico" element={<Exercises />}>
          {projects.practico.map((ejercicio) => (
            <Route
              key={ejercicio.id}
              path={ejercicio.path}
              element={<ejercicio.component />}
            />
          ))}
        </Route>

        {/* DESARROLLO TEÓRICO */}
        <Route path="/desarrollo-teorico" element={<Exercises />}>
          {projects.teorico.map((ejercicio) => (
            <Route
              key={ejercicio.id}
              path={ejercicio.path}
              element={<ejercicio.component />}
            />
          ))}
        </Route>

      </Routes>
    </Suspense>
  );
}
