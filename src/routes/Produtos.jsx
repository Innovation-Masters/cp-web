export default function Produtos() {
    return (
        <main className="flex flex-col gap-y-12 mx-52 items-center">
            <img className="rounded-3xl" src="../../public/banner.jpg" alt="banner da joalheria" width={1500} height={500} />
            <h3 className="text-3xl uppercase font-bold self-start">Produtos em estoque</h3>
            <section className="grid grid-cols-3 gap-12">
                <div className="flex flex-col gap-y-2">
                    <img src="../../public/colecao1.jpg" alt="imagem da coleção de joias" width={300} />
                    <h6 className="font-bold">Coleção de primavera</h6>
                    <p className="text-green-500 font-bold">$ 429.9</p>
                    <button className="hover:opacity-70 bg-dark text-light font-bold rounded">Adicionar ao Carrinho</button>
                </div>

                <div className="flex flex-col gap-y-2">
                    <img src="../../public/colecao2.jpg" alt="imagem da coleção de joias" width={300} />
                    <h6 className="font-bold">Coleção de Inverno</h6>
                    <p className="text-green-500 font-bold">$ 412.9</p>
                    <button className="hover:opacity-70 bg-dark text-light font-bold rounded">Adicionar ao Carrinho</button>
                </div>

                <div className="flex flex-col gap-y-2">
                    <img src="../../public/colecao3.jpg" alt="imagem da coleção de joias" width={300} />
                    <h6 className="font-bold">Coleção de Outono</h6>
                    <p className="text-green-500 font-bold">$ 415.9</p>
                    <button className="hover:opacity-70 bg-dark text-light font-bold rounded">Adicionar ao Carrinho</button>
                </div>

                <div className="flex flex-col gap-y-2">
                    <img src="../../public/colecao4.jpg" alt="imagem da coleção de joias" width={300} />
                    <h6 className="font-bold">Especial: Dia dos Namorados</h6>
                    <p className="text-green-500 font-bold">$ 598.9</p>
                    <button className="hover:opacity-70 bg-dark text-light font-bold rounded">Adicionar ao Carrinho</button>
                </div>

                <div className="flex flex-col gap-y-2">
                    <img src="../../public/colecao5.avif" alt="imagem da coleção de joias" width={300} />
                    <h6 className="font-bold">Limitado: Prata</h6>
                    <p className="text-green-500 font-bold">$ 445.8</p>
                    <button className="hover:opacity-70 bg-dark text-light font-bold rounded">Adicionar ao Carrinho</button>
                </div>

                <div className="flex flex-col gap-y-2">
                    <img src="../../public/colecao6.avif" alt="imagem da coleção de joias" width={300} />
                    <h6 className="font-bold">Limitado: Ouro</h6>
                    <p className="text-green-500 font-bold">$ 945.9</p>
                    <button className="hover:opacity-70 bg-dark text-light font-bold rounded">Adicionar ao Carrinho</button>
                </div>
            </section>
        </main>
    )
}