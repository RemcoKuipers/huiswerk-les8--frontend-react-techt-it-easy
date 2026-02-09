import {inventory} from "../constants/inventory.js";

function sortScreenSizeTv() {
    inventory.sort((a, b) => {
        const screenSizeA = a.availableSizes[a.availableSizes.length - 1];
        const screenSizeB = b.availableSizes[b.availableSizes.length - 1];
        return screenSizeB - screenSizeA;
    });
    console.log('Grootste schermgrootte eerst', inventory);
}

export default sortScreenSizeTv;