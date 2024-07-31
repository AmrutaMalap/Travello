import './Navigation.css';
import { Link } from "react-router-dom";
function Navigation(){
    return(
        <>
        <nav className='navigation d-flex justify-content-center align-items-center'>
            <div>
                <h4><a href='#' className='text-decoration-none text-light fw-bold'>Travello</a></h4>
            </div>
            <ul className="navlist d-flex justify-content-between w-50" >
                <li><Link className='list-style-none text-decoration-none fw-bold text-light' to='/'>Home</Link></li>
                <li><Link className='list-style-none text-decoration-none fw-bold text-light' to='/about'>About us</Link></li>
                <li><Link className='list-style-none text-decoration-none fw-bold text-light' to='/'>Services</Link></li>
                <li><Link className='list-style-none text-decoration-none fw-bold text-light' to='/news'>News</Link></li>
                <li><Link className='list-style-none text-decoration-none fw-bold text-light' to='/contact'>Contact</Link></li>
            </ul>
            <div className='calldiv'>
            <p><a href='#' className='call text-decoration-none fw-bold text-light'>Call us: 00-56 445 678 33</a></p>
            </div>
        </nav>
        </>
    )
}

export default Navigation;


