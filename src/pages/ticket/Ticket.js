import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import BreadcrumbPage from '../../components/breadcrum/Breadcrumb'
import tickets from '../../assests/data/dummy-tickets.json'
import MessageHistory from '../../components/message-history/MessageHistory'



const Ticket = () => {
    const ticket = tickets [0]
    
  return (
   <Container>
    <Row>
        <Col>
        <BreadcrumbPage page="Ticket" />
        </Col>
    </Row>
      <Row>
        <Col className='text-weight-bolder text-secondary'>
       <div className='subject'>Subject :{ticket.subject}</div>
       <div className='date'>Subject :{ticket.addedAt}</div>
       <div className='status'>Subject :{ticket.status}</div>
        </Col>
        <Col className='text-right'>
            <Button variant='outline-info'>Close Ticket</Button>
        </Col>
    </Row>
    <Row className="mt-5">
        <Col>
        <MessageHistory msg={ticket.history}/>
        </Col>
    </Row>
    <hr />

     <Row className="mt-5">
        <Col>
       vadvd
        </Col>
    </Row>


   </Container>
  )
}

export default Ticket
