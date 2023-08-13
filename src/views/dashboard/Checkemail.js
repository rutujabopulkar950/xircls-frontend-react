import React from 'react'
import { Card, CardBody, CardText, CardTitle} from 'reactstrap'

function Checkemail() {
    return (
            <Card style={{ width: '500px', height: 'auto', margin: "80px 0 0 180px"}}>
            <CardBody className='text-center'>    
            <img
                    alt="email_image"
                    className='text-center'
                    src="https://cdn-icons-png.flaticon.com/128/7326/7326398.png"
                    style={{
                        width: '200px',
                        height: 180,
                        alignItems: 'center'
                    }}
                    top
                    width="100%"
                />
                <CardTitle color="dark" className='text-center' style={{marginTop :'20px'}}>
                    <h1>Check your email</h1>
                </CardTitle>
                <CardText style={{fontSize:'14px'}}>
                    To start using kiniya, active your account with the link send to
                </CardText>

                <hr style={{width: '100%', color: '#999', marginTop:'40px'}} />
                </CardBody>
                <a style={{margin:'-15px 0 15px 27px'}}>Didn't receive an email?</a>
            </Card>
    )
}

export default Checkemail
