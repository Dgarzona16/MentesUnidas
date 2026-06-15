"use client";

import Topico from "@/components/Topico";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    link: "https://www.youtube.com/embed/O27NZDT8kSE",
  },
  {
    id: 2,
    link: "https://www.youtube.com/embed/VW59oBelII0",
  },
  {
    id: 3,
    link: "https://www.youtube.com/embed/v2yJPldI1xE",
  },
  {
    id:4,
    link: "https://www.youtube.com/embed/F9jqGrZz69g",
  }
];
export default function VideoPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen h-auto flex flex-col justify-between items-center"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Topico
          titulo={"Con diversion tambien podemos aprender"}
          descripcion={"Más allá del aula"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center justify-center gap-8 p-4">
          {videos.map((vid) => (
            <iframe
            key={vid.id}
                className="w-full aspect-video"
              src={vid.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
