import './Inicio.css'
import img from './assets/mascot.png'
import imagem from './assets/bonzi.png'
export default function Inicio(){
    return (
        <section id="inicio">
            <h2>Inicio</h2>
            <h3>Seja bem vindo à Librarium!</h3>
                
            <article>
                Aqui você poderá encontrar livros e audio livros dos mais diversos temas.
            </article>

            <img src={imagem} width={300} alt="" />
        </section>
    )
}