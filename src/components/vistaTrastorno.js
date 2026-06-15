"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import IconoDinamico from "./ui/IconoDinamico";

export default function VistaTrastorno({ trastorno }) {
  const router = useRouter();
  const onback = () => {
    router.back();
  };
  const contenidoTrastorno = trastorno?.contenido;
  const tabs = useMemo(() => {
    const bloques = contenidoTrastorno.split(/\r?\n## /);
    const intro = bloques[0]?.trim();
    const listaDeTabs = [];

    if (intro)
      listaDeTabs.push({
        id: "inicio",
        titulo: "Descripcion",
        contenido: intro,
      });

    bloques.slice(1).forEach((element) => {
      const lineas = element.split(/\r?\n/);
      const titulo = lineas[0]?.trim();
      const contenido = lineas.slice(1).join("\n").trim();
      listaDeTabs.push({
        id: titulo.toLowerCase().replace(/[a-z0-9]/g, "-"),
        titulo: titulo,
        contenido: contenido,
      });
    });
    return listaDeTabs;
  }, [contenidoTrastorno]);

  const [tabActiva, setTabActiva] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.button
          onClick={onback}
          className="flex items-center gap-2 mb-8 transition-colors"
          whileHover={{ x: -4 }}
        >
          <ArrowLeft className="w-5 h-5" />
          volver
        </motion.button>
        <motion.div
          className="flex items-center gap-6 mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${trastorno.meta.color}20` || "#6B728020" }}
          >
            <IconoDinamico
              className="w-10 h-10"
              nombre={trastorno.meta.icono}
              style={{ color: trastorno.meta.color || "#6B7280" }}
            />
          </div>
          <h1 className="text-foreground text-3xl font-bold">
            {trastorno.meta.titulo || "Sin Título"}
          </h1>
        </motion.div>

        <motion.div
          className='flex gap-4 mb-8 border-b border-border py-5 overflow-x-auto'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {tabs?.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setTabActiva(index)}
              className={`pb-4 px-6 transition-all 
                ${tabActiva === index 
                  ? "border-b-2 text-foreground" 
                  : "text-muted-foreground hover:text-foreground"}`}
              style={{
                borderColor: tabActiva === index ? trastorno.meta.color || "#6B7280" : "transparent",
              }}
              >
              {tab.titulo}
            </button>
          ))}
        </motion.div>
        <motion.div
          key={tabActiva}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl p-10 mb-12 text-xl">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold mb-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mb-4">{children}</h2>
              ),
              p: ({ children }) => (
                <p className="mb-4 leading-7">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="flex flex-wrap gap-4 items-center justify-center">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="rounded-2xl p-4 w-sm min-h-30 text-center" style={{backgroundColor: `${trastorno.meta.color}20`}}>{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-bold">{children}</strong>
              )
            }}>
            {tabs[tabActiva]?.contenido ||
              contenidoTrastorno ||
              "No hay texto disponible."}
          </ReactMarkdown>
        </motion.div>
      </div>
    </motion.div>
  );
}
