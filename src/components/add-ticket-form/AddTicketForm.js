import React from 'react'
import {Form, Container, Button, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import "../../CSS/addTicket.css"

const AddTicketForm = ({handleOnSubmit, handleOnChange, formData}) => {
  console.log(formData);
  return (
    <Container className='add-new-ticket   mt-5'>
      <h1 className='text-info text-center'>ADD NEW TICKET</h1>
      <hr />
      <div>
        
         <Form autoComplete='off' onSubmit={handleOnSubmit}>
        <Form.Group  as={Row}>
         <Form.Label column sm={3}>
         Subjects
         </Form.Label>
         <Col sm={9}>
         
         <Form.Control
                name="subject"
                value={formData.subject}
                onChange={handleOnChange}
                placeholder="Subject"
                required
                          
                 /></Col>
                </Form.Group>
                 <Form.Group as={Row}>
                <Form.Label column sm={3} >Issue Found</Form.Label>
                <Col sm={9}>  
                <Form.Control
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleOnChange}
                required    
                />
                </Col>
            </Form.Group>
                 <Form.Group>
                <Form.Label>Details</Form.Label>
                <Form.Control
                as="textarea"
                name="detail"
                rows="8"
                value={formData.detail}
                onChange={handleOnChange}
                required    
                />
            </Form.Group>
            <Button type='submit' variant='info' className='w-100'>ADD NEW TICKET </Button>
       
        </Form>
        </div>
    </Container>
    
  )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired
}

export default AddTicketForm
