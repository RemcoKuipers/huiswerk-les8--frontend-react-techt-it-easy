import {inventory} from "../constants/inventory.js";

function sortMostSoldTv() {
    inventory.sort((a, b) => {
        return b.sold - b.sold;

    });
    console.log('Meest verkocht eerst', inventory);
}

export default sortMostSoldTv;