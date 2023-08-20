import './Projetos.css';

const Projetos = () => {
    return (
        <div className="projetos-container">
           <section className="projetos-conteudo">
                    <h1 className="titulo-projetos">My recent <h1 className="subtitulo-projetos">works</h1></h1>
                    <ul className="lista-projetos">
                        <li className="lista-item-projetos"><a href="#" className="link-projetos">All</a></li>
                        <li className="lista-item-projetos"><a href="#"  className="link-projetos">UI</a></li>
                        <li className="lista-item-projetos"><a href="#"  className="link-projetos">UX</a></li>
                        <li className="lista-item-projetos"><a href="#"  className="link-projetos">Web Design</a></li>
                    </ul>
           </section>
           <section className="container-card-projetos">
                <aside className="card-projetos">
                    <img src="Frame 10.png" alt="card 1 do projeto"/>
                </aside>
                <aside className="card-projetos">
                    <img src="Frame 11.png" alt="card 2 do projeto"/>
                </aside>
                <aside className="card-projetos">
                    <img  src="Group 1.png" alt="card 3 do projeto"/>
                </aside>
           </section>
        </div>
    )
}


export default Projetos;