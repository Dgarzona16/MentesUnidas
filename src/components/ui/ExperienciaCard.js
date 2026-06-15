import { motion } from 'framer-motion'
import {initialMaker, getTimeAgo} from '@/lib/constant'
import { Heart } from 'lucide-react'
import { doc, increment, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

const handleLike = async (id) => {
    try{
        const expirienceRef = doc(db, "experiencias", id)
        await updateDoc(expirienceRef, {
            likes: increment(1)
        }) 
    }catch(error){
        console.error(error)
    }
}

export const ExperienciaCard = ({index, avatarColor, title, content, author, createdAt, likes, id}) => {
    
    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: index * 0.1}}
            className='bg-primary-100 dark:bg-dark-primary-100 rounded-3xl p-8 border border-primary-200 dark:border-dark-primary-200 hover:shadow-lg transition-all duration-300'>
            <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 rounded-full flex items-center justify-center text-white'
                    style={{backgroundColor: avatarColor}}>
                        {initialMaker(author)}
                </div>
                <div className='flex-1'>
                    <h3 className='font-titulos'>{title}</h3>
                    <p className='text-sm'>{getTimeAgo(createdAt)}</p>
                </div>
            </div>

            <p className='mb-6 leading-relaxed'>{content}</p>

            <div className="flex items-center gap-6 pt-4 border-t border-border">
                <motion.button
                  onClick={() => handleLike(id)}
                  className={`flex items-center gap-2 transition-colors`}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className={`w-5 h-5`} />
                  <span>{likes}</span>
                </motion.button>
              </div>
        </motion.div>
    )
}