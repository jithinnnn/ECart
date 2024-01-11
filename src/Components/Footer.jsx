import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div style={{overflowX:'hidden',marginTop:'77px'}} className='bg-secondary w-100'>
      <br /><br /><Row>
        <Col lg={3} className='fw-bolder'><i className="fa-solid fa-truck-fast me-2 "></i> Design Cart <br />
        Designed and built with all the love in the world
        by the Luminar team
        </Col>
        <Col className='fw-bolder' lg={3}>Links <br />
        <a style={{textDecoration:'none', color:'black'}} href="">Home</a><br />
        <a style={{textDecoration:'none', color:'black'}}  href="">Cart</a><br />
        <a style={{textDecoration:'none', color:'black'}}  href="">Wishlist</a>
        </Col>
        <Col className='fw-bolder' lg={3}>Guides <br />
        <a style={{textDecoration:'none', color:'black'}} href="">React</a><br />
        <a style={{textDecoration:'none', color:'black'}}  href="">React Bootstrap</a><br />
        <a style={{textDecoration:'none', color:'black'}}  href="">Know More</a></Col>
        <Col lg={3}><h3>Contact Us</h3>
        <input className='form-control  w-75 me-auto' type="text" /></Col>
        </Row>
        </div>
  )
}

export default Footer