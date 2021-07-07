import Bg from './img/bg.png';
import './css/Welcome.css';
import { FaCheck, FaBars } from 'react-icons/fa';

const Welcome = ({openNav, dataHandler}) => {
    return (
        <div className="Container-fluid">
            <div className="Navbar">
                <h5>Mr. Tailor</h5>
                <FaBars className="NavIcon" onClick={() => openNav()} />
            </div>
            <div className="Container">
                <img src={Bg} alt="Banner" />
                <h4>Mr. Tailor</h4>
                <p>Are you far from us and need us to customly tailor something for you? Worry not. The solution is inally here. With this app we can get your measurements digitally and by the time you get a chance to visit our store we will be done with your clothing. Let's Shw you how it works. </p>
                <button className="btn" onClick={() => dataHandler}>Let's go! <FaCheck /></button>
            </div>
        </div>
    );
}

export default Welcome;