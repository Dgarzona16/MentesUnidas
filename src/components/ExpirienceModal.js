"use client";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import {initialMaker} from '@/lib/constant'

const avatarColors = [
  "#A8B5B2",
  "#B8A99A",
  "#7D8E8F",
  "#C9B9A9",
  "#D4C5B9",
  "#9A8B7D",
];

export const ExpirienceModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Publicacion Anonima");
  const [displayAuthor, SetDisplayAuthor] = useState("Publicacion Anonima");
  const [avatarColor, setAvatarColor] = useState(avatarColors[0]);

  const handleSubmit = async () => {
    try {
        if (!title || !content || !author){
            alert("debes llenar todo el contenido")
            return
        }
        await addDoc(collection(db, "experiencias"), {
           titulo: title,
           descripcion: content,
           publicador: author,
           likes: 0,
            createdAt: serverTimestamp(),
            avatarColor
        })
        setTitle("");
    setContent("");
    setAuthor("Publicacion Anonima");

    onClose()
    } catch(error) {
        alert("en estos momentos estamos teniendo problemas... por favor intente mas tarde")
        console.error(error)
    }    
  };

  useEffect(() => {
    setAvatarColor(
      avatarColors[Math.floor(Math.random() * avatarColors.length)],
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      SetDisplayAuthor(author);
    }, 500);

    return () => clearTimeout(timer);
  }, [author]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 dark:bg-gray-400/30 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-51 p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-background/80 dark:bg-dark-background/80 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-titulos">Comparte tu Experiencia</h2>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-secondary-200 dark:bg-dark-secondary-200 hover:bg-secondary-300 hover:dark:bg-secondary-300 transition-colors flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-text dark:text-dark-text"></X>
                  </button>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ background: avatarColor }}
                    >
                      {author == "Publicacion Anonima"
                        ? "AN"
                        : initialMaker(displayAuthor)}
                    </div>
                    <div>
                      <label className="block mb-2">
                        Nombre del publicador
                      </label>
                      <input
                        required
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Ej: publicacion anonima"
                        className="w-full px-4 py-3 bg-primary-100 dark:bg-dark-primary-100 rounded-2xl border border-primary-400 dark:border-dark-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block mb-2">
                      Titulo de tu Historia
                    </label>
                    <input
                      required
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Ej: Mi hijo tiene dotacion superior"
                      className="w-full px-4 py-3 bg-primary-100 dark:bg-dark-primary-100 rounded-2xl border border-primary-400 dark:border-dark-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 ">
                      Tu experiencia
                    </label>
                    <textarea
                      required
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Comparte tu historia de forma honesta y empatica..."
                      className="w-full px-4 py-3 bg-primary-100 dark:bg-dark-primary-100 rounded-2xl border border-primary-400 dark:border-dark-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                    type="submit"
                      onClick={handleSubmit}
                      className="flex-1 px-6 py-3 bg-primary-400 dark:bg-dark-primary-400 rounded-full hover:opacity-90 transition-opacity"
                    >
                      Compartir historia
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 bg-secondary-200 dark:bg-dark-secondary-200 rounded-full hover:bg-secondary-300 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
