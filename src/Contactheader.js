import './Contactheader.css';
function Contactheader(){
    return(
        <>
        <header className="contact">
        <div className="newsheader-wrapper d-flex justify-content-center flex-column align-items-center text-light">
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
                
        </header>
        </>
    );
}

export default  Contactheader;