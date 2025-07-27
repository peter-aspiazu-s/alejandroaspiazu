import { Beneficios } from "./components/Beneficios/Beneficios";
import { CallToAction } from "./components/CallToAction/CallToAction";
import { Contactos } from "./components/Contactos/Contactos";
import { Hero } from "./components/Hero/Hero";
import { Marcas } from "./components/Marcas/Marcas";
import { Motores } from "./components/Motores/Motores";
import { TrabajosRealizados } from "./components/TrabajosRealizados/TrabajosRealizados";
import { Youtube } from "./components/Youtube/Youtube";

export default function Home() {
  return (
    <>
      <Hero />
      <Motores />
      <CallToAction />
      <Beneficios />
      <TrabajosRealizados />
      <Contactos />
      <Youtube />
      <Marcas />
    </>
  );
}
