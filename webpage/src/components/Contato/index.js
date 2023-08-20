import './Contato.css';


const Contato = () => {
    return (
        <div className="contato-container">
           <div>
            <section>
                <h1 className="contato-titulo">Got a project in <h1 className="contato-subtitulo">mind?</h1></h1>
            </section>
            <section className="imagens-contato">
                <img className="imagem-1-contato" src="Vector 186.svg"/>
                <img className="imagem-2" src="Group 2372.png"/>
            </section>    
           </div>
        <div className="formulario-container">
            <div>
                <form>
                    <section className="textos-container-contato">
                        <aside className="inputs-container">
                            <legend for="name" className="contato-texto">Your Name</legend>
                            <input id="name" type="text" placeholder="Name" className="contato-input"/>
                        </aside>
                        <aside className="inputs-container">
                            <legend for="email" className="contato-texto">Your Email</legend>
                            <input id="email" type="email" placeholder="Email" className="contato-input"/>
                        </aside>
                    </section>

                    <aside className="mensagem-container">
                        <legend for="message" className="contato-texto">Your Message</legend>
                        <textarea  id="message" placeholder="message" name="message" className="input-mensagem"   />
                        <a href="" className="contato-mensagem-link">Send Message</a>
                    </aside>
                </form>
            </div>
        </div>
        </div>
    )
}


export default Contato;