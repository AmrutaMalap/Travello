import './Footer.css';
function Footer(){
    return(
           <>
             <footer className="footer">
                <div className='fdiv'>
                    <h2 className='text-light fw-bold d-flex justify-content-center'>Subscribe to our newsletter to get the latest trends & news</h2>
                    <p className='text-light fw-bold d-flex justify-content-center'>Join our database NOW!</p>
                    <div className='d-flex justify-content-center justify-content-between footer_one'>
                        <input className='footerinput' type="rext" placeholder="Name"/>
                        <input className='footerinput' type="rext" placeholder="Your E-mail"/>
                        <button className='footerbtn' type="submit">SUBSCRIBE</button>
                    </div>
                    <div className='figcap d-flex'>
                    <figure  className='figure'>
                        <div className='footer_icon'>
                        <img src="https://preview.colorlib.com/theme/travello/images/sign.svg" className='imgone'></img>
                        </div>
                        
                        <figcaption>
                            <h5 className='text-light fw-bold'>GIVE US A CALL</h5>
                            <p className='text-light '>Office Landline: +44 5567 32 664 567</p>
                            <p className='text-light '>Mobile: +44 5567 89 3322 332</p>
                        </figcaption>
                    </figure>
                    <figure  className='figure' >
                        <div className='footer_icon'>
                        <img src="https://preview.colorlib.com/theme/travello/images/trekking.svg" className='imgone'></img>
                        </div>
                        
                        <figcaption>
                            <h5 className='text-light fw-bold'>COME & DROP BY</h5>
                            <p className='text-light'>
                            4124 Barnes Street, Sanford, FL 32771
                            </p>
                            
                        </figcaption>
                    </figure>
                    <figure  className='figure'>
                        <div className='footer_icon'>
                        <img src="https://preview.colorlib.com/theme/travello/images/around.svg" className='imgone'></img>
                        </div>
                        
                        <figcaption>
                            <h5 className='text-light fw-bold'>SEND US A MESSAGE</h5>
                            <p className='text-light '>youremail@gmail.com</p>
                            <p className='text-light '>Office@yourbusinessname.com</p>
                        </figcaption>
                    </figure>

                    </div>
                    
                </div>
             </footer>
           </>
    );
}

export default Footer;