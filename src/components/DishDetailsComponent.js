import React,{useState} from "react";
import {Card,Breadcrumb,Button,Modal,Row,Col,Container} from 'react-bootstrap';
import { useParams,Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import {MdEdit} from 'react-icons/md';
import { Form, Field } from 'react-final-form';

export function DishDetails(props) {

    const AllDishes = useSelector((state) => state.dishes);
    const [dishes,setDishes]=useState(AllDishes);
    const AllComments = useSelector((state) => state.comments);
    const [comments,setComments]=useState(AllComments);
    
    let params = useParams();
    console.log(params);
    const dishSelect = dishes.filter((dish)=> (dish.id == params.id) )[0];
    console.log(dishSelect);
    const dishComments = comments.filter((com)=> (com.dishId == params.id) );  
    console.log(dishComments);

    //Show modal control
    const [modalShow, setModalShow] = React.useState(false);

    //Validations
    const required = value => (value ? undefined : 'Required');
    const maxLength = (len) => (value) => value && (value.length <= len)?undefined : `'Must be 15 characters or less'`;
    const minLength = (len) => (value) => value && (value.length >= len)? undefined : `'Must be greater than 2 characters'`;
    const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

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


return (
    <>
    <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Submit Comment
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form
            onSubmit={(values)=>handleSubmit(values)}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Container>
                        
                        <Row className="mb-3">
                            <Col><label>Rating</label></Col>
                            <Col md={10}>
                                <Field name="rating" component="select" className="form-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5" selected >5</option>
                                </Field>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><label>Your Name</label></Col>
                            <Col md={10}>
                                <Field
                                name="name"
                                validate={composeValidators(required,minLength(3),maxLength(15))}>
                                    {({ input, meta }) => (
                                        <div>
                                            <input {...input} type="text" placeholder="Your Name" className="form-control"/>
                                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><label>Comment</label></Col>
                            <Col md={10}>
                                <Field name="comment" component="textarea" className="form-control">
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
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
    </Modal>
    <div>
        <div className="row">
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/menu">Menu</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>{dishSelect.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="col-12">
                <h3>{dishSelect.name}</h3>
                <hr />
            </div>                
        </div>
      <div className="col-12 col-md-5 m-1">
                <Card>
                    <Card.Img variant="top" src={dishSelect.image} />
                    <Card.Body>
                        <Card.Title>{dishSelect.name}</Card.Title>
                        <Card.Text> {dishSelect.description}</Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {dishComments.map((comment)=>(
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} {comment.date}</p>
                    </div>
                ))}
                <Button variant="outline-dark"  onClick={() => setModalShow(true)}><MdEdit/> Submit Comment</Button>
                </div>
    </div>
    </>
  );
}