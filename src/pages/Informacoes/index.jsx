import Footer from "../../components/Footer";
import Header from "../../components/Header";
import banner from '/src/assets/img/Banner-AED.png'
import familia from '/src/assets/img/pai-e-filha.png'
import kids from '/src/assets/img/playtime.png'
import medico from '/src/assets/img/equipe-medica.png'
import apoio from '/src/assets/img/assistencia-social.png'
import arte from '/src/assets/img/arte.jpg'
import sono from '/src/assets/img/sono.jpg'
import aula from '/src/assets/img/aula.jpg'
import monica from '/src/assets/img/monica.jpg'
import autismo from '/src/assets/img/autismoAp.jpg'
import duvida from '/src/assets/img/duvida.png'

import { Link } from "react-router-dom";

import './info.css'

export default function Informacoes() {
  return(
    <>
    <Header />
    <img className="banner" src={banner} alt="" />

    <main className="menu">
      <h2>Selecione seu <span>Perfil</span></h2>

      <div className="card cardInfo">
        <div className="card-body cardBody">
          <h3 className="card-title">Pais, mães e cuidadores</h3>
          <img className="imgCard" src={familia} alt="" />
          <Link href="#" className="card-link">Acessar</Link>
        </div>
      </div>

      <div className="card cardInfo">
        <div className="card-body cardBody">
          <h3 className="card-title">Crianças</h3>
          <img className="imgCard"  src={kids} alt="" />
          <Link href="#" className="card-link">Acessar</Link>
        </div>
      </div>

      <div className="card cardInfo">
        <div className="card-body cardBody">
          <h3 className="card-title">Médicos</h3>
          <img className="imgCard"  src={medico} alt="" />
          <Link href="#" className="card-link">Acessar</Link>
        </div>
      </div>

      <div className="card cardInfo">
        <div className="card-body cardBody">
          <h3 className="card-title">Profissionais de apoio</h3>
          <img className="imgCard"  src={apoio} alt="" />
          <Link href="#" className="card-link">Acessar</Link>
        </div>
      </div>
    </main>

    <section className="blog">
    <h2 className="titleBlog">Blog</h2>
      <div className="mainBlog">
        <div className="card imgBlog">
          <img src={arte} class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Arteterapia: quando a arte faz parte do tratamento do autismo</h5>
            <p className="card-text">Você já ouviu falar sobre a arteterapia? Trata-se de um tratamento que..</p>
          </div>
          <div className="card-body">
            <Link href="#" class="linkBlog">Leia Mais</Link>
          </div>
        </div>
        
        <div className="card imgBlog">
          <img src={sono} class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Autismo e sono: por que muitas crianças e adolescentes têm problemas para dormir?</h5>
            <p className="card-text">Autismo e sono - ou melhor, autismo e a falta de sono - muitas vezes são..</p>
          </div>
          <div className="card-body">
            <Link href="#" class="linkBlog">Leia Mais</Link>
          </div>
        </div>
        
        <div className="card imgBlog">
          <img src={aula} class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Autismo na educação infantil: 10 ideias para uma sala de aula inclusiva</h5>
            <p className="card-text">Trazer o autismo para o contexto da sala de aula é, sem dúvida, um..</p>
          </div>
          <div className="card-body">
            <Link href="#" class="linkBlog">Leia Mais</Link>
          </div>
        </div>
      </div>
      <button className="buttonBl">Veja Mais</button>
    </section>

    <h2 className="titleAp">INFORMAÇÕES DE APOIO</h2>
    <section className='infoAdd'>

    <div className="card imgInfo">
          <img src={monica} class="card-img-top card-Img" alt="..."/>
          <div className="card-body">
            <h5 className="card-title infoAp"><Link>CARTILHAS</Link></h5>
            <p className="card-text infoP">Revistas, gibis, livretos e diversos outros materiais para você baixar e ficar em dia com o autismo. Aproveite!</p>
          </div>
        </div>

        <div className="card imgInfo">
          <img src={autismo} class="card-img-top card-Img" alt="..."/>
          <div className="card-body">
            <h5 className="card-title infoAp"><Link>ENTIDADE DE APOIO</Link></h5>
            <p className="card-text infoP">Entidades, associações e grupos de apoio e suporte ao autista e seus familiares.</p>
          </div>
        </div>

        <div className="card imgInfo">
          <img src={duvida} class="card-img-top card-Img" alt="..."/>
          <div className="card-body">
            <h5 className="card-title infoAp"><Link>DÚVIDAS FREQUENTES</Link></h5>
            <p className="card-text infoP">Confira as principais dúvidas frequentes dos nossos colaboladores.</p>
          </div>
        </div>

    </section>


    <Footer />



    </>
  )
}