import { lazy } from "react";
import { Routes, Route } from "react-router";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";

// Home ships in the main bundle; other pages load on demand.
const Menu = lazy(() => import("@/pages/Menu"));
const About = lazy(() => import("@/pages/About"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Visit = lazy(() => import("@/pages/Visit"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="visit" element={<Visit />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
