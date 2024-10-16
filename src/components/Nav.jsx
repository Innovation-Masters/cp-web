import { Link } from "react-router-dom"

export default function Nav() {
    return (

        <header className="flex justify-evenly items-center py-8 sticky top-0 bg-dark">
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
                <Link to='/login' className="py-1 px-4 bg-secondary rounded-lg hover:opacity-70 text-light">Acessar Conta</Link>
                <img className="hover:opacity-70 cursor-pointer" src="../../public/shop.png" alt="icone de carrinho de compras" width={32}/>
            </div>
        </header>
    )
}