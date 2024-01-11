import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, navigateNextPage, navigatePrevPage } from '../Redux/productSlice'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

function Home() {
  const dispatch = useDispatch()
  const {allProducts,loading,error,productsPerPage,currentPage} = useSelector(state=>state.productReducer)
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const visibleProductsCard = allProducts.slice(firstProductIndex,lastProductIndex)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const handlePrevPage=()=>{
    if(currentPage!=1){
      dispatch(navigatePrevPage())
    }
  }
  const handleNextPage=()=>{
    if(currentPage!=totalPages){
      dispatch(navigateNextPage())
    }
  }
  return (
    <>
    <Header insideHome></Header>
      <div>
        <br />{
        loading?<div className='mt-5 text-center'>  <Spinner className='me-2' animation="border" variant="info" />loading...</div>:
        <Row className='m-5'>
          {
            allProducts?.length>0?visibleProductsCard.map((i,index)=>(
  <Col key={index} className='mb-5' lg={4} md={6} sm={12}><Card style={{ width: '70%' }}>
          <Card.Img variant="top" height={'200px'} src={i?.thumbnail} />
          <Card.Body>
            <Card.Title>{i.title.slice(0,20)}</Card.Title>
            <Link style={{textDecoration:'none', color:'black'}} to={`/view/${i?.id}`} variant="danger">View More</Link>
          </Card.Body>
        </Card></Col>
            )): <div className='fw-bolder text-danger text-center'>Product Not Found</div>
         }
        </Row>
        }
        <div className="d-flex justify-content-center mt-5">
          <span onClick={handlePrevPage} style={{cursor:'pointer me-2'}}><i class="fa-solid fa-backward"></i></span>
          <span className='fw-bolder'>{currentPage} of {totalPages}</span>
          <span onClick={handleNextPage} style={{cursor:'pointer  ms-2'}}><i class="fa-solid fa-forward"></i></span>
        </div>
        </div>
    </>
  )
}

export default Home