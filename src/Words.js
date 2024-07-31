import './Words.css';
function Words(){
    return(
        <>
        <div className='about container'>
            <div className='about-wrpper row'>
                <div className='d-flex flex-column justify-content-center align-items-center '>
                    <span className='fw-light'>SIMPLY AMAZING PLACES</span>
                    <h2 className='fw-bold'>A few words about us</h2>
                </div>
                <div className='d-flex about-one'>
                <div className='aboutimg'>
                    <p className='fw-bold abpara-one'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='fw-light abpara'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu laoreet ante, sollicitudin volutpat quam. Vestibulum posuere malesuada ultrices. In pulvinar rhoncus lacus at aliquet. Nunc vitae lacus varius, auctor nisi sit amet, consectetur mauris. Curabitur sodales semper est, vel faucibus urna laoreet vel. Ut justo diam, sodales non pulvinar at, vulputate quis neque. Etiam aliquam purus vel ultricies consequat.</p>
                    <button className='aboutbtn text-light'>Read More</button>
                </div>
                <div className='aboutimg'>
                    <img src="https://preview.colorlib.com/theme/travello/images/about_1.jpg.webp"></img>
                </div>
                </div>

                <div className='container about-two'>
                    <div>
                    <div className='d-flex'>
                    <div>
                        <div className='word_img'>
                        <img src='https://preview.colorlib.com/theme/travello/images/mountain.svg' className='img-fluid'></img>
                        </div>
                        
                        <h2>17</h2>
                        <span>Online Courses</span>
                    </div>
                    <div>
                        <div className='word_img'>
                        <img src='https://preview.colorlib.com/theme/travello/images/island.svg' className='img-fluid'></img>
                        </div>
                        
                        <h2>213</h2>
                        <span>Students</span>
                    </div>
                    <div>
                        <div className='word_img'>
                        <img src='https://preview.colorlib.com/theme/travello/images/camera.svg' className='img-fluid'></img>
                        </div>
                        
                        <h2>11923</h2>
                        <span>Teachers</span>
                    </div>
                    <div>
                        <div className='word_img'>
                        <img src='https://preview.colorlib.com/theme/travello/images/boat.svg' className='img-fluid'></img>
                        </div>
                        
                        <h2>15</h2>
                        <span>Countries</span>
                    </div>
                </div>
                    </div>
                
                </div>
                
                
            </div>
        </div>
        </>
    );
}
export default Words;