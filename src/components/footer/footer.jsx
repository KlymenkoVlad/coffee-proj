import './footer.scss'

import logo from './assets/coffee-beans-black-border.png';
import blackBeans from './assets/coffee-beans-black.png'

const Footer = () => {
    return (
        <div className="footer-container">
                <div className="footer-flex-container">
                    <img src={logo} alt="Logo"/>
                    <a href="#" className='footer-flex-item'>Coffee house</a>
                    <a href="#" className='footer-flex-item'>Our coffee</a>
                    <a href="#" className='footer-flex-item'>For your pleasure</a>
                </div> 
            <div className='footer-stripe-text'><div className='footer-content-stripe'></div><img src={blackBeans} alt="CoffeeBeans" /><div className='footer-content-stripe'></div></div>
        </div>
    )
}

export default Footer;