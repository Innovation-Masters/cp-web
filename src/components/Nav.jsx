import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Hook para monitorar a rota atual

    // Função para verificar a autenticação
    const checkAuthentication = () => {
        const usuario = sessionStorage.getItem("usuario");
        if (usuario) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    // Atualiza o estado da autenticação ao carregar o componente, ao mudar de rota ou ao alterar o sessionStorage
    useEffect(() => {
        checkAuthentication();

        // Adiciona um evento para verificar as mudanças no sessionStorage
        window.addEventListener("storage", checkAuthentication);

        // Limpa o evento ao desmontar o componente
        return () => {
            window.removeEventListener("storage", checkAuthentication);
        };
    }, [location]); // O hook useEffect agora monitora mudanças de rota

    // Função de logout
    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        setIsAuthenticated(false);
        alert("Saindo da Sessão");
        navigate("/");
    };

    return (

        <header className="flex justify-evenly items-center py-8 sticky top-0 bg-dark header-position">
            <Link className="text-2xl font-extrabold text-light">Innova Jewelry</Link>
            <nav>
                <ul className="flex text-dark font-bold gap-x-8 items-center text-lg text-light">
                    <Link to='/' className="hover:opacity-70" >Home</Link>
                    <Link to='/produtos' className="hover:opacity-70" >Produtos</Link>
                    <Link to='/sobre' className="hover:opacity-70" >Sobre</Link>
                    <Link to='/contato' className="hover:opacity-70" href="#">Contato</Link>
                </ul>
            </nav>
            <div className="flex gap-x-4 font-bold">
                {isAuthenticated ? (
                    <button onClick={handleLogout} className="py-1 px-4 bg-secondary rounded-lg hover:opacity-70 text-light">Sair</button>
                ) : (
                    <Link to="/login" className="py-1 px-4 bg-secondary rounded-lg hover:opacity-70 text-light">Acessar Conta</Link>
                )}
                <img className="hover:opacity-70 cursor-pointer" src="../../public/shop.png" alt="icone de carrinho de compras" width={32}/>
            </div>
        </header>
    )
}