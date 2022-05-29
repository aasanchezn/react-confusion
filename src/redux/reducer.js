
import {DISHES} from "../data/dishes";
import { COMMENTS } from '../data/comments';
import { PROMOTIONS } from '../data/promotions';
import { LEADERS } from '../data/leaders';


// Aquí es donde se procesan los actions de redux, se suele trabajar con estados en esta parte de la arquitectura redux

 const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// Los reducers reciben un estado y un action :
const Reducer = (state = initialState, action) => {
    return state; //Aquí se pone la logica del reducer (una funcioncomún de JavaScript)
};

export default Reducer;