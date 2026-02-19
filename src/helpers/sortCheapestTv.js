import {inventory} from "../constants/inventory.js";

function sortCheapestTv() {
    inventory.sort((a, b) => {
        return a.price - b.price;

    });
    console.log('Goedkoopste eerst', inventory);
}

export default sortCheapestTv;