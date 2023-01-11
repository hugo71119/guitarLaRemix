import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>Vestibulum a tellus id purus eleifend bibendum at ac tellus. Aliquam a sem elit. Vivamus pulvinar vitae ligula ut pretium. Donec molestie ultrices magna eget vestibulum. Donec maximus ligula vitae lorem aliquet, non sollicitudin velit convallis. Praesent pulvinar convallis velit in consectetur. Phasellus cursus ante id porttitor iaculis. Mauris odio nisi, malesuada nec interdum eu, scelerisque at risus. Curabitur at suscipit ligula. Etiam a tortor urna. Phasellus nec dignissim nisi. Praesent elementum dui eget blandit efficitur. Proin vel elit ligula. Cras gravida suscipit turpis vel mattis. Fusce scelerisque condimentum lacinia. </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
