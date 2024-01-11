import React, { useEffect, useState } from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchByProduct } from '../Redux/productSlice'


function Header({insideHome}) {
  const wishlist=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  const [wishlistCount, setwishlistCount] = useState(0)
  const dispatch = useDispatch()

  useEffect(()=>{
    setwishlistCount(wishlist?.length)
  },[wishlist])
  return (
    <div>    <Navbar style={{zIndex:2}} expand="lg" className="bg-secondary w-100 top-0 position-fixed fw-bolder">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand> <i className="fa-solid fa-truck-fast me-2"></i> Daily-Cart</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {insideHome&&<Nav.Link> <input onChange={(e)=>dispatch(searchByProduct(e.target.value.toLowerCase()))} style={{width:'400px'}} type="text" className='rounded fw-bolder'placeholder='Search Product Here' /></Nav.Link>}
          <Nav.Link><Link to={'/wishlist'} style={{textDecoration:'none',color:'black'}}>Wishlist <Badge className='bg-dark'>{wishlistCount}</Badge></Link></Nav.Link>
          <Nav.Link><Link to={'/cart'} style={{textDecoration:'none',color:'black'}}>Cart <Badge className='bg-dark'>{cart?.length}</Badge></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
  )
}

export default Header