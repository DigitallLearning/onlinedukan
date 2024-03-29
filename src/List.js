import Table from 'react-bootstrap/Table';
function List()
{
    var arr=[{rollno:101,name:"Ram",marks:56},
             {rollno:102,name:"Syam",marks:58},
             {rollno:103,name:"Mohan",marks:62},
             {rollno:104,name:"Sohan",marks:65}]
    
  return(
    <div>
        <center><h1>Student Data</h1>
        <Table striped bordered hover variant="dark" style={{width:"400px"}}>
        <tbody >
            <tr>
                <td>Key</td>
                <td>Roll No</td>
                <td>name</td>
                <td>Marks</td>
            </tr>
            {
                arr.map((item,i)=>
                item.marks>=60?
                <tr key={i}>
                     <td >{i}</td>
                    <td >{item.rollno}</td>
                    <td >{item.name}</td>
                    <td >{item.marks}</td>
                </tr>:null
                )
            }
        </tbody>
       </Table>
       </center>
    </div>
  )
}
export default List