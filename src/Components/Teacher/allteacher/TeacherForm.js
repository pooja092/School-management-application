import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Container, Table } from 'react-bootstrap';
import { adddetail } from '../../../reducer/action/TeacherAction';
import MainLayout from '../../../Admin/Pages/MainLayout';
import { AiFillDashboard  ,AiFillEdit ,AiFillDelete} from "react-icons/ai";
import '../../../style/main.css'
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";



const TeacherForm = () => {



  const dispatch = useDispatch();
  // const [image1, setImage1] = useState("");
  const [firstname1, setFirstname1] = useState("");
  const [lastname1, setLastname1] = useState("");
  const [join, setJoin] = useState("");
  const [email, setEmail] = useState("");
  const [qufication, setQufication] = useState("");
  const [experience, setExperience] = useState("");
  const [special, setSpecial] = useState("");
  const [lastquali, setLastquali] = useState("");
  const [marriage, setMarriage] = useState("");
  const [dob1, setDob1] = useState("");
  const [gender1, setGender1] = useState("");
  const [board1, setBoard1] = useState("");
  const [aadhar1, setAadhar1] = useState("");
  const [contact1, setContact1] = useState("");
  const [category1, setCategory1] = useState("");
  const [father1, setFather1] = useState("");
  const [mother1, setMother1] = useState("");
  const [foccupation1, setFoccupation1] = useState("");
  const [moccupation1, setMoccupation1] = useState("");
  const [address1, setAddress1] = useState("");
  const [religion1, setReligion1] = useState("");
  const [city1, setCity1] = useState("");






  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstname1 && lastname1 && join && email && qufication && experience && special && lastquali && marriage && dob1
      && gender1 && board1 && aadhar1 && contact1 && category1 && father1 && mother1 && foccupation1 && moccupation1 && address1 && religion1
    ) {
      dispatch(adddetail({
        firstname1, lastname1, join, email, qufication, experience, special, lastquali, marriage, dob1, gender1, board1,
        aadhar1, contact1, category1, father1, mother1, foccupation1, moccupation1, address1, religion1

      }));
      // setImage1("");
      setFirstname1("");
      setLastname1("");
      setJoin("");
      setEmail("");
      setQufication("");
      setExperience("");
      setSpecial("");
      setLastquali("");
      setMarriage("");
      setDob1("");
      setGender1("");
      setBoard1("");
      setAadhar1("");
      setContact1("");
      setCategory1("");
      setFather1("");
      setMother1("");
      setFoccupation1("");
      setMoccupation1("");
      setAddress1("");
      setReligion1("");
      setCity1("");
    }
  };




  return (
    <>

      <MainLayout />

      <Table striped bordered hover style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th><h5><AiFillDashboard /> &nbsp; Dashboard / Teacher-form</h5></th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div'>
          
            
                    <Button className='table-btn' variant="light" >
                      <RiArrowGoBackFill />&nbsp;<Link to="/detaillist">Go Back</Link>
                    </Button>


                    <Button className='table-btn' variant="light" >
                      <AiFillEdit />&nbsp;Bulk Edit
                    </Button >

                    <Button className='table-btn' variant="light" >
                      <AiFillDelete />&nbsp;Bulk Delete
                    </Button>
                    
                  </div>
                </th>
              </tr>
            </thead>
          </Table>

      <div className='form-div'  >

        <Container>


          <form className="row g-4 p-3   registration-form  " onSubmit={handleSubmit} >
            {/* <h2 className='text-center  mb-5 '>Teacher Registration from</h2> */}



            {/* <div class="col-sm-4 position-relative">
    <label class="form-label">Image</label>
    <input type="url" class="form-control" value={image1} onChange={(event) => setImage1(event.target.value)} />
  </div> */}


            <div class="col-md-4 position-relative">
              <label class="form-label">First name</label>
              <input type="text" class="form-control" value={firstname1} onChange={(event) => setFirstname1(event.target.value)} required />
              {/* {firstname.length==0 && <span className='text-danger'>Enter the name</span>} */}
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Last name</label>
              <input type="text" class="form-control" value={lastname1} onChange={(event) => setLastname1(event.target.value)} required />

            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Joining date</label>
              <input type="text" class="form-control" value={join} onChange={(event) => setJoin(event.target.value)} required />

            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required />

            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Qualification</label>
              <input type="text" class="form-control" value={qufication} onChange={(event) => setQufication(event.target.value)} required />

            </div>

            <div class="col-md-4 position-relative">
              <label class="form-label">Experience</label>
              <input type="text" class="form-control" value={experience} onChange={(event) => setExperience(event.target.value)} required />

            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Gender</label>
              <select class="form-select" value={gender1} onChange={(event) => setGender1(event.target.value)} required  >

                <option >choose</option>
                <option >Male </option>
                <option >Female</option>
                <option >Other</option>

              </select>
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Last qualification</label>
              <input type="text" class="form-control" value={lastquali} onChange={(event) => setLastquali(event.target.value)} required />

            </div>

            <div class="col-md-4 position-relative">
              <label class="form-label">Marriage State</label>
              <input type="text" class="form-control" value={marriage} onChange={(event) => setMarriage(event.target.value)} required />

            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">DOB</label>
              <input type="text" class="form-control" value={dob1} onChange={(event) => setDob1(event.target.value)} required />
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Specialisation in subject</label>
              <input type="text" class="form-control" value={special} onChange={(event) => setSpecial(event.target.value)} required />
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Board</label>
              <input type="text" class="form-control" value={board1} onChange={(event) => setBoard1(event.target.value)} required />
            </div>

            <div class="col-md-4 position-relative">
              <label class="form-label">Aadhar no</label>
              <input type="number" class="form-control" value={aadhar1} onChange={(event) => setAadhar1(event.target.value)} required />
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Contact</label>
              <input type="number" class="form-control" value={contact1} onChange={(event) => setContact1(event.target.value)} required />
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Category</label>
              <input type="text" class="form-control" value={category1} onChange={(event) => setCategory1(event.target.value)} required />
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Father name</label>
              <input type="text" class="form-control" value={father1} onChange={(event) => setFather1(event.target.value)} required />
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Mother name</label>
              <input type="text" class="form-control" value={mother1} onChange={(event) => setMother1(event.target.value)} required />
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Father's ocupation</label>
              <input type="text" class="form-control" value={foccupation1} onChange={(event) => setFoccupation1(event.target.value)} required />
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Mother's ocupation</label>
              <input type="text" class="form-control" value={moccupation1} onChange={(event) => setMoccupation1(event.target.value)} required />
            </div>


            <div class="col-md-4 position-relative">
              <label class="form-label">Address</label>
              <input type="text" class="form-control" value={address1} onChange={(event) => setAddress1(event.target.value)} required />
            </div>

            <div class="col-md-4 position-relative">
              <label class="form-label">Religion</label>
              <input type="text" class="form-control" value={religion1} onChange={(event) => setReligion1(event.target.value)} required />
            </div>

            <div class="col-md-4 position-relative">
              <label class="form-label">City</label>
              <input type="text" class="form-control" value={city1} onChange={(event) => setCity1(event.target.value)} required />
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

    </>
  )
}

export default TeacherForm
