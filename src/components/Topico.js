'use client'

import { motion } from 'framer-motion'

export default function Topico({ titulo, descripcion }) {
    return(
        <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-[3rem] mb-4 font-titulos">
                    {titulo}
                  </h1>
                  <p className="text-lg max-w-2xl mx-auto font-principal">
                    {descripcion}
                  </p>
                </motion.div>
    )
}