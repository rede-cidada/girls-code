import React, { useEffect } from 'react';



import '../Login/style.css';



const Login = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return (
        <section className="container-login">
          <div className="box-login">
              <h3 className="title-login">Cadastre-se na nossa plataforma</h3>
              <p className="description-login">Vem fazer parte desse time de mulheres!</p>

              <form className="login-form" action="">
                
                <input className="input-form" type="email" placeholder="E-mail" autoComplete="on"/>
                <input className="input-form input-password" type="password" placeholder="Senha"/>

              <a className="btn-form" href="#">Cadastrar</a>

              </form>
          </div>
        </section>

    )
}

export default Login;