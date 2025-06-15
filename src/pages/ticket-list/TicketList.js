import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import BreadcrumbPage from '../../components/breadcrum/Breadcrumb'
import SearchForm from '../../components/search-form/SearchForm'
import TicketTable from '../../components/ticket-table/TicketTable'
import tickets from "../../assests/data/dummy-tickets.json";


const TicketList = () => {

    const [str, setStr] = useState("");

    useEffect(() => {}, [str]);

    const handleOnChange = (e) =>{
        setStr(e.target.value);
        // console.log(e.target)
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
            <Button variant='info'>ADD NEW TICKET</Button>
            </Col>
              <Col className='text-right'>
            <SearchForm handleOnChange={handleOnChange} str={str} />
            </Col>
        </Row>
        <hr />
         <Row>
            <Col>
           <TicketTable tickets={tickets} />
            </Col>
        </Row>


    </Container>

  )
}

export default TicketList
