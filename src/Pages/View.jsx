import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addtoWishlist } from '../Redux/wishlist';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../Redux/cartSlice';
import Header from '../Components/Header';



function View() {
  const {id} = useParams()
  console.log(id);
  const wishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  const [product,setProduct] = useState({})
  useEffect(()=>{
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts?.find(item=>item.id==id))
  },[])
  console.log(product);

  const handleWishlist=(product)=>{
    const existingProduct=wishlist?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("This product is already added to the wishlist")
    }
    else{
      dispatch(addtoWishlist(product))
    }
  }
  return (
   <>
   <Header></Header>
      <div  className='w-100' style={{paddingTop:'100px'}}>
       <div className='container mt-3 mb-5'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <img  height={'300px'} className='img-fluid' src={product?.thumbnail} alt="" />
          </div>
          <div className='col-lg-2'></div>
          <div className='col-lg-6'>
            <span>PID:{product?.id}</span>
            <h1>{product?.title}</h1>
            <h5 className='fw-bold text-danger'>${product?.price}</h5>
            <p className='fw-bold text-primary'><span className='fw-bold text-primary '>Description</span>: {product?.description
  }</p>
  <div className='d-flex justify-content-between mt-5'>
    <button onClick={()=>handleWishlist(product)}  style={{borderRadius:'100px'}} className='btn btn-outline-primary'> <i class="fa-solid fa-heart text-danger"></i>Add to Wish List</button>
    <button onClick={()=>dispatch(addtoCart(product))}  style={{borderRadius:'100px'}} className='btn btn-outline-primary '> <i className='fa-solid fa-cart-plus text-warning'></i>Add to Cart</button>
  
  </div>
          </div>
        </div>
       </div>
       
      </div>
   </>
  )
}

export default View