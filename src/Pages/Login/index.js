import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import '../Login/style.css';




const Login = () => {
    const { register, handleSubmit, errors } = useForm();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    let storage = []; 

    const emailChange = (e) => {

        setEmail(e.target.value)
    }

    const senhaChange = (e) => {

        setSenha(e.target.value)
    }

    const cadastrar = (data) => {
        console.log("Data submitted: ", data);

    }

    const cadastrar2 = (event) => {
        event.preventDefault();

        const teste = storage.includes(e => e.email !== email);

        if (teste) {
            storage.push({ email: email, senha: senha }); 
        } else {
            
        }
        console.log(email);
        console.log(senha);

    } 

    return (
        <section className="container-login">
          <div className="box-login">
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
                type="password" minlength="8" maxLength="10" name="password" onChange={senhaChange} 
                placeholder="Senha"  
                ref={register({
                    required: "Digite sua senha",
                    pattern: {
                        message: "Digite uma senha válida",
                    },
                })} />
                
                {errors.password && <p className="error">{errors.password.message}</p>}

             
              <button className="btn-form"  onClick={cadastrar2} type="submit">Cadastrar</button>

              </form>
          </div>
        </section>

    )
}

export default Login;