import './Simple.css';
function Simple(){
    return(
        <>
        <div className="simple container">
            <div className="simple-wrapper row">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <span className="fw-light">SIMPLY AMAZING PLACES</span>
                    <h2 className="fw-bold">Meet The Team</h2>
                </div>
                <div className="d-flex simple-one">
                    <div>
                        <div className='simple-img'>
                        <img src="https://preview.colorlib.com/theme/travello/images/team_1.jpg.webp"></img>
                        </div>
                        <div>
                        <h4 className="fw-bold">Margaret Smith</h4>
                        <p className="fw-light text-align-center">Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                        </div>
                        
                    </div>
                    <div>
                        <div className='simple-img'>
                        <img src="https://preview.colorlib.com/theme/travello/images/team_2.jpg.webp"></img>
                        </div>
                        <div>
                        <h4 className="fw-bold">James Williams</h4>
                        <p className="fw-light text-align-center">Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                        </div>
                        
                    </div>
                    <div>
                        <div className='simple-img'>
                        <img src="https://preview.colorlib.com/theme/travello/images/team_3.jpg.webp"></img>
                        </div>
                        <div>
                        <h4 className="fw-bold">Miachel James</h4>
                        <p className="fw-light text-align-center">Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                        </div>
                        
                    </div>
                    <div>
                        <div className='simple-img'>
                        <img src="https://preview.colorlib.com/theme/travello/images/team_4.jpg.webp"></img>
                        </div>
                        <div>
                        <h4 className="fw-bold">Noah Smith</h4>
                        <p className="fw-light text-align-center">Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Simple;