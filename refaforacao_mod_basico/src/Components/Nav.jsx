import img from './assets/logo.jpg' 
import lupa from './assets/lupa.png'
import './Nav.css'
export default function Nav(){
    return(
        <nav id="nav">
            <img src = {img} width={100} alt=""/>
            <ul>
                <li><a className="link_nav" href="inicio">inicio</a></li>
                <li><a href="livros">livros</a></li>
                <li><a href="audio">audio livros</a></li>
                <li><a href="forum">fóruns</a></li>
            </ul>
            <form  id="pesquisa" action=".action">
                <input id="input" type="search" name="pesquisa" />
                <label htmlFor="input"></label>
                <button><img src={lupa} alt=""/></button>
            </form>
        </nav>
    )
}