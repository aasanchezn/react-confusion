import React, { useState } from "react";
import {Card, NavbarBrand} from 'react-bootstrap';

export default function MenuComponent({dishes}){
    const [selectedDish,setSelectedDish]=useState(null);

    function onSelect(dish){
        setSelectedDish(dish);
    }

    function onSelectDish(dish){
        if (dish!=null){
            return (
                <>
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <Card.Img variant="top" src={dish.image} />
                    <Card.Body>
                        <Card.Title>{dish.name}</Card.Title>
                        <Card.Text> {dish.description}</Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {dish.comments.map((comments)=>(
                    <div key={comments.id}>
                        <p>{comments.comment}</p>
                        <p>--{comments.author} {comments.date}</p>
                    </div>
                ))}
                </div>
                </>
                
            )
        }else{
            return(
            <div></div>
            )
        }
    }
    return(
        <div className="container">
            <div className="row mt-5" >
                
                {dishes.map((dish)=>(
                    <div key={dish.id} className="col-12 col-md-5 m-1" onClick={() => onSelect(dish)}>
                        <Card className="bg-dark">
                            <Card.Img src={dish.image} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{dish.name}</Card.Title>
                            </Card.ImgOverlay>
                            </Card>
                    </div>
                    ))}
                
            </div>
            <div className="row mt-1">
                {onSelectDish(selectedDish)}
            </div>
        </div>
    );
}