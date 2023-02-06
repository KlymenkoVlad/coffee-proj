import './header.scss'
import logo from './asset/Group.png';
import coffeeBeans from './asset/coffee-beans (1).png';

const Header = ({employees, increase}) => {
    return (
            <div className='header-container'>
                <div className="header-flex-container">
                    <img src={logo} alt="Logo" className='header-flex-item'/>
                    <a href="#" className='header-flex-item'>Coffee house</a>
                    <a href="#" className='header-flex-item'>Our coffee</a>
                    <a href="#" className='header-flex-item'>For your pleasure</a>
                </div>

                <div className='header-content'>
                    <h1>Everything You Love About Coffee</h1>
                    <div><div className='header-content-stripe'></div><img src={coffeeBeans} alt="CoffeeBeans" /><div className='header-content-stripe'></div></div>
                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>
                    <button className='header-btn'>More</button>
                </div>

            </div>
    )
}

export default Header;