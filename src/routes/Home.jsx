export default function Home() {
    return (
        <main className="flex flex-col gap-y-8 mx-20">
            <section className="flex gap-x-8 justify-center items-center grow">
                <div className="flex flex-col gap-y-8">
                    <h3 className="text-4xl font-extrabold">Uma experiência unica e acessivel ao seu bolso</h3>
                    <p className="font-semibold">Na Innova Jewelry, acreditamos que cada joia conta uma história única. Nossa coleção é cuidadosamente selecionada, unindo design contemporâneo e a mais alta qualidade em materiais. <br/>  <br/>
                        
                    Aqui, você encontrará peças que refletem personalidade, elegância e inovação. Desde anéis deslumbrantes até colares sofisticados, nossas joias são perfeitas para qualquer ocasião, seja um presente especial ou um mimo para si mesmo. Nossos designers talentosos trabalham incansavelmente para criar peças exclusivas que se destacam pela beleza e originalidade.  <br/>  <br/>
                    
                    Explore nosso ambiente acolhedor e deixe-se inspirar pela magia das joias. Na Innova Jewelry, cada detalhe é pensado para proporcionar a você uma experiência única de compra.  <br/>  <br/>
                    
                    Venha nos visitar e descubra a joia que vai complementar sua história!
                    </p>
                    <button className="bg-dark rounded py-4 px-12 font-bold text-light hover:opacity-70 self-start">Acessar Loja</button>
                </div>
                <img src="../../public/main.jpg" width={400} height={400} />
            </section>
            
            <section className="flex justify-center bg-secondary rounded py-4 gap-x-12">
                <div className="flex flex-col gap-y-2 items-center">
                    <img src="../../public/ring.png" alt="icone simples de joalheria" />
                    <h5 className="font-bold">Jóias</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <hr />
                <div className="flex flex-col gap-y-2 items-center">
                    <img src="../../public/ring.png" alt="icone simples de joalheria" />
                    <h5 className="font-bold">Jóias</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <hr />
                <div className="flex flex-col gap-y-2 items-center">
                    <img src="../../public/ring.png" alt="icone simples de joalheria" />
                    <h5 className="font-bold">Jóias</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <hr />
                <div className="flex flex-col gap-y-2 items-center">
                    <img src="../../public/ring.png" alt="icone simples de joalheria" />
                    <h5 className="font-bold">Jóias</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </section>
        </main>
    )
}