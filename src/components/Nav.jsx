export default function Nav() {
    return (
        <header className="flex justify-evenly items-center py-8">
            <h1 className="text-2xl font-bold text-secondary">Innova Jewelry</h1>
            <nav>
                <ul className="flex text-dark font-bold gap-x-8 items-center text-lg">
                    <a className="hover:opacity-70" href="#">Home</a>
                    <a className="hover:opacity-70" href="#">Produtos</a>
                    <a className="hover:opacity-70" href="#">Sobre</a>
                    <a className="hover:opacity-70" href="#">Contato</a>
                </ul>
            </nav>
            <div className="flex gap-x-4 font-bold">
                <button className="py-1 px-4 bg-dark rounded-lg hover:opacity-70 text-light">Acessar Conta</button>
                <img className="hover:opacity-70 cursor-pointer" src="../../public/shop.png" alt="icone de carrinho de compras" width={32}/>
            </div>
        </header>
    )
}