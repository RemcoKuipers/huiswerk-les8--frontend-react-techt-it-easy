import {inventory} from "../constants/inventory.js";

function sortBestForSportTv() {
    inventory.sort((a, b) => {
        return b.refreshRate - a.refreshRate;
    });
    console.log('Meest geschikt voor sport eerst', inventory);
}

export default sortBestForSportTv;