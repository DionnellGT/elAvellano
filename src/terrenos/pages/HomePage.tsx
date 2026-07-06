import { useEffect } from "react";
import { ChatBotWsp } from "../components/ChatBot";
import { Contactenos } from "../components/Contactenos";
import { Hero } from "../components/Hero";
import { Proyectos } from "../components/Proyectos";
import { QuienesSomos } from "../components/QuienesSomos";
import { Seguridad } from "../components/Seguridad ";
import { Testimonios } from "../components/Testimonios";

export const HomePage = () => {

  useEffect(() => {
    document.title = "El Avellano";
  }, []);
  
  return (
    <div>
      <Hero />
      <Proyectos />
      <Seguridad/>
      <QuienesSomos />
      <Testimonios />
      <ChatBotWsp />
      <Contactenos />
    </div>
  );
};