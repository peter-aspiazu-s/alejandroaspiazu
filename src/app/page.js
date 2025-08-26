import { Beneficios } from "./components/Beneficios/Beneficios";
import { CallToAction } from "./components/CallToAction/CallToAction";
import { CategoriasMotores } from "./components/CategoriasMotores/CategoriasMotores";
import { Contactos } from "./components/Contactos/Contactos";
import { Hero } from "./components/Hero/Hero";
import { Marcas } from "./components/Marcas/Marcas";
import { Motores } from "./components/Motores/Motores";
import { TrabajosRealizados } from "./components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "./components/Youtube/Youtube";

export default function Home() {
  return (
    <>
      <Hero titulo={"Automatiza Tu Vida"} subtitulo={"Especialistas en motores para portones: seguridad, comodidad y modernidad."} imagen={'/images/banner-home.webp'} />
      <Motores />
      <CallToAction />
      <Beneficios />
      <CategoriasMotores />
      <TrabajosRealizados />
      <Contactos />
      <Youtube />
      <Marcas />
    </>
  );
}
