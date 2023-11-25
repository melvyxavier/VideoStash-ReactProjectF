import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Navbar style={{ backgroundColor: 'black' }}>
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://i.postimg.cc/3NVBqmNX/Video-icon.jpg"
                width="80"
                height="80"
                className="d-inline-block align-top"
              />{' '}
              <b className='fs-1 me-4' style={{ color: '#d580e8', fontFamily: 'Ysabeau Office, sans-serif', fontWeight: '300' }}>
                V i d e o S t a s h</b>
            </Navbar.Brand>

          </Container>
        </Navbar>
      </Link>
    </div>
  )
}

export default Header