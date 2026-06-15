"use client";
import { AppName } from "@/lib/constant";
import { Brain, CircleFadingPlus, Users } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-100 text-text border-border rounded-2xl shadow m-5 mx-10 md:mx-64 dark:bg-dark-primary-100 dark:bg-opacity-50 dark:text-dark-text flex flex-col">
      <section className="px-6 py-4 text-center text-sm text-sobrefondo flex justify-around flex-wrap gap-8">
        <section className="flex flex-col items-center gap-4 justify-start">
          <div className="flex items-center gap-2">
            <div className="w-15 h-15 rounded-3xl flex items-center justify-center bg-primary-400 mb-2 dark:bg-dark-primary-400 uppercase">
              <Brain className="w-8 h-8 text-primary-800 dark:text-dark-primary-800" />
            </div>
            <span className="font-titulos text-3xl">{AppName}</span>
          </div>
          <p className="text-start text-lg font-bold text-text dark:text-dark-text max-w-80">
            Mentes Unicas es una plataforma dedicada a la inclusión educativa,
            ofreciendo recursos y apoyo para estudiantes con necesidades
            educativas especiales.
          </p>
        </section>
        <section>
          <div className="flex items-center gap-2 font-titulosjustify-center text-primary-600 mb-2 dark:text-dark-primary-400 uppercase">
            <Users className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-lg">Equipo Creador</h3>
          </div>
          <ul className=" flex flex-col gap-2 text-left font-bold text-text dark:text-dark-text">
            <li className="text-lg">
              <p>Milena Lopez</p>
            </li>
            <li className="text-lg">
              <p>Dylan Ortiz</p>
            </li>
            <li className="text-lg">
              <p>Nathalia Patiño</p>
            </li>
            <li className="text-lg">
              <p>Anahel Alcivar</p>
            </li>
            <li className="text-lg">
              <p>Sofia Macao</p>
            </li>
          </ul>
        </section>
        <section>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg uppercase">
              Siguemos en nuestras redes sociales
            </h3>
            <div
              className="flex items-center gap-2 justify-center"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/menteunidas",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-primary-400 mb-2 dark:bg-dark-primary-400 uppercase">
                <CircleFadingPlus className="w-5 h-5 text-primary-800 dark:text-dark-primary-800" />
              </div>
              <span className="font-titulos text-lg">Instagram</span>
            </div>
          </div>
        </section>
      </section>
      <hr className="border-t border-gray-300 dark:border-dark-gray-300 mx-16 my-2" />
      <div className="px-6 py-4 text-center text-sm text-sobrefondo">
        <span>
          &copy; {currentYear} {AppName}. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};
