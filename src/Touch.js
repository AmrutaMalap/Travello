import './Touch.css';
function Touch(){
    return(
        <>
        <section className="touch">
            <div className="touch-wrapper d-flex">
                <div className='touch-one touchtwo container'>
                    <h3>Get in touch with us</h3>
                    <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                    <div>Address</div>
                    <p>1481 Creekside Lane Avila Beach, CA 931</p>
                    <div>Phone</div>
                    <p>+53 345 7953 32453</p>
                    <div>EMail</div>
                    <p>yourmail@gmail.com</p>
                </div>
                <div className='touchtwo container' >
                    <input type="text" placeholder="Your Name"  className='cinput'></input>
                    <div className="d-flex justify-content-between indiv">
                        <input type="text" placeholder="Your Email" className='cinput'></input>
                        <input type="text" placeholder="Address" className='cinput'></input>
                    </div>
                    <textarea placeholder="Message" className='textarea cinput'></textarea>
                    <button className='contactbtn'>Send</button>
                </div>
                  
            </div>
        </section>
        </>
    );
}

export default Touch;