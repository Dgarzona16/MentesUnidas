"use client";

import { motion } from "framer-motion";
import { MatrizAleatoria } from "./presentation/components/AnimatedMatrix";
import TrastornoCard from "@/components/ui/TrastornoCard";
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const route = useRouter()
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen h-auto flex flex-col justify-between items-center"
    >
      <section className="flex flex-wrap w-full justify-around h-64 pt-8">
        <h1 className="uppercase font-titulos text-5xl/relaxed sm:text-8xl/relaxed mr-4">
          aprendiendo a
          <br />{" "}
          <span className="bg-accent-400 dark:bg-dark-accent-400 rounded-2xl py-4 px-2 m-4">
            enseñar
          </span>{" "}
          <br />
          en condiciones especiales
        </h1>
        <MatrizAleatoria />
      </section>
      <section className="p-12 mt-16">
        <motion.section
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, rotate: -2 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "backIn" }}
          className="bg-primary-400 dark:bg-dark-primary-400 flex flex-col  md:w-3xl h-auto rounded-2xl p-4 items-center mt-52"
        >
          <h3 className="font-titulos text-2xl p-2 md:p-4 md:text-4xl">
            Entender su mundo para guiar su aprendizaje
          </h3>
          <p className="font-principal text-md font-bold p-2 md:p-4 md:text-lg">
            Detrás de cada niño que lucha por leer, escribir o concentrarse, no
            hay una falta de capacidad, sino un mapa mental único que espera ser
            descifrado. 'Entender su mundo para guiar su aprendizaje' es nuestro
            principio fundamental. Creemos que la verdadera educación y la salud
            mental infantil comienzan cuando dejamos de exigirles que encajen en
            un molde estándar y empezamos a construir puentes personalizados
            basados en la empatía, la ciencia y el respeto a sus propios ritmos.
          </p>
        </motion.section>
      </section>
      <section className="flex flex-col w-full h-auto items-center justify-center">
        <h3 className="font-titulos text-2xl p-4 md:p-8 md:text-5xl">
          Más allá del aula
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full md:w-4xl">
          <TrastornoCard color={"#9FA1FF"} title={"Trastornos"} description={"Aprende sobre los trastornos de aprendizaje de forma sencilla"} onPush={"/trastornos"}/>
          <TrastornoCard icon={"BookHeart"} color={"#FD7979"} title={"Experiencias"} description={"lee experiencias de otras personas y encuentra un circulo de apoyo lleno de empatia"} onPush={"/experiencias"}/>
          <div className="md:col-span-2">
            <TrastornoCard icon={"MonitorPlay"} color={"#744577"} title={"Videos"} description={"Sienta a tu pequeño y vamos a aprende con diversion"} onPush={"/videos"}/>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
