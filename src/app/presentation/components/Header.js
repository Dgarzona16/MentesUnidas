"use client";

import { useState } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";
import { Brain, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { AppName } from '@/lib/constant'

const menu = [
  {
    title: "Inicio",
    path: "/"
  },
  {
    title: "Trastornos",
    path: "/trastornos"
  },
  {
    title: "Leer Experiencias",
    path: "/experiencias"
  },
  {
    title: "Videos",
    path: "/videos"
  }
]

export const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 m-5 bg-primary-100 text-text rounded-2xl shadow dark:bg-dark-primary-100 dark:bg-opacity-50 dark:text-dark-text">
      <Link
        href="/"
        className="text-xl font-titulos flex items-center gap-2 uppercase"
      >
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-primary-400 mb-2 dark:bg-dark-primary-400 uppercase">
          <Brain className="w-5 h-5 text-primary-800 dark:text-dark-primary-800" />
        </div>
        <span className="hidden sm:inline">{AppName}</span>
      </Link>

      <div className="flex items-center gap-6 uppercase">
        <nav className="hidden md:flex items-center gap-6">
          {menu.map((item) => <NavLink key={item.path} href={item.path}>{item.title}</NavLink>)}
        </nav>
        <Menu
          className="w-6 h-6 md:hidden cursor-pointer"
          onClick={() => setMenuAbierto(!menuAbierto)}
        />
        {menuAbierto && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute flex flex-col items-end gap-4 right-5 top-20 p-4 rounded-lg bg-zinc-100 shadow-lg md:hidden dark:bg-zinc-800 dark:bg-opacity-50 "
          >
            {menu.map((item) => <NavLink key={item.path} href={item.path} onClick={() => setMenuAbierto(false)}>{item.title}</NavLink>)}
          </motion.div>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};
