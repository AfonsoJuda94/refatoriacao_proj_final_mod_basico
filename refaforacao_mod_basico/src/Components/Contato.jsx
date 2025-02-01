import './Contato.css'
import img from './assets/icons8-enviado-48.png'
export default function Contato(){
    return(
        <div id="div_contato">
            <form id="" action="">
            <label htmlFor="email">Email: </label><br />
                <input type="text" id="email"/> <br />
                
                <label for="assunto">Assunto: </label><br />
                <input id="assunto" type="text"/><br />
                
                <label for="mensagem">Mensagem: </label><br />
                <textarea name="" id="mensagem"></textarea><br />
                
                <button><img src={img} alt=""/></button>
            </form>
        </div>
    )
}