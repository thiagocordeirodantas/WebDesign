import './Header.css';

const Header = () => {
    return (
        <div>
           <div className="informacoes-container">
            <div> 
                <section className="container-conteudo">
                    <section>
                        <aside>
                            <h1 className="informacoes-titulo">DEVELOPER</h1>
                            <h2 className="informacoes-subtitulo">FRONT END</h2>
                        </aside>
                        <aside className="informacoes-botoes">
                            <a href="#" className="botao-informacao-1">Contrate me</a>
                            <a href="#" className="botao-informacao-2">Baixar CV <img src="download.svg"/></a>
                           
                        </aside>
                        <aside className="frame-container">
                          <a className="frame-header" href=""><img  src="Frame 7.svg"/></a>    
                           </aside>
                    </section>
                        <aside className="imagem-2">
                            <img className="imagem2-informacoes imagem-2" src="Group 2346.png"/>
                        </aside>
                    </section>
                <section>
                </section>
            </div>  
        </div>
        </div>
    )
}


export default Header;