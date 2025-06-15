import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BreadcrumbPage from '../../components/breadcrum/Breadcrumb'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm'
import { shortText } from '../../utils/validation'

const initialFrmDt = {
    subject:'',
    issueDate: '',
    detail:'',
}

const initialFrmError = {
    subject:false,
    issueDate: false,
    detail:false,
}

const AddTicket = () => {

    const [formData, setFormData] = useState(initialFrmDt);
     const [formDataError, setFormDataError] = useState(initialFrmError);
    
    useEffect(()=> {}, [formData, formDataError])

    const handleOnChange = (e) =>{
        const {name, value} = e.target;


        setFormData({
            ...formData,
            [name]:value
        })
        // console.log(name, value)
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault()

        setFormDataError(initialFrmError)

        const isSubjectValid = await shortText(formData.subject)
        
           setFormDataError({
            ...initialFrmError,
            subject: !isSubjectValid
           })


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
          formData={formData}
          formDataError = {formDataError}
          />
            </Col>
        </Row>
    </Container>
   
  )
}

export default AddTicket
