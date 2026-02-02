import calculateTvInStock from "./numberOfTvInStock.js";
import calculateTvSold from "./numberOfTvSold.js";
import {inventory} from "../constants/inventory.js";

function calculateTvToSell(tvArray) {
    const tvInStock = calculateTvInStock(tvArray);
    const tvSold = calculateTvSold(tvArray);
    return tvInStock - tvSold;
}

console.log(calculateTvToSell(inventory));

export default calculateTvToSell;