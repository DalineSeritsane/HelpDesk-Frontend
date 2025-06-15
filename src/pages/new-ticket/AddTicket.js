import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BreadcrumbPage from '../../components/breadcrum/Breadcrumb'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm'


const initialFrmDt = {
    subject:'',
    issueDate: '',
    detail:'',
}

const AddTicket = () => {

    const [formData, setFormData] = useState(initialFrmDt);
    
    useEffect(()=> {}, [formData])

    const handleOnChange = (e) =>{
        const {name, value} = e.target;


        setFormData({
            ...formData,
            [name]:value
        })
        // console.log(name, value)
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()

        console.log('form submit request received', formData)
    }
   


  return (
    <Container>
        <Row>
            <Col>
            <BreadcrumbPage page="New Ticket"  />
            </Col>
        </Row>

         <Row>
            <Col>
          <AddTicketForm handleOnChange={handleOnChange} 
          handleOnSubmit={handleOnSubmit}
          formData = {formData}
          />
            </Col>
        </Row>
    </Container>
   
  )
}

export default AddTicket
