import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div id='f1' className='p-3 text-light'>
            <Row>

                <Col>
                    <h3 id='h3'>GET TO KNOW US</h3>
                    <p className=' mt-3 pb-5 w-75'>
                        Easily upload your videos and share them with a global audience. Whether it's an
                        entertaining clip, an educational tutorial, or a personal vlog, your content has a place
                        here.
                    </p>
                </Col>

                <Col>

                    <h3 id='h3'>CONNECT WITH US</h3>
                    <div>
                        <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook me-1 ms-1"></i>Facebook</Link> <br />
                        <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter me-1 ms-1"></i>Twitter</Link> <br />
                        <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram me-1 ms-1"></i>Instagram</Link>
                    </div>

                </Col>

                <Col>
                    <h3 id='h3'>CONNECT US</h3>
                    <p>
                        Have questions, suggestions, or feedback? Feel free to contact us anytime.
                        We value your input and look forward to hearing from you. <br /> <br />
                        <h4><i class="fa-solid fa-envelope me-2"></i>info@VideoStash.com</h4>
                    </p>
                </Col>

            </Row>

        </div>

    )
}

export default Footer