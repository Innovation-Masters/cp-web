import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import IconUsuario from "../../public/icons8-usuario.png";
import IconSenha from "../../public/icons8-trancar.png";


const Login = () => {

    // Hook - useRef - Pega a referência de um elemento ou componente e guarda
    const usuario = useRef();
    const senha = useRef();

    // Hook - useState - Manipila o estado da variavel
    const [usuarios, setUsuarios] = useState([]);

    // Hook - useNavigate - Ele redireciona para outro componente
    const navigate = useNavigate();

    // Criando a função de validação
    function validate(){
        for(let i=0; i < usuarios.length; i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha == senha.current.value
            )
            return true
        }
    };

    // Criando a função handleSubmit
    const handleSubmit = (e) => {
        // Previne qualquer alteração no navegador
        e.preventDefault();  
        
        if(validate()){
            // Criando a autenticação
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario", usuario.current.value);
                sessionStorage.setItem("senha", token);
                alert("Usuário logado com sucesso!");
                navigate("/produtos"); // Redireciona para pagina de Produtos
        }else{
            alert("Usuário ou senha inválidos!");
        }
    };

    // Hook - useEffect - Realiza um efeito colateral , no exemplo ele vai
    // até api e tras os dados
    useEffect(() => {
        //Pega a url da api
        fetch("http://localhost:5001/usuarios")

        // Promise
        .then((res) => {
            // Converte os dados em json
            return res.json();
        })

        // Realiza as alterações das variaveis
        .then((res) => {
            setUsuarios(res);
        })
        // Retorna um array vazio
    }, []);

    return (
        <main className="bg-login flex justify-center items-start min-h-screen" >
            <section className="box-login">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-light text-title text-4xl text-center font-extrabold">Login</h1>
                    <div className="input-field relative">
                        <input 
                            type="text"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            placeholder="Usuário"
                            required 
                            id="usuario"
                            ref={usuario}
                        />
                        <img src={IconUsuario} alt="Icone Usuario" className="icon-dado absolute"/>
                    </div>
                    <div className="input-field relative">
                        <input 
                            type="password"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            placeholder="Senha"
                            id="senha"
                            ref={senha}
                        />
                        <img src={IconSenha} alt="Icone Senha" className="icon-dado absolute"/>
                    </div>

                    <div className="flex text-light recall-forget">
                        <label className="flex font-semibold">
                            <input type="checkbox"/>
                            Lembre de mim
                        </label>
                        <a href="#" className="font-semibold">Esqueceu sua senha?</a>
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