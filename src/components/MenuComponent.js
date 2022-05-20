import React, { useState } from "react";
import { Card } from "react-bootstrap";
import data from "../data/dishes.json";



export default function MenuComponent(){
    const [dishes,setDishes] = useState(data);
    return(
        <div className="container">
            <div className="row mt-5">
                
                {dishes.map((dish)=>(
                    <div className="col-12 m-3">
                    <div class="d-flex align-items-center" key={dish.id}>
                        <div class="flex-shrink-0">
                            <img src={dish.image} alt={dish.name}/>
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                        </div>
                    </div>
                    </div>
                    ))}
                
            </div>
        </div>
    );
}