import './our-best.scss'

import img1 from './assets/71qBQnpQFYL.png';
import img2 from './assets/815O9ktyfUL.png';
import img3 from './assets/91Ryk2gKejL.png';

const OurBest = ({employees, increase}) => {
    return (
        <div className="ourBest-container">
            <h3>Our best</h3>
            <div className="ourBest-flex-container">
                <div className="ourBest-flex-item">
                    <div className='ourBest-rectangle'>
                        <div className="ourBest-absolute-item">
                            <img src={img1} alt="" />
                            <p>AROMISTICO Coffee 1 kg</p>
                            <p>6.99$</p>
                        </div>
                    </div>
                </div>
                <div className="ourBest-flex-item">
                    <div className='ourBest-rectangle'>
                        <div className="ourBest-absolute-item">
                            <img src={img2} alt="" />
                            <p>Solimo Coffee Beans 2 kg</p>
                            <p>10.73$</p>
                        </div>
                    </div>
                </div>
                <div className="ourBest-flex-item">
                    <div className='ourBest-rectangle'>
                        <div className="ourBest-absolute-item">
                            <img src={img3} alt="" />
                            <p>Presto Coffee Beans 1 kg</p>
                            <p>15.99$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBest;