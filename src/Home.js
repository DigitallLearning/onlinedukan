import { useEffect, useState } from "react"
import React from 'react';
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
import Footer from "./Footer";
function Home()
{
    const [apidata,setData]=useState([])
    useEffect(()=>{
         fetch("https://fakestoreapi.com/products").then((result)=>{
            result.json().then((data)=>{
               setData(data)
            })
         })
    },[])
   return(
    <div>
        <br></br>
       <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
       {
          apidata.map((item)=>
          <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
            src={item.image}
            alt='...'
            style={{width:"100px",height:"100px"}}
            position='top'
          /></center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.price*80} Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>{item.category}</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.rating.rate}</MDBCardTitle>
            <MDBCardTitle style={{color:"yellow"}}>{item.rating.count}</MDBCardTitle>
            <MDBCardText> {item.description.slice(0,100)}</MDBCardText>
            <MDBBtn>View Details</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
          )
       }
     
     
     
    </MDBRow>
    <br></br>
    <Footer></Footer>
    </div>
   )
}
export default Home