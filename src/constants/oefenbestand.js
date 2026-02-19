// oefenbestand.js
import {inventory} from "./inventory.js";

function showOutcomeInConsole() {

    // ***Opdracht 1a***

    const tvTypes = inventory.map((tvType) => {
        return tvType.type;
    });
    console.log(tvTypes);

    // ***Opdracht 1b***

    const tvSoldOut = inventory.filter((tv) => {
        return tv.originalStock === tv.sold

    });
    console.log(tvSoldOut);

    // ***Opdracht 1c***

    const specificTv = inventory.find((tv) => {
        return tv.type === "NH3216SMART"
    });
    console.log(specificTv);

    // ***Opdracht 1d***

    const sportTv = inventory.map((tv) => {
        if (tv.refreshRate >= 100) {
            return {name: `${tv.brand}, ${tv.name}`, suitable: true};
        } else {
            return {name: `${tv.brand}, ${tv.name}`, suitable: false};
        }
    });
    console.log(sportTv);

    // ***Opdracht 1e***

    const bigTv = inventory.filter((tv) => {
        const bigScreen = tv.availableSizes.find((size) => {
            return size >= 65;
        })
        return bigScreen;
    });
    console.log(bigTv);

    // ***Opdracht 1f***

    const ambilightTV = inventory.filter((tv) => {
        const hasAmbilight = tv.options.find((option) => {
            return option.name === "ambiLight"
        });
        if (hasAmbilight.applicable === true) {
            return true;
        }
    });
    console.log(ambilightTV);
}


export default showOutcomeInConsole