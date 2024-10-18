

import IconUsuario from "../../public/icons8-usuario.png";
import IconSenha from "../../public/icons8-trancar.png";

const CadastrarUsuario = () => {
    return (
        <main className="bg-cadastro flex justify-center items-start min-h-screen">
            <section className="box-login">
                {/* <form onSubmit={handleSubmit}> */}
                <form>
                    <h1 className="text-light text-title text-4xl text-center font-extrabold">Criar uma Conta</h1>
                    <div className="input-field relative">
                        <input 
                            type="text" 
                            name="usuario"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            // value={usuarios.usuario}
                            placeholder="Usuário"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            // onChange={handleChange}
                            />
                        <img src={IconUsuario} alt="Icone Usuario" className="icon-dado absolute"/>
                    </div>
                    <div className="input-field relative">
                        <input 
                            type="password" 
                            name="senha"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            // value={usuarios.senha}
                            placeholder="Senha"
                            required
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            // onChange={handleChange}
                        />
                        <img src={IconSenha} alt="Icone Senha" className="icon-dado absolute"/>
                    </div>
                    <div className="input-field relative">
                        <input 
                            type="password"
                            name="confirmarSenha"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            // value={confirmarSenha}
                            placeholder="Confirme sua Senha"
                            required
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            // onChange={handleConfirmarSenhaChange}
                        />
                        <img src={IconSenha} alt="Icone Senha" className="icon-dado absolute"/>
                    </div>
                    <button type="submit" className="login-btn bg-secondary w-full border border-light rounded-full text-light text-xl font-bold">
                        Criar
                    </button>
                </form>
            </section>
        </main>
    )
}

export default CadastrarUsuario