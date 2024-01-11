import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { removefromWishlist } from '../Redux/wishlist';
import { addtoCart } from '../Redux/cartSlice';
import Header from '../Components/Header';
  
function Wishlist() {
  const wishlist = useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  const handleRemoveWishList=(product)=>{
    dispatch(removefromWishlist(product?.id))
    dispatch(addtoCart(product))
  }
  return (
   <>
   <Header></Header>
      <div style={{marginTop:'100px'}}>
       <div className='container'>
          <Row>
            {wishlist.length>0?wishlist?.map((product,index)=>(
            <Col key={index} style={{marginBottom:"79px"}}>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>
          {product?.description}
          </Card.Text>
          <div className='justify-content-between'>
            <button className='btn btn-link' onClick={()=>handleRemoveWishList(product)}  variant="primary">Add to Cart</button>
            <button className='btn btn-link' onClick={()=>dispatch(removefromWishlist(product?.id))} variant='danger'>Remove</button>
          </div>
        </Card.Body>
      </Card>
            </Col>)):
          <div className='d-flex flex-column  align-items-center mb-4'>
            <img className='img-fluid' src="https://i.postimg.cc/d36TrQv4/empty-wishlist.png" alt="" />
          </div>
              
            }
          </Row>
       </div>
      </div>
   </>
  )
}

export default Wishlist