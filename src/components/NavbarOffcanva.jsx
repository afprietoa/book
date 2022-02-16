import React, { useState } from 'react'
import btn_navbar from '../assets/icons/buttons/btn-navbar.png'
import { Container, Offcanvas } from 'react-bootstrap'
import navbar from '../assets/images/navbar/bg_es.png'


const NavbarOffcanva = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div>
            <Container>

                <button className="btn-control" onClick={handleShow}><img src={btn_navbar} with="60" height="60" alt="" /></button>

            </Container>

            <Offcanvas show={show} onHide={handleClose} placement='top'>

                <Offcanvas.Body>
                    <img src={navbar} alt="" width='100%' height='100%'/>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default NavbarOffcanva
