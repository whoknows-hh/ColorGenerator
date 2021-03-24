import React from 'react';
import Canvas from './Canvas'

function App() {

    const colorSize = 5;   // size of each color block
    const colorStep = 8;    // step of iterator in each RGB color
    const canvasWidth = 256;    //width of the canvas
    const canvasHeight = 128;   //height of the canvas

    /**
     * draw the image
     * @param ctx: context
     * @param w: width
     * @param h: height
     */
    const draw = (ctx, w, h) => {

        const width = w / colorSize;
        const height = h / colorSize;
        // let count = 0; // for testing purpose

        for (let y = 0; y < height; y ++){
            for (let x = 0; x < width; x ++) {
                const colorIndex = y * width + x;
                const {red, green, blue} = getRgbFromIndex(colorIndex, colorStep);
                const rgb = `rgb(${red * colorStep},${green * colorStep},${blue * colorStep})`;
                ctx.fillStyle = rgb;
                ctx.fillRect(x * colorSize, y * colorSize, colorSize, colorSize);

                // testing purpose
                // count ++;
                // if (x === width-1 && y === height-1)
                //     console.log(rgb, count);
            }
        }
    }

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

    return (
      <div>
         <h1>Color Generator</h1>
          <Canvas draw={draw} width={canvasWidth * colorSize} height={canvasHeight * colorSize}>
          </Canvas>
      </div>
  );
}

export default App;
