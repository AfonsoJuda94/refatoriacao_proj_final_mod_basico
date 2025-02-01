import img from './assets/not_found.png'
import './NotFound.css'
export default function NotFound(){
    return(
        <div id='div_not_found'>
            <img id='img_not_found' src={img} alt="" />
            <h2>Ops! Página não encontrada</h2>
        </div>
    )
}