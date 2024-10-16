import { Link } from "react-router-dom"

export default function Home() {
    return (
        <main className="flex flex-col gap-y-8 mx-52">
            <section className="flex gap-x-8 justify-center items-center grow">
                <div className="flex flex-col gap-y-8">
                    <h3 className="text-4xl font-extrabold">Uma experiência unica e acessivel ao seu bolso</h3>
                    <p className="font-semibold">

                        Na Innova Jewelry, acreditamos que cada joia é muito mais do que um simples acessório – ela conta uma história única, capaz de capturar momentos inesquecíveis e transmitir emoções profundas. Nossa coleção foi cuidadosamente selecionada para refletir essa essência, unindo o melhor do design contemporâneo com a mais alta qualidade em materiais preciosos, como ouro, prata e pedras preciosas. <br /> <br />

                        Aqui, cada peça foi criada para exalar personalidade, elegância e inovação. Desde anéis deslumbrantes, que simbolizam compromissos e conquistas, até colares sofisticados, que adornam com sutileza e charme qualquer ocasião, nossas joias são perfeitas tanto para momentos especiais quanto para um presente único, ou até mesmo um mimo merecido para si. Nossos designers, talentosos e apaixonados, dedicam-se a trabalhar incansavelmente na criação de peças exclusivas, que se destacam não apenas pela beleza, mas também pela originalidade e significado.<br /> <br />

                        Convidamos você a explorar nosso ambiente acolhedor, onde cada detalhe é pensado para encantar e inspirar. Na Innova Jewelry, acreditamos que a experiência de comprar uma joia deve ser tão única quanto as próprias peças que oferecemos. Seja recebendo um atendimento personalizado ou descobrindo coleções cuidadosamente curadas, nossa missão é garantir que você se sinta especial do início ao fim.<br /> <br />

                        Venha nos visitar e permita-se deslumbrar pela magia das joias que temos a oferecer. Aqui, na Innova Jewelry, temos a joia perfeita para complementar a sua história, para eternizar momentos e criar memórias que serão apreciadas para sempre!
                    </p>
                    <Link to='/produtos' className="bg-dark rounded py-4 px-12 font-bold text-light hover:opacity-70 self-start">Acessar Loja</Link>
                </div>
                <img className="w-1/2" src="../../public/main.jpg" />
            </section>

            <section className="flex justify-center bg-secondary rounded py-4 gap-x-12">
                <div className="flex flex-col gap-y-2 items-center">
                    <img src="../../public/ring.png" alt="icone simples de joalheria" width={70} />
                    <h5 className="font-bold">Jóias</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <hr />
                <div className="flex flex-col gap-y-2 items-center">
                    <img src="../../public/earrings.png" alt="icone simples de joalheria" width={70} />
                    <h5 className="font-bold">Brincos</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <hr />
                <div className="flex flex-col gap-y-2 items-center">
                    <img src="../../public/bracelets.png" alt="icone simples de joalheria" width={70} />
                    <h5 className="font-bold">Braceletes</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <hr />
                <div className="flex flex-col gap-y-2 items-center">
                    <img src="../../public/decoratives.png" alt="icone simples de joalheria" width={70} />
                    <h5 className="font-bold">Decorativos</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </section>
        </main>
    )
}