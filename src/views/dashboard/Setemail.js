import React from 'react'
import { Card, CardBody, Input, Form, Label, FormGroup, Button, FormText } from 'reactstrap'


function Setemail() {
  return (
    <Card style={{ width: '550px', height: 'auto', padding: '20px', margin: "80px 0 0 180px" }}>
      <CardBody>
        <Form>
          <FormText color="dark" className='text-center'>
            <h1>Add your sender information</h1>
          </FormText>
          <FormText style={{ fontSize: '14px' }} className='text-center'>
            <p>Choose the sender name and email address that will appeare in your subcription inbox</p>
          </FormText>
          <FormGroup style={{ marginTop: '20px' }} >
            <Label for="exampleText" style={{ fontSize: "16px" }}>
              Sender name
            </Label>
            <Input
              id="exampleText"
              name="name"
              type="text"
              required
            />
            <Label for="exampleEmail" style={{ fontSize: "16px", marginTop: '20px' }}>
              Sender email address
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              type="email"
              required
            />
          </FormGroup>
          <Button color="dark">
            <a href="/merchant/setemail/checkemail" style={{ color: '#FFF', alignContent: 'center' }} >Continue</a>
          </Button>
        </Form>
      </CardBody>
    </Card>
  )
}
export default Setemail
