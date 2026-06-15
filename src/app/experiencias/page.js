'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Topico from "@/components/Topico";
import { ExpirienceModal } from '@/components/ExpirienceModal';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ExperienciaCard } from '@/components/ui/ExperienciaCard';

export default function Experiencias() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [experiencias, setExperiencias] = useState([])

    useEffect(() => {
        const q = query(
            collection(db, "experiencias"),
            orderBy("createdAt", "desc")
        )

        const unsubcribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setExperiencias(data)
        })
        return () => unsubcribe()
    }, [])

    return(
        <section className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-6">
                <Topico titulo={"Historias que nos unen"} descripcion={"Experierncias reales de personas en su camino hacia el bienestar"} />
                <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="fixed bottom-8 right-8 w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
                    whileHover={{ rotate: 90 }}
                >
                    <Plus className="w-6 h-6" />
                </motion.button>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {experiencias.map((exp, index) => (
                        <ExperienciaCard author={exp.publicador} avatarColor={exp.avatarColor} title={exp.titulo} content={exp.descripcion} index={index} key={exp.id} createdAt={exp.createdAt} likes={exp.likes} id={exp.id} />
                    ))}
                </div>

                <ExpirienceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}  />
            </div>
        </section>
    )
}