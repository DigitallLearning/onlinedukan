import { useState } from "react"
import { useEffect } from "react"

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Card()
{
    const [arr,setData]=useState([])
    useEffect(()=>{
          fetch("https://fakestoreapi.com/products").then((resp)=>{
          resp.json().then((data)=>{
           setData(data)
          })
          })
    },[])
     return(
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
            arr.map((item)=>
            <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={item.image} width="70px" height="150px"
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.price*80} Rs</MDBCardTitle>
            <MDBCardTitle>{item.category}</MDBCardTitle>
            <MDBCardText>{item.description.slice(0, 100)}</MDBCardText>
            <MDBCardTitle>Rating : {item.rating.rate}</MDBCardTitle>
            <MDBBtn>View Details</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
            )
        }
      
      
      
    </MDBRow>
     )
}
export default Card
