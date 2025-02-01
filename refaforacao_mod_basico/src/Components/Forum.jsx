import { useEffect, useState } from 'react'
import './Forum.css'
import img from './assets/icons8-enviado-48.png'
export default function Forum(){
    const [comentario,setComentario] = useState('')
    function comentar(){
        const input = document.getElementById('input_conversa')
        setComentario(input.value)
        input.value = ''
        
    }
    useEffect(()=>{
        if(comentario!== ''){
            document.getElementById('conversa').innerHTML += `<span>Eu: ${comentario}</span><br/>`
        }
    },[comentario])
    return(
        <div id="div_forum">
            <h2>Fórum</h2>
            <div id='conversa'>
                <span id='fulano'>Fulano: Olá gostaria de saber uma recomendação de livro de redes de computadores.</span> <br />
                <span id='sicrano'>Sicrano: Olá, Fulano. Seja bem vindo ao fórum. Eu recomendo Redes de Computadores do Tanembaum</span> <br />
            </div>
            <input id='input_conversa' type="text" />
            <button  onClick={comentar}><img src={img} alt="" /></button>
        </div>
    )
}