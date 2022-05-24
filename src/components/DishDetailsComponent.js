import React from "react";
import {Card,Breadcrumb} from 'react-bootstrap';
import { useParams,Link } from "react-router-dom";

export function DishDetails(props) {
  let params = useParams();
  console.log(params);
  const dishSelect = props.dishes.filter((dish)=> (dish.id == params.id) )[0];
  const dishComments = props.comments.filter((com)=> (com.dishId == params.id) );  
  console.log(dishComments);
  return (
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
                </div>
    </div>
  );
}