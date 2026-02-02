import {inventory} from "../constants/inventory.js";

function calculateTvSold(tvArray) {
    let total = 0;
    for (let i = 0; i < tvArray.length; i++) {
        total += tvArray[i].sold;
    }
    return total;
}


console.log(calculateTvSold(inventory));

export default calculateTvSold;