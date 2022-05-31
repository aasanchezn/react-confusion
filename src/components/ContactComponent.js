import React, { useLayoutEffect } from 'react';
import { useState } from "react";
import {Nav,Breadcrumb,Button,Row,Col,InputGroup,Feedback,Container} from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';

export default function Contact(){

    const [touchfirstname,setTouchFirstName] = useState(false);
    const [touchlastname,setTouchLastName] = useState(false);
    const [touchtelnum,setTouchTelNum] = useState(false);
    const [touchemail,setTouchEmail] = useState(false);


    //States for validation:

    const [validatefirstname,setErrorFN]= useState(false);
    const [errorlastname,setErrorLN]= useState('');
    const [errortelnum,setErrorTN]= useState('');
    const [erroremail,setErrorEmail]= useState('');

    function handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
    }

    //Validations
    const required = value => (value ? undefined : 'Required');
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (value) => value && (value.length >= len)? undefined : `'Must be greater than 2 characters'`;
    const mustBeNumber = value => ( isNaN(value) ? 'Must be a number' : undefined);
    const validEmail = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);



    return (
        <>
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

            <div className="row mb-3">

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

            <div className="row">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">

                <Form
                onSubmit={(values)=>handleSubmit(values)}
                initialValues={{ stooge: 'larry', employed: false }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Container>
                        <Row className="mb-3">
                            <Col><label>First Name</label></Col>
                            <Col md={10}>
                                <Field
                                name="firstname"
                                validate={composeValidators(required,minLength(3))}>
                                    {({ input, meta }) => (
                                        <div>
                                            <input {...input} type="text" placeholder="First Name" className="form-control"/>
                                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><label>Last Name</label></Col>
                            <Col md={10}>
                            <Field
                                name="lastname"
                                validate={composeValidators(required,minLength(3))}>
                                    {({ input, meta }) => (
                                        <div>
                                            <input {...input} type="text" placeholder="Last Name" className="form-control"/>
                                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><label>Contact Tel.</label></Col>
                            <Col md={10}>
                            <Field
                                name="telnum"
                                validate={composeValidators(required, mustBeNumber,minLength(3))}>
                                    {({ input, meta }) => (
                                        <div>
                                            <input {...input} type="text" placeholder="Tel Num." className="form-control"/>
                                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><label>Email</label></Col>
                            <Col md={10}>
                            <Field
                                name="email"
                                validate={composeValidators(required,validEmail)}>
                                    {({ input, meta }) => (
                                        <div>
                                            <input {...input} type="text" placeholder="Email" className="form-control"/>
                                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                        </div>
                                    )}
                            </Field>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={6}>
                                <Field name="employed" component="input" type="checkbox" />
                                <label>May we contact you?</label>
                            </Col>
                            <Col xs={6}>
                                <Field name="contactType" component="select" className="form-select">
                                <option value="Tel">Tel.</option>
                                <option value="Email">Email</option>
                                </Field>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><label>Your Feedback</label></Col>
                            <Col md={10}>
                            <Field
                                name="notes"
                                rows={10}
                                validate={composeValidators(required,minLength(3))}>
                                    {({ input, meta }) => (
                                        <div>
                                            <input {...input} type="textarea" placeholder="Notes" className="form-control" />
                                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </Col>
                        </Row>
                    
                    <Row className="mb-3">
                        <Button type="submit" color="primary">
                            Send Feedback
                        </Button>
                    </Row>

                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </Container>
                    </form>
                )}
                />
                </div>
            </div>
        </div>
    </>
)}
