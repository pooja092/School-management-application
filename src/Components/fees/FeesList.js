import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchfeess } from '../../reducer/action/FeesAction'
import Fees from './Fees'
import MainLayout from '../../Admin/Pages/MainLayout'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillEye, AiFillSetting, AiOutlinePlusSquare } from 'react-icons/ai'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { IoIosCreate } from "react-icons/io";


const FeesList = () => {

  const dispatch = useDispatch()
  const feess = useSelector(state => state.feess.item)
  const feessStatus = useSelector(state => state.feess.status)
  const error = useSelector(state => state.feess.error)


  useEffect(() => {
    if (feessStatus === 'idle') {
      dispatch(fetchfeess())
    }
  }, [feessStatus, dispatch])

  let content

  if (feessStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (feessStatus === 'succeeded') {
    content = feess.map(fees => <Fees key={fees.id} fees={fees} />)
  } else if (feessStatus === 'failed') {
    content = <div>{error}</div>
  }



  return (
    <>

    <MainLayout />

    <Container style={{ width: "90%" }} >
        <Table striped bordered hover style={{ textAlign: "left" }}>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Student-details</h5></th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div
                    style={{ textAlign: "left", marginLeft: "10px" }}
                    className="b">
                    {/* <Button variant="light"
                      onClick={() => handleAddData()}
                      style={{ textAlign: "left", marginLeft: "10px", border: " 1px solid" }}>
                      <AiOutlinePlusSquare />
                      &nbsp;Create
                    </Button> */}
                    <Button
                      style={{ textAlign: "left", marginLeft: "10px", border: " 1px solid" }}
                      variant="light" >
                      <IoIosCreate />&nbsp;Setting
                    </Button>
                    <Button
                      style={{ textAlign: "left", marginLeft: "10px", border: " 1px solid" }}
                      variant="light" >
                      <AiFillEdit />&nbsp;Bulk Edit
                    </Button>
                    <Button
                      style={{ textAlign: "left", marginLeft: "10px", border: " 1px solid" }}
                      variant="light" >
                      <AiFillDelete />&nbsp;Bulk Delete
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>


      <div className="post-table">

<h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Teacher Details</h5>

<Table responsive>
<table class="table table-bordered border-secondary">
<thead>
  <tr>
   
   <th>Sr.no</th>
    <th>Bus feess</th>
    <th>Computer feess</th>
    <th>Admistion feess</th>
    <th>Examination feess</th>
    <th> Classes wise Fess</th>
   
      
  </tr>
      </thead>

    {content}

    </table>
    </Table>

    </div>


    </>


  )
}

export default FeesList
