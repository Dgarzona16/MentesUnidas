"use client";

import { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import IconoDinamico from "@/components/ui/IconoDinamico";

const initialIcons = [
  {
    id: 1,
    nombre: "Brain",
    color: "#F9B2D7",
    scale: 1,
    rotate: 0,
  },
  {
    id: 2,
    nombre: "Sparkles",
    color: "#CFECF3",
    scale: 1,
    rotate: 0,
  },
  {
    id: 3,
    nombre: "BookOpen",
    color: "#DAF9DE",
    scale: 1,
    rotate: 0,
  },
  {
    id: 4,
    nombre: "Puzzle",
    color: "#F6FFDC",
    scale: 1,
    rotate: 0,
  },
];

export function MatrizAleatoria() {
  const [icons, setIcons] = useState(initialIcons);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prev) => {
        const copy = [...prev];

        // Intercambia dos elementos aleatoriamente
        const a = Math.floor(Math.random() * copy.length);
        const b = Math.floor(Math.random() * copy.length);

        [copy[a], copy[b]] = [copy[b], copy[a]];

        // Nuevos tamaños y rotaciones
        return copy.map((item) => ({
          ...item,
          scale: 0.4 + Math.random() * 0.8,
          rotate: Math.random() * 20 - 10,
        }));
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutGroup>
      <div className="grid grid-cols-2 gap-2">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            layout
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: icon.scale,
              rotate: icon.rotate,
            }}
            transition={{
              layout: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
              scale: {
                type: "spring",
                stiffness: 200,
                damping: 12,
              },
              rotate: {
                duration: 1,
              },
            }}
            whileHover={{
              scale: icon.scale + 0.15,
              rotate: 0,
            }}
            className="w-28 h-28 sm:w-48 sm:h-48 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: `${icon.color}CC`,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IconoDinamico
                nombre={icon.nombre}
                className="w-12 h-12 sm:w-20 sm:h-20 text-text dark:text-text"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </LayoutGroup>
  );
}