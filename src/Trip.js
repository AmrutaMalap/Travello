import './Trip.css';
function Trip(){
    return(
        <>
        <section className='trip'>
            <div className='d-flex container'>
                <div>
                <div className='d-flex w-50'>
                    <div className='tripimg'>
                        <img src="https://preview.colorlib.com/theme/travello/images/news_1.jpg.webp" className='img-fluid'></img>
                    </div>
                    <div className='trippara'>
                        <span className='fw-bold'>02 JUNE</span>
                        <h4 className='fw-bold'>Best tips to travel light.</h4>
                        <span className='fw-lighter'>Lifestyle and Travel</span>
                        <p className='fw-light'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</p>
                    </div>
                </div>
                <div className='d-flex w-50'>
                    <div className='tripimg'>
                        <img src="https://preview.colorlib.com/theme/travello/images/news_2.jpg.webp" className='img-fluid'></img>
                    </div>
                    <div className='trippara'>
                        <span className='fw-bold'>01 JUNE</span>
                        <h4 className='fw-bold'>Best tips to travel light.</h4>
                        <span className='fw-lighter'>Lifestyle and Travel</span>
                        <p className='fw-light'>Tempor massa et laoreet malesuada. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                    </div>
                </div>
                <div className='d-flex w-50'>
                    <div className='tripimg'>
                        <img src="https://preview.colorlib.com/theme/travello/images/news_3.jpg.webp" className='img-fluid'></img>
                    </div>
                    <div className='trippara'>
                        <span className='fw-bold'>29 MAY</span>
                        <h4 className='fw-bold'>Best tips to travel light.</h4>
                        <span className='fw-lighter'>Lifestyle and Travel</span>
                        <p className='fw-light'>Vivamus massa.Tempor massa et laoreet malesuada. Aliquam nulla nisl, accumsan sit amet mattis.</p>
                    </div>
                </div>
                </div>
                <div className='discountone'>
                        <div className='discount-wrapper'>
                            <div className='mainget d-flex flex-column align-items-center justify-content-end'>
                                <span className='get'>Get a 20% Discount</span>
                                <span className='subget'>Buy Your Vacation Online Now</span>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        </>
    );
}

export default Trip;