import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Upload from '../components/Upload';
import { Link } from 'react-router-dom';
import Videos from '../components/Videos';
import Categories from '../components/Categories';




function Home() {

  //state for state lifting
  const [addUpdate, setAddUpdate] = useState("")

  return (
    <div id='n3'>
      <Row className='mb-5 p-5'>
        <h1 style={{ color: 'black', fontSize: '40px', textAlign: 'center' }}>Get More Videos. <br /> Start Uploading it Now!</h1>
        <Col lg={5} md={12} sm={12} xs={12} className='mt-5'>
          <Card className='mt-4' style={{ width: '18rem', border: 'none', textAlign: 'center' }}>
            <b style={{ fontSize: '18px' }}>
              We understand the power of visual storytelling and the impact it can have on people's lives.
              VideoStash is designed to empower content creators and entertain, educate, and inspire audiences worldwide.
              Join us in this exciting journey of sharing and discovering the best video content the internet has to offer.
            </b>
          </Card>
        </Col>


        <Col lg={3} md={12} sm={12} xs={12} id='s1' className='mt-5'>
          <Upload updateData={setAddUpdate}></Upload>
        </Col>

        <Col lg={4} md={12} sm={12} xs={12} id='s2' className='mt-5'>
          <Card id='d1' style={{ width: '18rem' }}>
            <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/fRnCJN8s/Dailygifchallenge-Eyes.gif" />
            <Card.Body>
              <Card.Title style={{ color: 'darkorchid', fontSize: '40px', textAlign: 'center' }}>
                <Link to={'/history'}>
                  <Button style={{ border: 'black solid 2px', backgroundColor: '#d580e8', color: 'black' }}
                    className='p-3 btn btn'>Watch History</Button>
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row className=' mt-4 mb-5 p-2 bg-light'>

        <Col lg={9}>
          <Videos data={addUpdate}></Videos>
        </Col>

        <Col lg={3}>
          <Categories></Categories>
        </Col>

      </Row>

    </div>
  )
}

export default Home