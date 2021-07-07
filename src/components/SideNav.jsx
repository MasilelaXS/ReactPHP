import { FaTimes } from 'react-icons/fa'

const SideNav = ({navStatus, closeNav}) => {

    return (
        <div className={`sideNav ${navStatus && 'navOpen'}`}>
            
            <ul>
                <li><FaTimes style={{margin: '10px 0', textAlign: 'left', fontSize: '14pt'}} onClick={() => closeNav()} /></li>
                <li className='navItem'>Home</li>
                <li className='navItem'>About Us</li>
                <li className='navItem'>Contact Us</li>
            </ul>
        </div>
    )
}

export default SideNav
