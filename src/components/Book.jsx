import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import page04 from '../assets/images/page04/panel_4.png'
import page05 from '../assets/images/page05/panel_5.png'
import page06 from '../assets/images/page06/panel_6.png'
import btn_next from '../assets/icons/buttons/btn-next.png'
import btn_back from '../assets/icons/buttons/btn-back.png'

import nube_1 from '../assets/images/page04/nube_3.png'
import nube_2 from '../assets/images/page04/nube_2.png'
import nube_3 from '../assets/images/page04/nube_5.png'
import nube_4 from '../assets/images/page04/nube_4.png'

const Book = () => {

    const handlePrevious = () =>{
        document.getElementById('previous').click()
    }
    const handleNext = () =>{
        document.getElementById('next').click()
    }

    return (
        <Container>
            <div className="book-page">

                <button className="btn-control" onClick={handlePrevious}><img src={btn_back} with="60" height="60" alt="" /></button>

                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item first-page active">
                            <img src={page04} className="d-block w-100" alt="..."/>
                            <img src={nube_2} className="cloud" width="125"  alt="" />
                            <img src={nube_3} className="cloud" width="125"  alt="" />
                            <img src={nube_1} className="cloud" width="125"  alt="" />
                            
                        </div>
                        <div className="carousel-item">
                            <img src={page05} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={page06} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" id="previous" style={{ display: 'none' }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden" >Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" id="next" style={{ display: 'none' }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden" >Next</span>
                    </button>
                </div>

                <button className="btn-control" onClick={handleNext}><img src={btn_next} width="60" height="60" alt="" /></button>

            </div>
        </Container>
    )
}

export default Book
