import {SINGLEPRODUCT} from "./type";
export let setSingle_Product = (item) => {
    const action = {
        type : SINGLEPRODUCT,
         payload: item
    }
    return action;
}