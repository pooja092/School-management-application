// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { Container, Row, Col } from "react-bootstrap";

// function Example({
//   open,
//   setOpen,
//   sr,
//   firstname,
//   lastname,
//   doa,
//   cla,
//   dob,
//   age,
//   gender,
//   board,
//   sibling,
//   aadhar,
//   contact,
//   category,
//   father,
//   mother,
//   foccupation,
//   moccupation,
//   presentaddress,
//   permanentaddress,
//   city,
//   religion,
// }) {
//   const values = ['xxl-down'];
//   const [fullscreen, setFullscreen] = useState(true);
//   const [show, setShow] = useState(false);

//   function handleShow(breakpoint) {
//     setFullscreen(breakpoint);
//     setShow(true);
//   }

//   return (
//     <>
//       {values.map((v, idx) => (
//         <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
//           Full screen
//           {typeof v === 'string' && `below ${v.split('-')[0]}`}
//         </Button>
//       ))}
//       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Modal body content
//         <Container >
//        <Row>
//          <Col sm={4}>
//               <h5> Sr.no</h5>
//               <h5> First name</h5>
//               <h5>Last name</h5>
//               <h5> Date of admission</h5>
//               <h5> Class</h5>
//               <h5> Dow</h5>
//               <h5> Gender</h5>
//               <h5> Board</h5>
//               <h5>Sibling</h5>
//               <h5> Aadhar no</h5>
//               <h5> Contact no</h5>
//               <h5> Category</h5>
//               <h5> Father name</h5>
//               <h5> Mother name</h5>
//               <h5> Father's Occupation</h5>
//               <h5> Mother's Occupation</h5>
//               <h5> Present address</h5>
//               <h5> Permanent address</h5>
//               <h5> City</h5>
//               <h5> Religion</h5>
        


//         </Col>



//            <Col sm={4} >
//            <span>{sr}</span>
//            <span>{firstname}</span>
//            <span>{lastname}</span>
//           <span>{doa}</span>           
//           <span>{cla}</span>
//           <span>{dob}</span>
//           <span>{age}</span>
//           <span>{gender}</span>
//           <span>{board}</span>
//           <span>{sibling}</span>
//           <span>{aadhar}</span>
//           <span>{contact}</span>
//           <span>{category}</span>
//           <span>{father}</span>
//           <span>{mother}</span>
//           <span>{foccupation}</span>
//           <span>{moccupation}</span>
//           <span>{presentaddress}</span>
//           <span>{permanentaddress}</span>
//           <span>{city}</span>
//           <span>{religion}</span>
           
//                      </Col>



//             <Col sm={4}>        
//                 <div className="modal-img">
//            {/* <img width={"100%"} src={image}  /> */}
//          </div>
//             </Col>
//        </Row>
//    </Container>


//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default Example;




















// // import React, { useState } from 'react';
// // import { Container,Row,Col, Modal } from 'react-bootstrap';
// // import Button from 'react-bootstrap/Button';


// // function Example ({

// //     sr,
// //     firstname,
// //     lastname,
// //     doa,
// //     cla,
// //     dob,
// //     age,
// //     gender,
// //     board,
// //     sibling,
// //     aadhar,
// //     contact,
// //     category,
// //     father,
// //     mother,
// //     foccupation,
// //     moccupation,
// //     presentaddress,
// //     permanentaddress,
// //     city,
// //     religion,
// //     id,

// // }) {
// //   const values = [true, ];
// //   const [fullscreen, setFullscreen] = useState(true);
// //   const [show, setShow] = useState(false);

// //   function handleShow(breakpoint) {
// //     setFullscreen(breakpoint);
// //     setShow(true);
// //   }

// //   return (
// //     <>
// //       {values.map((v, idx) => (
// //         <button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
// //           Full screen
// //           {typeof v === 'string' && `below ${v.split('-')[0]}`}
// //         </button>
// //       ))}
// //       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Student Detail</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //         <Container >
// //        <Row>
// //          <Col sm={4}>
// //            <h5>1. Sr.no</h5>
// //            <h5>2. First name</h5>
// //            <h5>3. Last name</h5>
// //            <h5>4. Date of admission</h5>
// //            <h5>5. Class</h5>
// //            <h5>6. Dow</h5>
// //            <h5>7. Gender</h5>
// //             <h5>8. Board</h5>
// //            <h5>9. Sibling</h5>
// //             <h5>10. Aadhar no</h5>
// //             <h5>11. Contact no</h5>
// //             <h5>12. Category</h5>
// //             <h5>13. Father name</h5>
// //            <h5>14. Mother name</h5>
// //              <h5>15. Father's Occupation</h5>
// //           <h5>16. Mother's Occupation</h5>
// //              <h5>17. Present address</h5>
// //            <h5>18. Permanent address</h5>
// //           <h5>19. City</h5>
// //           <h5>20. Religion</h5>
        


// //         </Col>



// //            <Col sm={4} >
// //            <span>{sr}</span>
// //            <span>{firstname}</span>
// //            <span>{lastname}</span>
// //             <span>{doa}</span>           
// //               <span>{cla}</span>
// //           <span>{dob}</span>
// //           <span>{age}</span>
// //           <span>{gender}</span>
// //           <span>{board}</span>
// //           <span>{sibling}</span>
// //           <span>{aadhar}</span>
// //           <span>{contact}</span>
// //           <span>{category}</span>
// //           <span>{father}</span>
// //           <span>{mother}</span>
// //           <span>{foccupation}</span>
// //           <span>{moccupation}</span>
// //           <span>{presentaddress}</span>
// //           <span>{permanentaddress}</span>
// //           <span>{city}</span>
// //           <span>{religion}</span>
           
// //                      </Col>
// //                      </Row>
// //    </Container>       


// //         </Modal.Body>
// //       </Modal>
// //     </>
// //   );
// // }

// // export default Example