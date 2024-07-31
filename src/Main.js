import  './Main.css';
function Main(){
    return(
        <>
        <section className='top'>
            <div className='d-flex justify-content-center'>
            <div className="d-flex div">
                <div className='beach'>
                <img src="https://preview.colorlib.com/theme/travello/images/beach.svg" className="img"></img>
                </div>
                <div className='beach_one'>
                    <h6>Top Destinations</h6>
                    <p>Nulla pretium tincidunt felis, nec.</p>
                </div>
            </div>
            <div className="d-flex div">
                <div className='beach'>
                <img src="https://preview.colorlib.com/theme/travello/images/wallet.svg" className="img"></img>
                </div>
                
                 <div className='beach_one'>
                    <h6>The Best Prices</h6>
                    <p>Sollicitudin mauris lobortis in.</p>
                </div>
            </div>
            <div className="d-flex div">
                <div className='beach'>
                <img src="https://preview.colorlib.com/theme/travello/images/suitcase.svg" className="img"></img>
                </div>
                
                 <div className='beach_one'>
                    <h6>Amazing Services</h6>
                    <p>Nulla pretium tincidunt felis, nec.</p>
                </div>
            </div>
            </div>
            <div className='dash'></div>
           
        </section>
        </>
    );
}

export default Main;