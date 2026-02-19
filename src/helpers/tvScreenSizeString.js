function tvScreenSizeString(screenSizeArray) {
    let output = '';
    for (let i = 0; i < screenSizeArray.length; i++) {
        const sizeInInches = screenSizeArray[i];
        const sizeInCentimeters = Math.round(screenSizeArray[i] * 2.54);

        output = output + `${sizeInInches} inch (${sizeInCentimeters} cm)`;

        if (i < screenSizeArray.length - 1) {
            output = `${output} | `;
        }
    }
    return output;
}

export default tvScreenSizeString;