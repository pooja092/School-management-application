import React, { useState } from 'react'
import MainLayout from '../../Admin/Pages/MainLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai'
import { Container, Col, Row, Card, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { AiFillDashboard } from "react-icons/ai";
// import './Reg.css'
// import { addfees } from '../Redux/Slice/action';
// import ShowDetails from './ShowDetails';

const FeesForm = () => {


    const [showtext, setShowtext] = useState("View Classes Fess")
    const handletext = (e) => {
        const getvalue = e.target.value;

        if (getvalue == 1) {
            const show = "Nurssury ClassFees 600 Rs."
            setShowtext(show);

        } else if (getvalue == 2) {
            const show = "L.k.g ClassFees 700 Rs."
            setShowtext(show);
        } else if (getvalue == 3) {
            const show = "U.k.g ClassFees 700 Rs."
            setShowtext(show);
        } else if (getvalue == 4) {
            const show = "Ist ClassFees 800 Rs."
            setShowtext(show);
        } else if (getvalue == 5) {
            const show = "2nd ClassFees 1000 Rs."
            setShowtext(show);
        } else if (getvalue == 6) {
            const show = "3rd ClassFees 1200 Rs."
            setShowtext(show);
        } else if (getvalue == 7) {
            const show = "4th ClassFees 1500 Rs."
            setShowtext(show);
        } else if (getvalue == 8) {
            const show = "5th ClassFees 1800 Rs."
            setShowtext(show);
        }

        else {
            const show = "View Classes Fess"
            setShowtext(show);
        }

    }



    // const [bodyText, setBodyText] = useState("");
    // const dispatch = useDispatch();
    // const { loading, fees, edit, body } = useSelector((state) => ({ ...state.feeses }))
    // const [id, setId] = useState();


    // const onChangeInput = (e) => {
    //     setId(e.target.value);
    // };
    // const fetchPosts = () => {
    //     if (!id) {
    //         window.alert("Please enter id");
    //     } else {
    //         dispatch(addfees({ id }));
    //         setId("");
    //     }
    // };




    return (
        <>


            <MainLayout />

            <Table striped bordered hover style={{ textAlign: "left" }}>
                <thead>
                    <tr>
                        <th><h5><AiFillDashboard /> &nbsp; Dashboard / Fees-form</h5></th>
                    </tr>
                </thead>
            </Table>

            <div style={{ padding: "20px", border: "1px solid", margin: "10px" }}>

                <Container>

                    <form className="row g-4 p-3   registration-form " >

                        <div class="col-md-4 position-relative">
                            <label class="form-label">Sr.no</label>
                            <input type="text" class="form-control"
                            //   value={firstname1} onChange={(event) => setFirstname1(event.target.value)} required 
                            />
                            {/* {firstname.length==0 && <span className='text-danger'>Enter the name</span>} */}
                        </div>

                        <div class="col-md-4 position-relative">
                            <label class="form-label">Bus feess </label>
                            <input type="text" class="form-control"
                            //   value={firstname1} onChange={(event) => setFirstname1(event.target.value)} required 
                            />
                            {/* {firstname.length==0 && <span className='text-danger'>Enter the name</span>} */}
                        </div>

                        <div class="col-md-4 position-relative">
                            <label class="form-label">Computer feess </label>
                            <input type="text" class="form-control"
                            //   value={firstname1} onChange={(event) => setFirstname1(event.target.value)} required 
                            />
                            {/* {firstname.length==0 && <span className='text-danger'>Enter the name</span>} */}
                        </div>


                        <div class="col-md-4 position-relative">
                            <label class="form-label">Admistion feess </label>
                            <input type="text" class="form-control"
                            //   value={firstname1} onChange={(event) => setFirstname1(event.target.value)} required 
                            />
                            {/* {firstname.length==0 && <span className='text-danger'>Enter the name</span>} */}
                        </div>


                        <div class="col-md-4 position-relative">
                            <label class="form-label">Examination feess</label>
                            <input type="text" class="form-control"
                            //   value={firstname1} onChange={(event) => setFirstname1(event.target.value)} required 
                            />
                            {/* {firstname.length==0 && <span className='text-danger'>Enter the name</span>} */}
                        </div>



                        <div class="col-md-4 position-relative"
                        // controlId="formGridState" className='input2'
                        >
                            <label class="form-label">Fess Structure Classes wise</label>
                            <Form.Select
                                onChange={(e) => handletext(e)}
                            // defaultValue="Choose..."
                            >
                                <option>Choose</option>
                                <option value="1">Nursury Class</option>
                                <option value="2">L.K.G. Class</option>
                                <option value="3">U.K.G. Class</option>
                                <option value="4">Ist Class</option>
                                <option value="5">2nd  Class</option>
                                <option value="6">3rd Class</option>
                                <option value="7">4th Class </option>
                                <option value="8">5th Class </option>
                            </Form.Select>
                            <div className='show'>
                                <div className='showtext'>{showtext}</div>
                            </div>
                        </div>


                        <center>
                            <Button className="stu_btn"
                                variant="success"
                                type="submit">
                                Submit
                            </Button>
                        </center>




                    </form>

                </Container>

            </div>








            {/* <div className='R-Form'>



                    <Form style={{ marginTop: "30px" }}>
                        <Form.Group as={Col} controlId="formGridState" className='input2'>
                            <Form.Label className='labels'>Fess Structure Classes wise</Form.Label>
                            <Form.Select
                                onChange={(e) => handletext(e)}
                                // defaultValue="Choose..."
                            >
                                <option>Choose</option>
                                <option value="1">Nursury Class</option>
                                <option value="2">L.K.G. Class</option>
                                <option value="3">U.K.G. Class</option>
                                <option value="4">Ist Class</option>
                                <option value="5">2nd  Class</option>
                                <option value="6">3rd Class</option>
                                <option value="7">4th Class </option>
                                <option value="8">5th Class </option>
                            </Form.Select>
                            <div className='show'>
                                <div className='showtext'>{showtext}</div>
                            </div>
                        </Form.Group>

                        <br />
                        <br />
                        <Form.Group className="mb-3 input" controlId="formBasicEmail">
                            <Form.Label className='label2' >Enter Registraion Number</Form.Label>
                            <Form.Control
                                onChange={onChangeInput}
                                value={id}
                                type="text"
                                placeholder="Enter Registraion Number" />
                        </Form.Group>

                        {/* <Button onClick={fetchPosts}
                            className='name'
                            type="submit">
                            Get Details
                        </Button> */}

            {/* </Form> */}
            {/* </div>  */}
            {/* {loading ? (
        <ShowDetails count={1} />
      ) : (
        <>
          {fees?.length > 0 && (
            <div className="site-card-border-less-wrapper">
                
            
         
            </div>
          )}
        </>
      )} */}





        </>
    )
}

export default FeesForm
