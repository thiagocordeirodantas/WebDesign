import './Footer.css';

const Footer = () => {
    return (
            <div className="footer-container">
                <ul className="container-lista-footer">
                    <li className="lista-footer-item"><img src="home.svg"/>Home</li>
                    <li className="lista-footer-item"><img src="user.svg"/>About me</li>
                    <li className="lista-footer-item"><img src="phone.svg"/>Contact</li>
                </ul>
                <ul className="container-icon-footer">
                    <li className="lista-icon-footer"><img className="icon-footer" src="facebook.svg"/></li>
                    <li className="lista-icon-footer"><img className="icon-footer" src="instagram.svg"/></li>
                    <li className="lista-icon-footer"><img className="icon-footer" src="twitter.svg"/></li>
                    <li className="lista-icon-footer"><img className="icon-footer" src="youtube.svg"/></li>
                </ul> 
                    <p className="texto-footer">Terms of Service - Privacy Policy</p>
            </div>
    
    )
}


export default Footer;