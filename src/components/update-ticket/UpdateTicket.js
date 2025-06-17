import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap'

const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Replay</Form.Label>
        <div className='replay-text'>
            
        <Form.Text>Please replay your message or update ticket</Form.Text>
        </div>

        <Form.Control
        
        value={msg}
        onChange={handleOnChange}
        as="textarea"
        row="5"
        name='detail'
        />
        <div className='text-right mt-4 mb-3'>
            
        <Button variant='info' type='submit'>Replay</Button>
        </div>
    </Form>

  )
}

UpdateTicket.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
}

export default UpdateTicket
