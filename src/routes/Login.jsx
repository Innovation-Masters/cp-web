import { Link } from 'react-router-dom';

import IconUsuario from "../../public/icons8-usuario.png";
import IconSenha from "../../public/icons8-trancar.png";


const Login = () => {
    return (
        <main className="bg-login flex justify-center items-start min-h-screen" >
            <section className="box-login">
                {/* <form onSubmit={handleSubmit}> */}
                <form>
                    <h1 className="text-light text-title text-4xl text-center">Login</h1>
                    <div className="input-field relative">
                        <input 
                            type="text"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            placeholder="Usuário"
                            required 
                            id="usuario"
                            // ref={usuario}
                        />
                        <img src={IconUsuario} alt="Icone Usuario" className="icon-dado absolute"/>
                    </div>
                    <div className="input-field relative">
                        <input 
                            type="password"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            placeholder="Senha"
                            id="senha"
                            // ref={senha}
                        />
                        <img src={IconSenha} alt="Icone Senha" className="icon-dado absolute"/>
                    </div>

                    <div className="flex text-light recall-forget">
                        <label className="flex">
                            <input type="checkbox"/>
                            Lembre de mim
                        </label>
                        <a href="#" className="hover:underline">Esqueceu sua senha?</a>
                    </div>

                    <button type="submit" className="login-btn bg-secondary w-full border border-light rounded-full text-light text-xl font-bold">
                        Login
                    </button>

                    <div className="signup-link flex justify-center text-secondary font-semibold">
                        <p>Não possui uma conta?</p> 
                        <Link to="/cadastro" className="text-light">Criar</Link>
                    </div>
                </form>

            </section>
        </main>
    )
}

export default Login