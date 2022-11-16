import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Link } from "react-router-dom";

import intro from '/src/assets/img/intro.svg';
import educacao from '/src/assets/img/edutismo/educação.png';
import acompanhamento from '/src/assets/img/edutismo/acompanhamento.png';
import grau from '/src/assets/img/edutismo/graus.png';
import game from '/src/assets/img/edutismo/gamificação.png';
import familia from '/src/assets/img/edutismo/familia.jpg';
import autismo from '/src/assets/img/edutismo/autism.jpg';
import kids from '/src/assets/img/edutismo/kid.jpg';

import './home.css';

export default function Home() {
  return (
    <>  
      <Header />
    <main>
    <div className="container">
      <div className="row">
        <div id="colCxtxt" className="col">
          <h2>Sobre Nós..</h2>
          <p className="pTxt">Nossa Plataforma permite associar nomes e imagens de objetos, ampliando o vocabulario da criança.</p>
          <button id="btnCad" type="button" className="btn btn-warning"><Link to="/cadastro">Cadastre-se</Link></button>
      </div> 
      <div className="col">
          <img src={intro} className="img-fluid" alt="ICriança jogando peças para cima"/>
      </div>
    </div>      
  </div>
  </main>

  <section>
    <h2 className="h2Section">O que eu devo saber sobre o Autismo?</h2>
    <p className="pSection">O Transtorno do Espectro Autista (TEA) é um distúrbio no desenvolvimento do cérebro que afeta a capacidade de relacionamento com pessoas e o ambiente.</p>
    <div className="sectionAbout">
      <div className="row">
        <div className="col">
              <div className="card">
                <img src={educacao}className="card-img-top" alt="imagem educação"/>
                <div className="card-body">
                  <h5 className="cardTitle">Educação</h5>
                  <p className="cardText">Portadores de autismo possuem dificuldades em aprender a utilizar corretamente as palavras, um ensino didático ajuda a criança a desenvolver suas habilidades de linguagem e interação social.</p>
                </div>
              </div>
          </div>

          <div className="col">
            <div className="card" >
              <img src={acompanhamento} className="card-img-top" alt="imagem acompanhamento"/>
              <div className="card-body">
                <h5 className="cardTitle">Acompanhamento</h5>
                <p className="cardText">A abordagem educacional apropriada deve ser baseada numa avaliação de especialistas, pais e responsáveis. Afinal, sua maneira de ver o mundo difere das demais crianças.</p>
              </div>
            </div>
          </div>

        <div className="col">
          <div className="card" >
            <img src={grau} className="card-img-top" alt="imagem graus"/>
            <div className="card-body">
              <h5 className="cardTitle">Graus</h5>
              <p className="cardText">Cada criança autista tem um grau de dificuldade por ser único. Por isso, os pais devem entender as dificuldades particulares de seus filhos e se adaptar a elas.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" >
            <img src={game} className="card-img-top" alt="imagem gamificação"/>
            <div className="card-body">
              <h5 className="cardTitle">Gamificação</h5>
              <p className="cardText">Os autistas costumam se fixar em jogos, brincadeiras ou personagens específicos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="linha"></div>

  <section className="game">
    <h2 className="h2Game">Jogos &#127918;</h2>

    <div className="gameMemo">
      <h3 className="titleGame">Jogo da Memória</h3>
      <p className="Pgame">Neste jogo o objetivo é memorizar os desenhos e as palavras mostrados e em seguida, você deve comparar para saber o nome correto de cada desenho.</p>
      <div className="btnGame">
        <button className="btnPlay"><Link to="/memorizacao" className="linkGame">Jogue aqui</Link></button>
      </div>
    </div>

    

    <div className="gameMemo">
      <h3 className="titleGame">Jogo do Contrário</h3>
      <p className="Pgame">Neste jogo o objetivo é encontrar o par contrário a palavra sorteada, mas pode ser jogado conforme a imaginação.</p>
      <div className="btnGame">
        <button className="btnPlay"><Link to="/contra" className="linkGame">Jogue aqui</Link></button>
      </div>
    </div>
  </section>


  <section>
    <div className="fotos">
      <span className="fot">
          <img src={familia}/>
      </span>
      <span className="fot">
          <img src={autismo}/>
      </span>
      <span className="fot">
          <img src={kids}/>
      </span>
  </div>
   </section>
    <Footer />
    </>
  )
}