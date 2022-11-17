import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

import bannerA from '/src/assets/img/edutismo/desingA.png'
import saude from '/src/assets/img/edutismo/saude.png'
import terapia from '/src/assets/img/edutismo/terapia.jpeg'

import './pais.css'

export default function Pais () {
  return(
    <>
    <Header />
    <h3 className="h3">PAIS, MÃES E CUIDADORES</h3>
    <div>
      <img className="bannerA" src={bannerA} alt="" />
    </div>

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <h5>Últimas notícias</h5> 
      <hr />
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h5>"Eu e meu filho somos autistas hoje é dia de celebrar quem somos.."</h5>
          <Link>Continue lendo</Link>
        </div>
        <div class="carousel-item">
          <h5>Prefeitura realiza entrega de cateiras de indentificação de pessoas com Autismo..</h5>
          <Link>Continue lendo</Link>
        </div>
      </div>
    </div>

    <h3 className="h3">MATERIAIS PARA DOWNLOAD</h3>
    <section className="sectionDow">
    <div class="card cardDow">
      <img src={saude} class="card-img-top imgDow" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Saúde Mental dos Cuidadores</h5>
        <p class="card-text">O tema desse ebook foi escolhido com muito carinho e cuidado, pensando nas mães, pais, irmãos, avós… e em todos aqueles que são cuidadores de pessoas autistas. <br />
        É inegável que a rotina de cuidadores pode ser desgastante para qualquer um, e existem diversos estudos que mostram que cuidadores de modo geral muitas vezes acabam adoecendo. Falar sobre isso é então uma forma de apoio e prevenção.
        </p>
        <Link>Baixar</Link>      
        </div>
    </div>

    <div class="card cardDow">
      <img src={terapia} class="card-img-top imgDow" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Terapia ABA para autismo</h5>
        <p class="card-text">O tema da vez é a terapia ABA e como o tratamento pode ajudar a melhorar a qualidade de vida dos autistas! <br />
        O material que você está prestes a ler foi elaborado em parceria com a bHave, uma startup que tem como objetivo facilitar o processo terapêutico automatizando os registros, relatórios, processos burocráticos, e acompanhamento de resultados, que são parte essencial de qualquer terapia, especialmente ABA.
        </p>
        <Link>Baixar</Link>
      </div>
    </div>
    </section>
    <Footer />
    
    
    </>
  )
}