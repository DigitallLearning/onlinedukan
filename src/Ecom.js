import { useState } from "react"
import { useEffect } from "react"
import Table from 'react-bootstrap/Table';
function Ecom()
{
    const [arr,setData]=useState([])
    useEffect(()=>{
        getData()
        //   fetch("https://fakestoreapi.com/products").then((resp)=>{
        //   resp.json().then((data)=>{
        //    setData(data)
        //   })
        //   })
    },[])
    async function getData()
    {
     var resp= await fetch("https://fakestoreapi.com/products")
     var data=await  resp.json()
     setData(data)
    }
     return(
        <div>
          <Table striped bordered hover variant="dark" >
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Image</td>
                    <td>Rating</td>
                </tr>
                {
                    arr.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price*80} Rs</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td><img src={item.image} width="100px" height="100px"></img></td>
                        <td>{item.rating.rate}</td>
                    </tr>)
                }
            </tbody>
           </Table>
        </div>
     )
}
export default Ecom
