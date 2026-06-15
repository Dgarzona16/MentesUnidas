'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import IconoDinamico from './IconoDinamico'

export default function TrastornoCard({index, icon, color, title, description, onPush}) {
    const route = useRouter()
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay:  index * 0.2, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.05 }}
            onClick={() => route.push(onPush)}
            className="rounded-3xl p-8 cursor-pointer border transition-all duration-300 hover:shadow-lg"
            style={{backgroundColor: `${color}20`}}>
                <div 
                    className='w-16 h-16 rounded-3xl flex items-center justify-center mb-2'
                    style={{ backgroundColor: `${color}20` }}>
                    <IconoDinamico nombre={icon} className='w-8 h-8' style={{ color: color }} />
                </div>
                <h3 className='font-bold text-lg mb-3'>{title}</h3>
                <p className='text-sm text-muted-foreground'>{description}</p>
        </motion.div>
    )
}