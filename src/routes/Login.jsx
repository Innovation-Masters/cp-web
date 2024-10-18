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

                    <div className="flex justify-between text-sm mb-4">
                        <label className="text-white flex items-center">
                            <input type="checkbox" className="mr-2"/>
                            Lembre de mim
                        </label>
                        <a href="#" className="text-blue-300 hover:underline">Esqueceu sua senha?</a>
                    </div>

                    <button type="submit" className="w-full h-14 bg-blue-600 border border-white rounded-full shadow-md text-white text-xl font-bold hover:bg-blue-700 transition-all">
                        Login
                    </button>

                    <div className="flex justify-center gap-2 text-white font-semibold mt-5">
                        <p>Não possui uma conta?</p> 
                        <Link to="/criarUsuario" className="text-blue-300 hover:underline">Criar</Link>
                    </div>
                </form>

            </section>
        </main>
    )
}

export default Login