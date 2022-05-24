import React from "react";
import {Card,Breadcrumb} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MenuComponent({dishes}){
 
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

            <div className="row mt-5" >
                
                {dishes.map((dish)=>(
                    <div key={dish.id} className="col-12 col-md-5 m-1">
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
    );
}