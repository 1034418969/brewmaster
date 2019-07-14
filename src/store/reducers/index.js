import car from './car';
import goods from './goods';
import order from './order';
import record from './record';
import { 
    combineReducers
 } from "redux";

 export default combineReducers({
     car,
     goods,
     record,
     order
 })