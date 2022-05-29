import React, { useLayoutEffect } from 'react';
import { useState } from "react";
import {Nav,Breadcrumb,Button,Row,Col,InputGroup,Feedback} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

export default function Contact(){

    const DATA_FORM = [{
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: 'cualquier cosa',
        message: ''
    }];

 

    const [dataForm,setDataForm] = useState(DATA_FORM);

    const [touchfirstname,setTouchFirstName] = useState(false);
    const [touchlastname,setTouchLastName] = useState(false);
    const [touchtelnum,setTouchTelNum] = useState(false);
    const [touchemail,setTouchEmail] = useState(false);


    //States for validation:

    const [validatefirstname,setErrorFN]= useState(false);
    const [errorlastname,setErrorLN]= useState('');
    const [errortelnum,setErrorTN]= useState('');
    const [erroremail,setErrorEmail]= useState('');

    //Controlled component functions that handle form inputs.

    function handleInputChange(e){
        // This allow identificate the input where happened onChange event
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        DATA_FORM.name=value;
        setDataForm(DATA_FORM);
        validate(e);
    }

    useLayoutEffect(()=>{
        console.log(dataForm.agree);
    },[]);

    function handleSubmit(e) {
        console.log('Current State is: ' + JSON.stringify(dataForm));
        alert('Current State is: ' + JSON.stringify(dataForm));
        e.preventDefault();
    }
    function handleBlur(e){
        const target = e.target;
    }

function validate(e) {
    console.log(e);
    const target= e.currentTarget;
    if (target.name === 'firstname' || target.name === 'lastname' ){
        if(target.value.length<3){
            target.classList.contains("is-valid")? target.classList.replace("is-valid","is-invalid"): target.classList.add("is-invalid");;}
        else{
            target.classList.replace("is-invalid","is-valid")
        }
    }
    if (target.name === 'email'){
        if(target.value.split('').filter(x => x === '@').length !== 1){target.classList.add("is-invalid")}else{
            target.classList.replace("is-invalid","is-valid")
        }
    }
}

    // if (dataForm.touched.firstname && firstname.length < 3)
    //     errors.firstname = 'First Name should be >= 3 characters';
    // else if (dataForm.touched.firstname && firstname.length > 10)
    //     errors.firstname = 'First Name should be <= 10 characters';

    // if (dataForm.touched.lastname && lastname.length < 3)
    //     errors.lastname = 'Last Name should be >= 3 characters';
    // else if (dataForm.touched.lastname && lastname.length > 10)
    //     errors.lastname = 'Last Name should be <= 10 characters';

    // const reg = /^\d+$/;
    // if (dataForm.touched.telnum && !reg.test(telnum))
    //     errors.telnum = 'Tel. Number should contain only numbers';

    // if(dataForm.touched.email && email.split('').filter(x => x === '@').length !== 1)
    //     errors.email = 'Email should contain a @';

    // return errors;



    return (
        <div className="container">
            
            <div className="row">
            <Breadcrumb>
                    <Breadcrumb.Item> <Link to="/home">Home</Link> </Breadcrumb.Item>
                    <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">

                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form  noValidate onSubmit={(e)=>handleSubmit(e)} validated={validatefirstname}>

                    <Form.Group as={Row}  className="mb-3">
                        <Form.Label column sm="2">
                            First Name
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" id="firstname" name="firstname" placeholder="First Name"
                        value={dataForm.firstname}
                        onBlur={(e)=>handleBlur(e)}
                        onChange={(e)=>handleInputChange(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            First Name should be &gt;= 3 characters
                        </Form.Control.Feedback>
                        </Col>
                        
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                        Last Name
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" id="lastname" name="lastname" placeholder="Last Name"
                            value={dataForm.lastname}
                            onBlur={(e)=>handleBlur(e)}
                            onChange={(e)=>handleInputChange(e)} 
                        />
                        <Form.Control.Feedback type="invalid">
                            Last Name should be &gt;= 3 characters
                        </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                        Contact Tel
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control  type="tel" id="telnum" name="telnum" placeholder="Tel. number"
                            value={dataForm.telnum}
                            onBlur={(e)=>handleBlur(e)}
                            onChange={(e)=>handleInputChange(e)} 
                        />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control  type="email" id="email" name="email" placeholder="Email"
                            value={dataForm.email}
                            onBlur={(e)=>handleBlur(e)}
                            onChange={(e)=>handleInputChange(e)} 
                        />
                        <Form.Control.Feedback type="invalid">
                            Email should contain a @
                        </Form.Control.Feedback>
                        </Col>
                        
                        
                    </Form.Group>

                    <InputGroup className="mb-3">
                    <Form.Check type="checkbox" label="May we contact you?" name="agree" className="me-3"
                            checked={dataForm.agree}
                            onChange={(e)=>handleInputChange(e)}
                            />
                    <Form.Select id="contactType"name="contactType"
                                    value={dataForm.contactType}
                                    onChange={(e)=>handleInputChange}
                                    >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Form.Select>
                        
                    </InputGroup>

                    <Form.Group className="mb-3" >
                        <Form.Label>Your Feedback</Form.Label>
                        <Form.Control as="textarea" rows={3} id="message" name="message"
                         value={dataForm.message}
                         onChange={(e)=>handleInputChange(e)}/>
                    </Form.Group>

                        <Form.Group>
                            <Button type="submit" color="primary">
                            Send Feedback
                            </Button>
                        </Form.Group> 
                    </Form>
                </div>
            </div>
        </div>
    )
}



// function Example() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>
  
//         <Modal show={show} onHide={handleClose} animation={false}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
//   render(<Example />);