import './Amazing.css';
function Amazing(){
    return(
        <>
        <div className='amazing'>
            <div className='amazing-wrapper'>
                <div className='d-flex flex-column justify-content-center align-items-center amaze'>
                    <span className='fw-light text-light'>SIMPLY AMAZING PLACES</span>
                    <h2 className='fw-bold text-light'>Why choose us?</h2>
                </div>
                <div className='amaze-one d-flex align-items-center justify-content-center justify-content-around'>
                    <div className='fig'>
                    <div>
                        <img src="https://preview.colorlib.com/theme/travello/images/why_1.jpg.webp" className='img-fluid'></img>
                        <div className='related-img'>
                            <img src='https://preview.colorlib.com/theme/travello/images/why_1.svg'></img>
                        </div>
                    </div>
                        <div className='amaze-content'>
                            <h3 className='fw-bold'>Fast Services</h3>
                            <p className='fw-light'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                        </div>
                    </div>
                    <div className='fig '>
                    <div>
                        <img src="https://preview.colorlib.com/theme/travello/images/why_2.jpg.webp" className='img-fluid'></img>
                        <div className='related-img'>
                            <img src='https://preview.colorlib.com/theme/travello/images/why_2.svg'></img>
                        </div>
                    </div>
                        <div className='amaze-content'>
                            <h3 className='fw-bold'>Great Team</h3>
                            <p className='fw-light'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                        </div>
                    </div>
                    <div className='fig'>
                    <div>
                        <img src="https://preview.colorlib.com/theme/travello/images/why_3.jpg.webp" className='img-fluid'></img>
                        <div className='related-img'>
                            <img src='https://preview.colorlib.com/theme/travello/images/why_3.svg'></img>
                        </div>
                    </div>    
                        <div className='amaze-content'>
                            <h3 className='fw-bold'>Best Deals</h3>
                            <p className='fw-light'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Amazing;