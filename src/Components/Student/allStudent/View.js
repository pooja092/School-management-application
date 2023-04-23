

import React,{useEffect,useState} from 'react'
// import { Container, Row, Col, Modal} from 'react-bootstrap'

import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Modal } from 'react-bootstrap';



// const View = ({

  // open,
  // setOpen,
  // sr,
  // firstname,
  // lastname,
  // doa,
  // cla,
  // dob,
  // age,
  // gender,
  // board,
  // sibling,
  // aadhar,
  // contact,
  // category,
  // father,
  // mother,
  // foccupation,
  // moccupation,
  // presentaddress,
  // permanentaddress,
  // city,
  // religion,
//   id,
 
 
// }) => {

   const View = ({ id }) =>{

  const [posts, setPosts] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/posts/${id}`);
      const posts = await response.json();
      setPosts(id);
    };

    fetchData();
  }, [id]);

  return (
    
   <>

<Modal show={open} onHide={() => setOpen(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Sr.no</td>
              <td>{posts.sr}</td>
            </tr>
            <tr>
              <td>First name</td>
              <td>{posts.firstname}</td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>{posts.lastname}</td>
            </tr>
            <tr>
              <td>Date of admission</td>
              <td>{posts.doa}</td>
            </tr>
            <tr>
              <td>Class</td>
              <td>{posts.cla}</td>
            </tr>
            <tr>
              <td>Date of birth</td>
              <td>{posts.dob}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{posts.age}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{posts.gender}</td>
            </tr>
            <tr>
              <td>Board</td>
              <td>{posts.board}</td>
            </tr>
            <tr>
              <td>Sibling</td>
              <td>{posts.sibling}</td>
            </tr>
            <tr>
              <td>Aadhar no</td>
              <td>{posts.aadhar}</td>
            </tr>
            <tr>
              <td>Contact no</td>
              <td>{posts.contact}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{posts.category}</td>
            </tr>
            <tr>
              <td>Father name</td>
              <td>{posts.father}</td>
            </tr>
            <tr>
              <td>Mother name</td>
              <td>{posts.mother}</td>
            </tr>
            <tr>
              <td>Father's Occupation</td>
              <td>{posts.foccupation}</td>
            </tr>
            <tr>
              <td>Mother's Occupation</td>
              <td>{posts.moccupation}</td>
            </tr>
            {/* <tr>
              <td>Present address</td>
              </tr> */}
</tbody>
</Table>
</Modal.Body>
</Modal>








    {/* <div
    // className="modal-dialog modal-fullscreen-sm-down"
      show={open}
      onHide={() => setOpen(false)}
     
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    > </div>
   
          <td>
              <h5> Sr.no</h5>
              <h5> First name</h5>
              <h5>Last name</h5>
              <h5> Date of admission</h5>
              <h5> Class</h5>
              <h5> Dow</h5>
              <h5> Gender</h5>
              <h5> Board</h5>
              <h5>Sibling</h5>
              <h5> Aadhar no</h5>
              <h5> Contact no</h5>
              <h5> Category</h5>
              <h5> Father name</h5>
              <h5> Mother name</h5>
              <h5> Father's Occupation</h5>
              <h5> Mother's Occupation</h5>
              <h5> Present address</h5>
              <h5> Permanent address</h5>
              <h5> City</h5>
              <h5> Religion</h5>

              </td>
  

     
         
         <td> <span>{sr}</span>
            <span>{firstname}</span>
            <span>{lastname}</span>
             <span>{doa}</span>
             <span>{cla}</span>
             <span>{dob}</span>
             <span>{age}</span>
             <span>{gender}</span>
             <span>{board}</span>
             <span>{sibling}</span>
             <span>{aadhar}</span>
             <span>{contact}</span>
             <span>{category}</span>
             <span>{father}</span>
             <span>{mother}</span>
             <span>{foccupation}</span>
             <span>{moccupation}</span>
             <span>{presentaddress}</span>
             <span>{permanentaddress}</span>
             <span>{city}</span>
             <span>{religion}</span>
        
             </td>   */}

 
   </>
  )
}

export default View
