import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import BreadcrumbPage from '../../components/breadcrum/Breadcrumb'
import SearchForm from '../../components/search-form/SearchForm'
import TicketTable from '../../components/ticket-table/TicketTable'
import tickets from "../../assests/data/dummy-tickets.json";

import {Link} from 'react-router-dom'

const TicketList = () => {

    const [str, setStr] = useState("");
     const [dispTicket, setDispTicket] = useState(tickets);

    useEffect(() => {
      
    }, [str, dispTicket]);

    const handleOnChange = (e) =>{
      const {value} = e.target;
        setStr(value);
        searchTicket(value)
        // console.log(e.target)
    };

    const searchTicket = sttr =>{

      const displayTicket = tickets.filter(row => row.subject.toLowerCase().includes(sttr.toLowerCase())
    )

      setDispTicket(displayTicket)
    }

  return (
    <Container>
        <Row>
            <Col>
            <BreadcrumbPage page="Ticket List" />
            </Col>
        </Row>
             <Row className='mt-4'>
            <Col>
            <Link to="/add-ticket">
            
            <Button variant='info'>ADD NEW TICKET</Button></Link>
            </Col>
              <Col className='text-right'>
            <SearchForm handleOnChange={handleOnChange} str={str} />
            </Col>
        </Row>
        <hr />
         <Row>
            <Col>
           <TicketTable tickets={dispTicket} />
            </Col>
        </Row>


    </Container>

  )
}

export default TicketList
