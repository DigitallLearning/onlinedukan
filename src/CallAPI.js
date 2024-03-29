import { useState } from "react"
import { useEffect } from "react"
import Table from 'react-bootstrap/Table';
function CallAPI()
{
    const [apidata,setApiData]=useState([])
   useEffect(()=>{
         fetch("https://fakestoreapi.com/products").then((result)=>{
             result.json().then((data)=>{
               setApiData(data)
             })
         })
   },[]) 
   console.log(apidata)
   return(
    <div>
       <Table striped bordered hover variant="dark">
        <tbody>
            <tr>
                <td>Name</td>
                <td>Decription</td>
                <td>Price</td>
                <td>Category</td>
                <td>Image</td>
                <td>Rating</td>
                <td>Count</td>
            </tr>
            {
                apidata.map((item)=>
                <tr>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price*80} Rs</td>
                    <td>{item.category}</td>
                    <td><img src={item.image} style={{width:"100px",height:"100px"}}/></td>
                    <td>{item.rating.rate}</td>
                    <td>{item.rating.count}</td>
                </tr>
                )
            }
        </tbody>
       </Table>
    </div>
   )
}
export default CallAPI