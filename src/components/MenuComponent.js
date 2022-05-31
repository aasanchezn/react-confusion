import React,{useState} from "react";
import {Card,Breadcrumb} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

import { useSelector } from 'react-redux';

export default function MenuComponent(){

    const AllDishes = useSelector((state) => state.dishes);
    const [dishes,setDishes]=useState(AllDishes);

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <Breadcrumb.Item ><Link to="/home">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Menu</Breadcrumb.Item>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row mt-5" 
            // style={{outline:'1px solid red'}}
            >
                {dishes.map((dish)=>(
                    <div key={dish.id} className="col-12 col-md-6 mb-5">
                        <Link to={`/menu/${dish.id}`} >
                        <Card className="bg-dark">
                            <Card.Img src={dish.image} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{dish.name}</Card.Title>
                            </Card.ImgOverlay>
                            </Card>
                        </Link>
                    </div>
                    ))}   
            </div>
        </div>
)
}