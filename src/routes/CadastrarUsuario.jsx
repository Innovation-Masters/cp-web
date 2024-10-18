import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import IconUsuario from "../../public/icons8-usuario.png";
import IconSenha from "../../public/icons8-trancar.png";

const CadastrarUsuario = () => {

    //Hook- useParams- serve para receber da rota ou gerar o codigo
    let {id} =useParams();

    //Hook - useState - Manipula o estado da variavel
    const [usuarios,setUsuarios]= useState({
        id,
        usuario:'',
        senha:''
    });

    const [confirmarSenha, setConfirmarSenha] = useState(''); // Estado para confirmação da senha

    //Hook- useNavigate- Redireciona para outro componente
    const navigate = useNavigate();

    //criando a função handleChange
    // spred(...) -pega o valor novo e junta com os valores ja cadastrados dentro de um array ou objeto
    //evento target - captura o que foi digitado em um campo input
    const handleChange=(e)=>{
        setUsuarios({...usuarios,[e.target.name]: e.target.value});
    };

    //criando a função handleConfirmarSenhaChange
    const handleConfirmarSenhaChange = (e) => {
        setConfirmarSenha(e.target.value);
    };

    //criando a variavel metodo para criar e alterar
    let metodo = "post";
    if(id){
        metodo = 'put';
    }

    //criando a função handleSubmit
    const handleSubmit=(e)=>{
        //previne que ocorra qualquer modificação no form ex. load
        e.preventDefault();

        // Verificação de senha
        if (usuarios.senha !== confirmarSenha) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return;
        }

        fetch(`http://localhost:5001/usuarios/${id ? id :''}`,{
            method:metodo,
            headers: {
                'Content-type':'application/json',
            },
            //prepara para receber os dados em json
            body:JSON.stringify(usuarios),
        })
        .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao criar a conta.');
                }
                return response.json();
            })
            .then((data) => {
                // Salva os dados do usuário no localStorage para manter o estado de autenticação
                sessionStorage.setItem('usuario', JSON.stringify(data));
                alert("Conta criada com sucesso!");
                // Redireciona para a página de cadastrar produto
                navigate("/produtos");
            })
            .catch((error) => {
                console.error(error);
                alert('Erro ao criar a conta. Tente novamente.');
            });
        };
    
    //Hook- useEffect - realiza o efeito colateral ele carrega os usuarios cadastrados
    useEffect(()=>{
        if(id){
            fetch(`http://localhost:5001/usuarios/${id}`)
                .then((resp)=>{
                    return resp.json();
                })
                .then((data)=>{
                    setUsuarios(data);
                });
        }
    },[id]);  

    return (
        <main className="bg-cadastro flex justify-center items-start min-h-screen">
            <section className="box-login">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-light text-title text-4xl text-center font-extrabold">Criar uma Conta</h1>
                    <div className="input-field relative">
                        <input 
                            type="text" 
                            name="usuario"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            value={usuarios.usuario}
                            placeholder="Usuário"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleChange}
                            />
                        <img src={IconUsuario} alt="Icone Usuario" className="icon-dado absolute"/>
                    </div>
                    <div className="input-field relative">
                        <input 
                            type="password" 
                            name="senha"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            value={usuarios.senha}
                            placeholder="Senha"
                            required
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleChange}
                        />
                        <img src={IconSenha} alt="Icone Senha" className="icon-dado absolute"/>
                    </div>
                    <div className="input-field relative">
                        <input 
                            type="password"
                            name="confirmarSenha"
                            className="input-dado w-full border border-white/20 rounded-full text-light text-lg"
                            value={confirmarSenha}
                            placeholder="Confirme sua Senha"
                            required
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleConfirmarSenhaChange}
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