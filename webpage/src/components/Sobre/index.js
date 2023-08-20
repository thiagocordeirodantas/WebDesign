import './Sobre.css';

const Sobre = () => {
    return (
        <div >
           <div className="sobre-conteudo">
            <section className="sobre-conteudo-texto">
                <img className="imagem-about-1" src="Vector 141.svg"/>

                <h1 className="sobre-mim-titulo">Sobre <h1 className="sobre-mim-subtitulo">mim</h1><img className="imagem-about-2" src="lightbulb.svg"/></h1>
                
                <p className="sobre-mim-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....
                <a href="#" className="sobre-mim-link"> Read more</a></p>

                <img className="imagem-about-3" src="Vector 186.svg"/>
            </section>
            <section>
                <img className="imagem-about-4" src="Group 62.png"/>
            </section>

           </div>
        </div>
    )
}


export  default Sobre;