import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from "react-router-dom";

import '../Login/style.css';



const Login = () => {
    const { register, errors } = useForm();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [sucesso, setSucesso] = useState(false);

    let storage = []; 

    const emailChange = (e) => {

        setEmail(e.target.value)
    }

    const senhaChange = (e) => {

        setSenha(e.target.value)
    }

    const cadastrar2 = (event) => {
        event.preventDefault();

        storage.push({ email: email, senha: senha });             
        setSucesso(true)        

    } 

    return (
        <section className="container-login">
          <div className={`box-login ${sucesso ? 'login-close' : ''}`}>
              <h3 className="title-login">Cadastre-se na nossa plataforma</h3>
              <p className="description-login">Vem fazer parte desse time de mulheres!</p>

              <form className="login-form" action="" onSubmit={cadastrar2}>
                
                <input className="input-form" 
                type="email" onChange={emailChange} placeholder="E-mail" name="email" 
                ref={register({
                    required: "Digite seu e-mail",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Digite um endereço de e-mail válido", 
                    },
                })} 
                />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <input className="input-form input-password" 
                type="password" name="password" onChange={senhaChange} 
                placeholder="Senha"  
                ref={register({
                    minLength: 8,
                    maxLength: 10,
                    required: "Digite sua senha",
                    pattern: {
                        message: "Digite uma senha válida",
                    },
                })} />
                
                {errors.password && <p className="error">{errors.password.message}</p>}

             
              <button className="btn-form"  onClick={cadastrar2} type="submit">Cadastrar</button>

              </form>
          </div>

          <div className={`box-sucesso ${sucesso ? 'true-sucesso' : ''}`}>
              <h4 className="title-sucesso">É isso aí! Você se cadastrou.</h4>
              <p className="descricao-sucesso">Agora é só checar seu email para confirmar sua inscrição!</p>

              <div className="return-btn">
              <Link to='/' className="return-home">
                Home
              </Link>
              </div>
          </div>
        </section>

    )
}

export default Login;