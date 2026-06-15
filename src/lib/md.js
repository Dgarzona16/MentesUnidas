import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const directorioContenido = path.join(process.cwd(), 'contenido')

export const obtenerTrastonoPorSlug = (slug) => {
    const caminoReal = path.join(directorioContenido, `${slug}.md`)

    if(!fs.existsSync(caminoReal)) return null

    const contenidoArchivo = fs.readFileSync(caminoReal, 'utf8')
    const { data, content } = matter(contenidoArchivo)

    return {
        slug,
        meta: data,
        contenido: content
    }
}

export const obtenerTodosLosTrastornos = () => {
    const archivos = fs.readdirSync(directorioContenido)
    return archivos.map((archivo) => {
        const slug = archivo.replace('.md', '')
        const caminoReal = path.join(directorioContenido, archivo)
        const contenidoArchivo = fs.readFileSync(caminoReal, 'utf8')
        const { data } = matter(contenidoArchivo)
        return {
            slug,
            meta: data
        }
    })
}