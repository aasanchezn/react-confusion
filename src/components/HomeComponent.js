import React, {useState} from 'react';
import { Card, CardImg} from 'react-bootstrap';

import { useSelector } from 'react-redux';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            {item.designation ? <Card.Subtitle>{item.designation}</Card.Subtitle> : null }
            <Card.Text>{item.description}</Card.Text>
            </Card.Body>
        </Card>
    );

}

function Home() {

    const AllLeaders = useSelector((state) => state.leaders);
    const AllDishes = useSelector((state) => state.dishes);
    const AllPromotions = useSelector((state) => state.promotions);

    const [leaders,setLeaders]=useState(AllLeaders);
    const [dishes,setDishes]=useState(AllDishes);
    const [promotions,setPromotions]=useState(AllPromotions);

    const dishFeatured= dishes.filter((dish)=> dish.featured )[0];
    const promotionFeatured= promotions.filter((promotion)=> promotion.featured )[0];
    const leaderFeatured= leaders.filter((leader)=> leader.featured )[0];

    return(
        <div className="container">
            <div className="row align-items-start" style={{outline:'1px solid red'}}>
                <div className="col-12 col-md mb-2">
                    <RenderCard item={dishFeatured} />
                </div>
                <div className="col-12 col-md mb-2">
                    <RenderCard item={promotionFeatured} />
                </div>
                <div className="col-12 col-md mb-2">
                    <RenderCard item={leaderFeatured} />
                </div>
            </div>
        </div>
    );
}

export default Home;