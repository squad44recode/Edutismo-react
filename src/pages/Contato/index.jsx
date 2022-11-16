import Footer from "../../components/Footer";
import Header from "../../components/Header";

import email from '/src/assets/img/icone_email.svg';
import telefone from '/src/assets/img/icone_telefone.svg';
import endereço from '/src/assets/img/icone_endereço.svg';
import horario from '/src/assets/img/icone_horário.svg';

import './contato.css';

export default function Contato() {
  return (
    <>
      <Header />
      <main>
    <div className="containerHome">
      <div className="row">
        <div className="col">
          <h2 className="col-h2">Contato</h2>
          <p className="col-p">Tire sua dúvida conosco</p>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nome</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Digite aqui seu nome"/>

            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Descrição</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deixe aqui sua mensagem.."></textarea>
            
          </div>
        </div>
        <div className="col col-div">
          <ul className="col-ul">
            <li className="col-li" type="none"><img className="col-li-img" src={email} alt="icone email"/>edutismo@gmail.com.br</li>
            <li className="col-li" type="none"><img className="col-li-img" src={telefone} alt="icone telefone"/>(xx) 9 xxxx-xxxx</li>
            <li className="col-li" type="none"><img className="col-li-img" src={endereço}alt="icone endereço"/>Rua Das Maças</li>
            <li className="col-li" type="none"><img className="col-li-img" src={horario} alt="icone horário"/>09:00 - 18:00</li>
          </ul>

        </div>
      </div>
    </div>
  </main>
      <Footer />
    </>
  )
}