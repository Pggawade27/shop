import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import shoping from '../../assets/images/shoping.jpeg'
import electronics from '../../assets/images/electronics.jpg'
import fashion from '../../assets/images/fashion.jpg'
import grocery from '../../assets/images/grocery.jpg'
import '../../index.scss'
import { useNavigate } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import MainCarousel from './carousel/Carousel'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <MainCarousel style={{ width: "100%" }} />
      <Container>
        <Row>
          <div className='d-md-flex justify-content-center align-items-center mt-5 mb-5'>
            <Col md={6} xs={12} className='d-flex justify-content-center'>
              <div style={{ width: "inherit" }}>
                <p>Welcome to</p>
                <h2>APNA Store</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque quos soluta officiis. Ullam illo totam unde quis aspernatur? Ipsum molestiae nulla cum inventore exercitationem omnis voluptate alias odio consequatur!</p>
                <Button color='primary'>Shop Now</Button>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className='text-center'>
                <Image src={shoping} fluid />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
      <Row>
        <Col sm={12}>
          <div className='text-center mt-5 pt-4'>
            <h2>Top Picks for you</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <div className='d-md-flex mt-5' style={{ background: "#eeeeee" }}>
          <Col md={4} xs={12} className='d-flex justify-content-center py-5'>
            <div className='img-hover d-flex justify-content-center' onClick={() => navigate('/electronics')}>
              <Image src={electronics} fluid style={{ height: "300px", width: "300px" }} />
            </div>
          </Col>

          <Col md={4} xs={12} className='d-flex justify-content-center py-5'>
            <div className='img-hover d-flex justify-content-center'>
              <Image src={fashion} fluid style={{ height: "300px", width: "300px" }} />
            </div>
          </Col>

          <Col md={4} xs={12} className='d-flex justify-content-center py-5'>
            <div className='img-hover d-flex justify-content-center'>
              <Image src={grocery} fluid style={{ height: "300px", width: "300px" }} />
            </div>
          </Col>
        </div>
      </Row>

    </>
  )
}

export default Home