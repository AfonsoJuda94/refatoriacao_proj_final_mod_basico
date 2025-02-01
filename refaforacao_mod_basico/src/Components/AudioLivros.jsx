import './AudioLivros.css'
export default function AudioLivros(){
    return(
        <div id='div_audio'>
            <h2>Audio livros</h2>
            <div class="generos">
                <ul>
                    <li><a href="#audio_ficcao">Ficção</a></li>
                    <li><a href="#audio_matematica">Matemática</a></li>
                    <li><a href="#audio_historia">História</a></li>
                    <li><a href="">...</a></li>
                </ul>
            </div>
            <h3 id="audio_ficcao">Ficção(áudio livros)</h3>
            <div class="div_livros">
                <ul>
                    <li><img src="https://archive.org/download/aventurasdesherlockholmes_2110_librivox/Sherlock_2110.jpg" alt=""/><a href=""><br/> As aventuras de <br/> Sherlock Holmes</a></li>
                    <li><a href=""><img src="https://archive.org/download/casavelha_1504_librivox/casa_velha_1405.jpg" alt=""/><br/>Casa velha</a></li>
                    <li><a href=""><img src="https://www.archive.org/download/LibrivoxCdCovers3/anna_karenina_1007.jpg" alt=""/><br/>Anna Karenina</a></li>
                    <li><a href=""><img src="https://www.archive.org/download/LibrivoxCdCoverArt9/barnaby_rudge_1102.jpg" alt=""/><br/>Barnaby Rudge (NL)</a></li>
                    <li><a href="">Ver mais</a></li>
                </ul>
                
                
            </div>
            <h3 id="audio_matematica">Matemática(áudio livros)</h3>
            <div class="div_livros">
                <ul>
                    <li><a href=""><img src="https://archive.org/download/librivoxcCDCoverArt35/calculusmadeeasy_1608.jpg" alt=""/><br/>Calculus made easy</a></li>
                    <li><a href=""><img src="https://archive.org/download/librivoxcCDCoverArt35/einsteinrelativity_2002.jpg" alt=""/><br/>The Einstein Theory of Relativity</a></li>
                    <li><a href=""><img src="https://archive.org/download/foundations_of_geometry_2112_librivox/foundationsgeometry_2112.jpg" alt=""/><br/>Foundations of Geometry</a></li>
                    <li><a href=""><img src="https://archive.org/download/LibrivoxCdCoverArt20/mathematicalproblems_1206.jpg" alt=""/><br/>Mathematical Problems
                    </a></li>
                    <li><a href="">Ver mais</a></li>
                </ul>
            </div>
            <h3 id="audio_historia">História(áudio livros)</h3>
            <div class="div_livros">
                <ul>
                    <li><a href=""><img src="https://www.archive.org/download/LibrivoxCdCoverArt/Alexander_the_Great.jpg" alt=""/><br/>Alexander the Great</a></li>
                    <li><a href=""><img src="https://archive.org/download/LibrivoxCdCoverArt27/alexander_hamilton_1301.jpg" alt=""/><br/>Alexander Hamilton</a></li>
                    <li><a href=""><img src="https://archive.org/download/LibrivoxCdCoverArt30/byzantine_empire_1303.jpg" alt=""/><br/>The Byzantine Empire</a></li>
                    <li><a href=""><img src="https://archive.org/download/bushidothesoulofjapan_2402_librivox/bushidosoulofjapan_2402.jpg" alt=""/><br/>Bushido: The Soul of Japan</a></li>
                    <li><a href="">Ver mais</a></li>
                </ul>
            </div>
        </div>
    )
}