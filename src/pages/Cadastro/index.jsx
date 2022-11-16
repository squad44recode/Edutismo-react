import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import maskg from '/src/assets/img/Mask group.svg'

import './cadastro.css'



export default function Cadastro() {
  return (
    <>
      <Header />
      <div class="row">
      <div class="img-log col">
        <img src={maskg} alt=""/>
      </div>
      <main className="col menu-normal">
      <form className="form-main">
        <h2>Crie sua conta</h2>
        <p>Ao criar sua conta poderá desfrutar de Edutismo por completo!</p>

        <div className="mb-3">
            <label for="exampleInputName" className="form-label">Nome</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="name"/>
        </div>

        <div className="input-group mb-3">
            <label for="exampleInputName" className="form-label">Nascimento</label>
            <input type="date" className="form-control" aria-label="Data Nascimento"/>
            <label for="exampleInputName" className="form-label">Contato</label>
            <input type="text" className="form-control" placeholder="(xx) 9xxxx-xxxx" aria-label="Telefone"/>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Senha</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <form className="d-flex">
          <button id="btn-entrar" className="btn btn-warning btn-lg"><Link to="/">Finalizar</Link></button>
        </form>

      </form>
      </main>
  
      <Footer />
      </div>
      </>

  )
}