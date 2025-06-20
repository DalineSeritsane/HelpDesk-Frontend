import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import BreadcrumbPage from '../../components/breadcrum/Breadcrumb'
import tickets from '../../assests/data/dummy-tickets.json'
import MessageHistory from '../../components/message-history/MessageHistory'
import UpdateTicket from '../../components/update-ticket/UpdateTicket'

import {useParams} from 'react-router-dom'

const Ticket = () => {
    // const ticket = tickets [0]

    const {tId} = useParams()

    const [message, setMessage] = useState('')
    const [ticket, setTicket] = useState("")

    useEffect (() => {
            for (let i = 0; i < ticket.length; i++) {
                if(ticket[i].id == tId){
                    setTicket(ticket[i])
                    continue
                }
                
            }
    }, [message, tId]);

    const handleOnChange = (e) => {
        setMessage(e.target.value);

    };

    const handleOnSubmit = ()=>{
        alert('Form submited')
    }
    
  return (
   <Container>
    <Row>
        <Col>
        <BreadcrumbPage page="Ticket" />
        </Col>
    </Row>
      <Row>
        <Col className='text-weight-bolder text-secondary'>
        {tId}
       <div className='subject'>Subject :{ticket.subject}</div>
       <div className='date'>Ticket Opened :{ticket.addedAt}</div>
       <div className='status'>Status:{ticket.status}</div>
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
       <UpdateTicket msg={message}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        />
        </Col>
    </Row>


   </Container>
  )
}

export default Ticket
