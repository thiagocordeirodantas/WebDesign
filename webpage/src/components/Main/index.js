import './Main.css';

const Main = () => {
    return (
        <div>
           <div className="informacoes-container">
            <div> 
                <section className="container-conteudo">
                    <section>
                        <aside>
                            <h1 className="informacoes-titulo">CREATIVE UI</h1>
                            <h2 className="informacoes-subtitulo">DESIGNER</h2>
                        </aside>
                        <aside className="informacoes-botoes">
                            <a href="#" className="botao-informacao-1">Hire me</a>
                            <a href="#" className="botao-informacao-2">Download CV <img src="download.svg"/></a>
                        </aside>
                    </section>
                        <aside className="imagem-2">
                            <img className="imagem2-informacoes" src="Group 2346.png"/>
                        </aside>
                    </section>
                <section>
                </section>
            </div>
        </div>
        </div>
    )
}


export default Main;