import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {


  return (
    <div id='m1'>

      <Container>
        <Row id='d7' style={{ borderRadius: '90px' }} className='mt-5 p-2'>

          <Col lg={6} md={12} sm={12} xs={12}>

            <div className='p-3'>

              <h1 style={{ color: 'darkorchid' }} className='mt-5'>Video Uploader</h1>
              <p className='mt-4 mb-2 fs-5 text-dark'>
                Stream and host high-quality videos on our reliable, scalable platform
                for hundreds of thousands of viewers—for free. <br /> <b>Upload, Play and Share your videos directly from the browser.</b>
              </p>
              <Link to={'/home'}>
                <Button style={{ border: '2px double darkorchid', backgroundColor: 'black', borderRadius: '20px' }} className='mt-4 ms-5 btn btn p-3'>
                  Get Started
                </Button>
              </Link>

            </div>

          </Col>

          <Col lg={6} md={12} sm={12} xs={12} style={{ backgroundColor: 'black', borderRadius: '90px' }}>

            <img id='l2' style={{borderRadius: '90px' }}
            src="https://i.postimg.cc/ZRqxBzWK/Download-premium-vector-of-Play-button-social-media-icon-vector-by-Aew-about-music-play-button-vid.jpg" alt="" />

          </Col>

        </Row>

        <Row id='g1' className=' mb-5 p-5'>
          <h1 style={{ color: 'black', fontSize: '70px', textAlign: 'center' }}>Features</h1>
          <Col className='mt-5'>
            <Link to={'/home'} style={{ textDecoration: 'none' }}>
              <Card id='c1' style={{ width: '18rem' }}>
                <Card.Img style={{ height: '150px' }} variant="top" src="https://i.postimg.cc/65B4SSSc/For-Your-Processing.gif" />
                <Card.Body>
                  <Card.Title style={{ color: 'darkorchid', fontSize: '39px', textAlign: 'center' }}>Manage Videos</Card.Title>
                  <Card.Text className='text-light text-center'>
                    Easily upload, organize, and control your video content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>


          <Col className='mt-5'>
            <Link to={'/home'} style={{ textDecoration: 'none' }}>
              <Card id='c2' style={{ width: '18rem' }}>
                <Card.Img style={{ height: '150px' }} variant="top" src="https://i.postimg.cc/QCd2Rjr1/Angular-Geometry.gif" />
                <Card.Body>
                  <Card.Title style={{ color: 'darkorchid', fontSize: '40px', textAlign: 'center' }}>Categorise</Card.Title>
                  <Card.Text className='text-light text-center'>
                    Effortlessly group and sort videos into customizable categories.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col className='mt-5'>
            <Link to={'/history'} style={{ textDecoration: 'none' }}>
              <Card id='d1' style={{ width: '18rem' }}>
                <Card.Img style={{ height: '150px' }} variant="top" src="https://i.postimg.cc/PJMm8kL3/colorful-gifs.gif" />
                <Card.Body>
                  <Card.Title style={{ color: 'darkorchid', fontSize: '40px', textAlign: 'center' }}>Watch History</Card.Title>
                  <Card.Text className='text-light text-center'>
                    Keep track of your video-watching journey with watch history feature.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

        </Row>

        <Row> <h1 className='mb-4' style={{ color: 'black', fontSize: '60px', textAlign: 'center' }}>Managing content made easy</h1></Row>

        <Row id='w1' style={{ borderRadius: '5px', border: '3px solid black' }} className='mt-5 mb-5'>

          <Col style={{ backgroundColor: 'black' }}>

            <div className='p-3'>

              <h2 style={{ color: '#d580e8' }} className='mt-5 ps-5'>One home for all your videos</h2>
              <p className='ps-5 mt-4 mb-2 text-light'>
                Upload and relax, knowing your videos are supported by Vimeo’s high-quality, fast-loading,
                supremely reliable HTML5 video player at no cost.
              </p>

            </div>

          </Col>

          <Col>

            <img id='m7' style={{ height: '300px' }} src="https://i.postimg.cc/c4j7BqGk/video-uploader-step1-2x.png" alt="" />

          </Col>

        </Row>

        <Row id='w1' style={{ borderRadius: '5px', border: '3px solid black' }} className='mt-5 mb-5'>


          <Col>

            <img id='m7' style={{ height: '300px' }} src="https://i.postimg.cc/cLpkY2dR/video-uploader-step2-2x.png" alt="" />

          </Col>

          <Col style={{ backgroundColor: 'black' }}>

            <div className='p-3'>

              <h1 style={{ color: '#d580e8' }} className='mt-5 ps-5'>No ads, ever</h1>
              <p className='ps-5 mt-4 mb-2 text-light'>
                Your vibe will never be thrown off by an ad playing before, during, or after your video. Plus, your brand’s
                logo and colors will stick with your video wherever it’s embedded.
              </p>

            </div>

          </Col>

        </Row>

        <Row id='w1' style={{ borderRadius: '5px', border: '3px solid black', marginBottom: '130px' }} className='mt-5'>

          <Col style={{ backgroundColor: 'black' }}>

            <div className='p-3'>

              <h1 style={{ color: '#d580e8' }} className='mt-5 ps-5'>Video experience platform</h1>
              <p className='ps-5 mt-4 mb-2 text-light'>
                Everything you need to make, manage, and share brilliant videos.Quickly create, edit, and share content regardless of your budget or expertise.
              </p>

            </div>

          </Col>

          <Col>

            <img id='m7' style={{ height: '300px' }} src="https://i.postimg.cc/c4j7BqGk/video-uploader-step1-2x.png" alt="" />

          </Col>

        </Row>

      </Container>
    </div>
  )
}

export default Landing