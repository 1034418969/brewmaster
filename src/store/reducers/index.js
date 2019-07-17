import car from './car';
import goods from './goods';
import order from './order';
import record from './record';
import clear from './clear'
import details from "./details "
import address from "./address"
import { 
    combineReducers
 } from "redux";

 export default combineReducers({
     car,
     goods,
     record,
     order,
     clear,
	 details,
     address
 })