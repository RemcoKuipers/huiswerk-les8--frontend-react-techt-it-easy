import {inventory} from "../constants/inventory.js";

function calculateTvInStock(tvArray) {
    let total = 0;
    for (let i = 0; i < tvArray.length; i++) {
        total += tvArray[i].originalStock;
    }
    return total;
}

console.log(calculateTvInStock(inventory));


export default calculateTvInStock;