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
  import  {useState,useEffect} from "react"
 import Footer from "./Footer"
function Wcloths()
{
    const [apidata,setApiData]=useState([])
    const [status,setStatus]=useState(true)
    const [pid,setId]=useState()
function hello(id)
{
  setStatus(false)
  setId(id)
}
   useEffect(()=>{
         fetch("https://fakestoreapi.com/products/category/women's%20clothing").then((result)=>{
             result.json().then((data)=>{
               setApiData(data)
             })
         })
   },[]) 
  
    return(
      <div>
        <br></br>
         {

          status?
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          {
             apidata.map((item)=>
             <MDBCol>
         <MDBCard>
           <center><MDBCardImage
             src={item.image}
             alt='...' 
             position='top' style={{width:"100px", height:"100px"}}
           /></center>
           <MDBCardBody>
          
             <MDBCardTitle>{item.title}</MDBCardTitle>
             <MDBCardText>{item.description.slice(0,200)}</MDBCardText>
             <MDBCardText style={{color:"red"}}>Rate : {item.price*80} RS</MDBCardText>
              <center>  <MDBBtn onClick={()=>hello(item.id)}>View Detail {item.id}</MDBBtn></center>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
             )
          }   
     </MDBRow>:

<MDBRow className='row-cols-1 row-cols-md-3 g-4'>
{
   apidata.map((item)=>
   item.id==pid?
   <MDBCol>
<MDBCard>
 <center><MDBCardImage
   src={item.image}
   alt='...' 
   position='top' style={{width:"100px", height:"100px"}}
 /></center>
 <MDBCardBody>

   <MDBCardTitle>{item.title}</MDBCardTitle>
   <MDBCardText>{item.description.slice(0,200)}</MDBCardText>
   <MDBCardText style={{color:"red"}}>Rate : {item.price*80} RS</MDBCardText>
   <center>  <MDBBtn >Buy Now</MDBBtn></center><br></br>
    <center>  <MDBBtn onClick={()=>setStatus(true)}>Back</MDBBtn></center>
 </MDBCardBody>
</MDBCard>
</MDBCol>:null
   )
}   
</MDBRow>
         }
          <Footer></Footer>
      </div>
    )
}
export default Wcloths