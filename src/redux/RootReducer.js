import {combineReducers} from "redux";
import reminders from "../reducer/Reducer";
import Cart from "../cart/Reducer";
export default  combineReducers({
     productss:reminders,
     Cart
});