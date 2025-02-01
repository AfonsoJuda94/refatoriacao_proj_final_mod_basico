import './Livros.css'
export default function Livros(){
    return(
        <>
            <section id="livros">
                <div className="generos">
                    <ul>
                        <li><a href="#ficcao">Ficção</a></li>
                        <li><a href="#ciencia_computacao">Computação</a></li>
                        <li><a href="#historia">História</a></li>
                        <li><a href="#direito">Direito</a></li>
                        <li><a href="#matematica">Matemática</a></li>
                        
                        <li><a href="#religiao">Religião</a></li>
                        <li><a href="#psicologia">Psicologia</a></li>
                        <li><a href="">...</a></li>
                    </ul>
                </div>
                <h3 id="ficcao">Ficção</h3>
                <div className="div_livros"> 
                    <ul>
                         <li><a href=""><img src="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC._SR360,460.jpg" alt=""/><br/>A revolução dos bichos</a></li>
                         <li><a href=""><img src="https://m.media-amazon.com/images/I/81TmOZIXvzL._AC._SR360,460.jpg" alt=""/><br/>O pequeno príncipe</a></li>
                         <li><a href=""><img src="https://m.media-amazon.com/images/I/715JOcuqSSL._AC._SR360,460.jpg" alt=""/><br/>A metamorfose</a></li>
                         <li><a href=""><img src="https://m.media-amazon.com/images/I/91M9xPIf10L._AC._SR360,460.jpg" alt=""/><br/>O Hobbit</a></li>
                         <li><a href="">Ver mais</a></li>
                    </ul> 
                </div>
                <h3 id="ciencia_computacao">Ciência da computação e tecnologia</h3>
                <div className="div_livros"> 
                    <ul>
                         <li><a href=""><img src="https://m.media-amazon.com/images/I/41aHzYSXZkL._AC._SR360,460.jpg" alt=""/><br/>Código limpo</a></li>
                         <li><a href=""><img src="https://m.media-amazon.com/images/I/51psvxQpAbS._AC._SR360,460.jpg" alt=""/><br/>Data Science do zero</a></li>
                         <li><a href=""><img src="https://m.media-amazon.com/images/I/71x4T-zzbSL._AC._SR360,460.jpg" alt=""/><br/>Microsserviços prontos<br/> para a produção</a></li>
                         <li><a href=""><img src="https://m.media-amazon.com/images/I/81x-nHq0GXL._AC._SR360,460.jpg" alt=""/><br/>Análise de tráfego em redes TCP/IP</a></li>
                         <li><a href="">Ver mais</a></li>
                        </ul> 
                 </div>
                <h3 id="historia">História</h3>
                <div className="div_livros">
                   <ul>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/61+iJiw9a7L._AC_UL320_.jpg" alt=""/><br/>O outono da Idade Média</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/71na5igUnbL._AC_UL320_.jpg" alt=""/><br/>Grécia e Roma</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/81GQ3DOi6iS._AC_UL320_.jpg" alt=""/><br/>Stálin: Volume 1</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/81lI+jwCo2L._AC_UL320_.jpg" alt=""/><br/>Napoleão: uma Vida</a></li>
                       <li><a href="">Ver mais</a></li>
                   </ul> 
                </div>
                <h3 id="direito">Direito</h3>
                <div className="div_livros">
                   <ul>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/81bFLZk8eJL._AC_UY218_.jpg" alt=""/><br/>Direito, Processo <br/> e Tecnologia</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/71RJQCHsLyL._AC_UY218_.jpg" alt=""/><br/>Manual de <br/> Direito Processual Civil</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/61Z-6AMepHL._AC_UY218_.jpg" alt=""/><br/>Teoria pura do direito</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/71uQYiYCi6L._AC_UY218_.jpg" alt=""/><br/>Direito dos Fundos <br/> de Investimento </a></li>
                       <li><a href="">Ver mais</a></li>
                   </ul>
                </div>
                <h3 id="matematica">Matemática</h3>
                <div className="div_livros">
                   <ul>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/91l41rK6DWL._AC._SR360,460.jpg" alt=""/><br/>Estatística</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/719faYrlEdL._AC._SR360,460.jpg" alt=""/><br/>Cálculo</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/81BE-sfcqQL._AC._SR360,460.jpg" alt=""/><br/>Álgebra linear</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/71J65Ss8HFL._AC._SR360,460.jpg" alt=""/><br/>Introdução à lógica</a></li>
                       <li><a href="">Ver mais</a></li>
                   </ul>
                </div>
                <h3 id="religiao">Religião</h3>
                <div className="div_livros">
                   <ul>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/51a0N24RQZL._SY425_.jpg" alt=""/><br/>Bíblia sagrada</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/81Gk3EyOEwL._SY425_.jpg" alt=""/><br/>Dhammapada: <br/>Os ensinamentos de Buda</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/51pnp7ZwriL._SY445_SX342_.jpg" alt=""/><br/>O alcorão</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/417EPey4imL._SY445_SX342_.jpg" alt=""/><br/>Princípios Básicos do Hinduísmo</a></li>
                       <li><a href="">Ver mais</a></li>
                   </ul>
                </div>
                <h3 id="psicologia">Psicologia</h3>
                <div className="div_livros">
                   <ul>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/51vRkGGQEBL._SY445_SX342_.jpg" alt=""/><br/>O homem <br/>e seus símbolos</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/31Bp7zsEi+L._SY445_SX342_.jpg" alt=""/><br/>Freud - Neurose, psicose, perversão</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/71ZhxHsiM-L._SY425_.jpg" alt=""/><br/>Internal Family Systems <br/>Therapy</a></li>
                       <li><a href=""><img src="https://m.media-amazon.com/images/I/61fyHeOqelL._SY425_.jpg" alt=""/><br/>The Science of Living <br/> & Understanding Human Nature</a></li>
                       <li><a href="">Ver mais</a></li>
                   </ul>
                </div>
            </section>
        </>
    )
}