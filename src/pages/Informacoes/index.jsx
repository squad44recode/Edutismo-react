import Footer from "../../components/Footer";
import Header from "../../components/Header";
import banner from '/src/assets/img/Banner-AED.png'
import familia from '/src/assets/img/pai-e-filha.png'
import kids from '/src/assets/img/playtime.png'
import medico from '/src/assets/img/equipe-medica.png'
import apoio from '/src/assets/img/assistencia-social.png'

import { Link } from "react-router-dom";

import './info.css'

export default function Informacoes() {
  return(
    <>
    <Header />
    <img className="banner" src={banner} alt="" />

    <main className="menu">
      <h2>Selecione seu Perfil</h2>

      <div className="card cardInfo">
        <div className="card-body">
          <h3 className="card-title">Pais, mães e cuidadores</h3>
          <img className="imgCard" src={familia} alt="" />
          <Link href="#" className="card-link">Acessar</Link>
        </div>
      </div>

      <div className="card cardInfo">
        <div className="card-body">
          <h3 className="card-title">Crianças</h3>
          <img className="imgCard"  src={kids} alt="" />
          <Link href="#" className="card-link">Acessar</Link>
        </div>
      </div>

      <div className="card cardInfo">
        <div className="card-body">
          <h3 className="card-title">Médicos</h3>
          <img className="imgCard"  src={medico} alt="" />
          <Link href="#" className="card-link">Acessar</Link>
        </div>
      </div>

      <div className="card cardInfo">
        <div className="card-body">
          <h3 className="card-title">Profissionais de apoio</h3>
          <img className="imgCard"  src={apoio} alt="" />
          <Link href="#" className="card-link">Acessar</Link>
        </div>
      </div>
    </main>


    <Footer />



    </>
  )
}