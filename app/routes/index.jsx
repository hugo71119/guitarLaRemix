import {useLoaderData} from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import styles from '../styles/guitarras.css'
import stylesBlog from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import Curso from './components/curso'
import ListadoGuitarras from './components/listado-guitarras'
import ListadoPosts from './components/listado-posts'


export function meta(){

}

export function links(){

  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'stylesheet',
      href: stylesBlog
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}
export async function loader(){

  // Se ejecutan al mismo tiempo
  const [guitarras, posts, cursos] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])


  // Forma lenta de hacerlo ya que el segundo se ejecuta cuando el primero acabe
  // const guitarras = await getGuitarras()

  // const posts = await getPosts()

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    cursos: cursos.data,
  }
}

function Index() {
  const {guitarras, posts, cursos} = useLoaderData()

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

      <Curso
        cursos={cursos.attributes}      
      />

      <section className="contenedor">
        <ListadoPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index
