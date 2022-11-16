import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ant from "/src/assets/img/edutismo/ant.svg";
import apple from "/src/assets/img/edutismo/apple.svg";
import egg from "/src/assets/img/edutismo/egg.svg";
import ball from "/src/assets/img/edutismo/ball.svg";
import big from "/src/assets/img/edutismo/big.svg";

import './contra.css'

export default function Contra() {
  return (
    <>
      <Header />
      <main className='memory-game'>
        <div className='cardGame'>
            <img className='card-front' src={ant} alt="Face da carta"/>
            <img className='card-back' src={apple} alt="Verso da carta"/>
        </div>
        <div className='cardGame' data-card="luigi">
            <img className='card-front' src={ball} alt="Face da carta"/>
            <img className='card-back' src={apple} alt="Verso da carta"/>
        </div>
        <div className='cardGame'>
            <img className='card-front' src={egg} alt="Face da carta"/>
            <img className='card-back' src={apple} alt="Verso da carta"/>
        </div>
        <div className='cardGame'>
            <img className='card-front' src={big} alt="Face da carta"/>
            <img className='card-back' src={apple} alt="Verso da carta"/>
        </div>
        <div className='cardGame'>
            <img className='card-front' src={ant} alt="Face da carta"/>
            <img className='card-back' src={apple} alt="Verso da carta"/>
        </div>
        <div className='cardGame'>
            <img className='card-front' src={ball} alt="Face da carta"/>
            <img className='card-back' src={apple} alt="Verso da carta"/>
        </div>
        <div className='cardGame'>
            <img className='card-front' src={egg} alt="Face da carta"/>
            <img className='card-back' src={apple} alt="Verso da carta"/>
        </div>
        <div className='cardGame'>
            <img className='card-front' src={big} alt="Face da carta"/>
            <img className='card-back' src={apple} alt="Verso da carta"/>
        </div>
    </main>
      <Footer />
    </>
  )
}
