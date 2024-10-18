export default function Contato() {
    return (
<main className='contato'>
                <div className='titulo'>
                    <h1>Quer falar com a gente?</h1>
                    <p>Entre em contato conosco pelo formulário abaixo para podermos conversar!</p>
                </div>
                <div className="fale-conosco">
                    <section className='form-contato'>
                        <form>
                            <h2>Formulário de Contato</h2>
 
                            <div className="info">
                                <label htmlFor="username">Nome:</label>
                                <input type="text" id="username" required placeholder="Digite seu nome"/>
                            </div>
 
                            <div className="info">
                                <label htmlFor="username">Email:</label>
                                <input type="email" id="email" required placeholder="Digite seu email"/>
                            </div>
 
                            <div className="info">
                                <label htmlFor="message">Observações:</label>
                                <textarea id="message" name="message" rows="4" required placeholder="Digite a sua Observação"></textarea>
                            </div>
 
                            <button type="submit">ENVIAR</button>
 
                        </form>
                    </section>
                    <section className='localizacao'>
                        <h2>Informações de Contato</h2>
                        <p><strong>Localização: </strong> Av. Paulista, 1234 - São Paulo - SP.</p>
                        <p><strong>Horário de funcionamento: </strong> Todos os dias das 9h às 20h</p>
                        <p><strong>Telefone: </strong> (11) 9999-9999</p>
                        <p><strong>Email: </strong> contato@example.com</p>
                        <div className="mapa">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.121364237122!2d-46.6549614246698!3d-23.5640842787979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1725570650916!5m2!1spt-BR!2sbr"
                                className="mapa"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </section>
                </div>
            </main>
    )
}