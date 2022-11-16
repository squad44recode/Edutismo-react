import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import mask from '/src/assets/img/Mask group (3).svg'
import './login.css'

export default function Entrar() {
  return (
    <>

  <Header />
    
<div className="row">

<div className="img-log col">
  <img src={mask} alt="imagem de fundo familia se abraçando"/>
</div>

    

  <main className="col menu-normal">
    <form className="form-main">
      <h2>Bem-Vindo de volta!</h2>
      <p>Entre na sua conta e continue de onde parou.</p>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">Caso tenha esquecido seus dados, clique em esqueci a senha</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Senha</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
        <a href="#">esqueceu a senha?</a>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Manter conectado</label>
      </div>
      <form className="d-flex">
        <button id="btn-entrar" className="btn btn-warning btn-lg" href="Login.html">Entrar</button>
      </form>

    </form>
  </main>

</div>


<section>
<main className="col menu-responsivo">
  <form className="form-main">
    <h2>Bem-Vindo de volta!</h2>
    <p>Entre na sua conta e continue de onde parou.</p>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">Caso tenha esquecido seus dados, clique em esqueci a senha</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Senha</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
      <a href="#">esqueceu a senha?</a>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Manter conectado</label>
    </div>
    <form className="d-flex">
      <button id="btn-entrar" className="btn btn-warning btn-lg" href="Login.html">Entrar</button>
    </form>

  </form>
</main>
</section>
      <Footer />
    </>
  )
}