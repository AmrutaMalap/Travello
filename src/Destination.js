import './Destination.css';
function Destination(){
    return(
        <>
        <section>
            <div>
                <div className='d-flex flex-column align-items-center'>
                    <p>SIMPLY AMAZING PLACES</p>
                    <h2 className='popular fw-bold'>Popular Destinations</h2>
                </div>
                <div className="d-flex flex-wrap justify-content-around">
                    <figure className='divone'>
                        <img src="https://preview.colorlib.com/theme/travello/images/destination_1.jpg.webp" className='img-fluid'></img>
                        <figcaption>
                            <h3>Bali</h3>
                            <p>Nulla pretium tincidunt felis, nec.</p>
                            <span className='fw-bold'>From $679</span>
                        </figcaption>
                    </figure>
                    <figure className='divone'>
                        <img src="https://preview.colorlib.com/theme/travello/images/destination_2.jpg.webp" className='img-fluid'></img>
                        <figcaption>
                            <h3>Indonesia</h3>
                            <p>Nulla pretium tincidunt felis, nec.</p>
                            <span className='fw-bold'>From $679</span>
                        </figcaption>
                    </figure>
                    <figure  className='divone'>
                        <img src="https://preview.colorlib.com/theme/travello/images/destination_3.jpg.webp" className='img-fluid'></img>
                        <figcaption>
                            <h3>San Fransisco</h3>
                            <p>Nulla pretium tincidunt felis, nec.</p>
                            <span className='fw-bold'>From $679</span>
                        </figcaption>
                    </figure>
                    <figure  className='divone'>
                        <img src="https://preview.colorlib.com/theme/travello/images/destination_4.jpg.webp" className='img-fluid'></img>
                        <figcaption>
                            <h3>Paris</h3>
                            <p>Nulla pretium tincidunt felis, nec.</p>
                            <span className='fw-bold'>From $679</span>
                        </figcaption>
                    </figure>
                    <figure  className='divone'>
                        <img src="https://preview.colorlib.com/theme/travello/images/destination_5.jpg.webp" className='img-fluid' ></img>
                        <figcaption>
                            <h3>Phi Phi Iceland</h3>
                            <p>Nulla pretium tincidunt felis, nec.</p>
                            <span className='fw-bold'>From $679</span>
                        </figcaption>
                    </figure>
                    <figure  className='divone'>
                        <img src="https://preview.colorlib.com/theme/travello/images/destination_6.jpg.webp" className='img-fluid'></img>
                        <figcaption>
                            <h3>Mykonos</h3>
                            <p>Nulla pretium tincidunt felis, nec.</p>
                            <span className='fw-bold'>From $679</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
        </>
    );
}

export default Destination;