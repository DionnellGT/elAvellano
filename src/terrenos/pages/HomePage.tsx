import { useEffect } from "react";
import { ChatBotWsp } from "../components/ChatBot";
import { Hero } from "../components/Hero";
import { Proyectos } from "../components/Proyectos";
import { QuienesSomos } from "../components/QuienesSomos";
import { Seguridad } from "../components/Seguridad ";
import { Testimonios } from "../components/Testimonios";
import { trackSocialVisit } from "@/lib/socialEvents";

export const HomePage = () => {

  useEffect(() => {
    document.title = "El Avellano";
  }, []);

  useEffect(() => {
    trackSocialVisit();
  }, []);
  
  return (
    <div>
      <Hero />
      <Proyectos />
      <Seguridad/>
      <QuienesSomos />
      <Testimonios />
      <ChatBotWsp />
    </div>
  );
};