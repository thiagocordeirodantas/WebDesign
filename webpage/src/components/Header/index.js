import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <section>
                <h3 className="header-logo">SaulDesign</h3>
            </section>
            <nav>
                <ul className="lista-navegacao">
                    <li className="navegacao-item-lista"><a href="" className="navegacao-link">Home</a></li>
                    <li className="navegacao-item-lista"><a href="" className="navegacao-link">About Me</a></li>
                    <li className="navegacao-item-lista"><a href="" className="navegacao-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;