import Link from 'next/link'
import '../(general)/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
 
export default function NotFound() {
  return (
   <main className='text-center contPrincipal pt-5'>
    <img src='./img/error.png' height={50} className='colorFilter404'/>
    <h2 className='color404 font-weight-bold'>¡Ups! Parece que hubo un problema</h2>
    <p className='mt-5'>No podemos encontrar la ruta que nos pides</p>
    <p>Vuelve al <Link href="/">Home</Link> y utiliza la barra de navegación</p>
   </main>
  )
}