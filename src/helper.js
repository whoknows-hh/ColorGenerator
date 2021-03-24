/**
 * Get Rgb Index from color Index
 * @param index: order of the color block
 * @param step: color step
 * @returns {{red: number, green: number, blue: number}}
 */
const getRgbFromIndex = (index, step) =>{
    const base = 256 / step;
    const red = Math.floor(index / Math.pow(base,2));
    const green = Math.floor((index - red * Math.pow(base,2)) / base);
    const blue = index - red * Math.pow(base,2) - green * base;
    return { red, green, blue };
}

export { getRgbFromIndex };
