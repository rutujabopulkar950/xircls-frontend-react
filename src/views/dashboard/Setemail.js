import React, { useState, useEffect } from 'react'
import { Card, CardBody, Input, Form, Label, FormGroup, Button, FormText } from 'reactstrap'

function Setemail() {
  const initialvalues = { name: "", email: "" }
  const [formValues, setFormValues] = useState(initialvalues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.name) {
      errors.name = "Name is required !"
    }

    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!"
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])

  return (

    <Card style={{ width: '550px', height: 'auto', padding: '20px', margin: "80px 0 0 180px" }}>
      <CardBody>

        <Form onSubmit={handleSubmit}>
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
              value={formValues.name}
              name="name"
              type="text"
              onChange={handleChange}
            />
            <p>{formErrors.name}</p>
            <Label for="exampleEmail" style={{ fontSize: "16px", marginTop: '20px' }}>
              Sender email address
            </Label>
            <Input
              id="exampleEmail"
              value={formValues.email}
              name="email"
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
          </FormGroup>
          <Button color="dark" style={{ color: '#FFF', alignContent: 'center' }}>
            Continue
          </Button>
        </Form>
      </CardBody>
    </Card>
  )
}
export default Setemail
