import './Header.css';
function Header(){
    return(
        <>
        <header className='header container-fluid'>
            <div className='row header-wrapper'>
            <h1 className="display-1 fw-bolder d-flex justify-content-center align-items-center text-light">Let us take you away</h1>
        <div className='list'>
        <ul className='d-flex flex-column align-items-end justify-content-end'>
            <li>
                <a href='#'>offers</a>
                <span>01</span>
            </li>
            <li>
                <a href='#'>Testimonials</a>
                <span>02</span>
            </li>
            <li>
                <a href='#'>Latest</a>
                <span>03</span>
            </li>
        </ul>
        </div>
       
        <div className='header-trip d-flex justify-content-center flex-column align-items-center text-light'>
        <div className='para text-dark'>
        <p>Search for your trip</p>
        </div>
        
        <div className='d-flex justify-content-between home-search'>
            <input className='input' type="text" placeholder="City"/>
            <input className='input' type="text" placeholder="Departure"/>
            <input className='input' type="text" placeholder="Arival"/>
            <input className='input' type="text"placeholder="Budget"/>
            <button type="submit" className='btn subbtn'>Search</button>
        </div>
        </div>
        
        <div className='bg-img'>

        </div>
        </div>
        
        </header>
    
        
        </>
    );
}

export default Header;