import React from 'react'
import { Container, Row, Col, Form, Button} from "react-bootstrap"
import "./login.css";

const Login = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <h1 className='form-login text-info text-center'>Client Login</h1>
          <hr />
          <Form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              />
            </Form.Group>
             <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              />
            </Form.Group>

            <Button type="submit">Login</Button>


          </Form>
          <hr />
          </Col>
        </Row>

        <Row>
          <Col>
          <a href='#!'>Forget Password</a>
          
          </Col>

        </Row>
      </Container>

      
    </div>
  )
}

export default Login
