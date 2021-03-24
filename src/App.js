import React, { useState } from 'react';
import Canvas from './Canvas';
import { getRgbFromIndex } from './helper';
import './App.css';


function App() {

    const colorStep = 8;    // step of iterator in each RGB color
    const totalBlockNumber = 32768;  // total blocks that needs to be shown
    const [rowSize, setRowSize] = useState(256);    // row size
    const [blockSize, setBlockSize] = useState(5);  // block px size
    const columnSize = totalBlockNumber / rowSize;    //column size
    /**
     * draw the image
     * @param ctx: context
     * @param w: width
     * @param h: height
     */
    const draw = (ctx, w, h) => {

        const width = w / blockSize;
        const height = h / blockSize;
        // let count = 0; // for testing purpose

        for (let y = 0; y < height; y ++){
            for (let x = 0; x < width; x ++) {
                const colorIndex = y * width + x;
                const {red, green, blue} = getRgbFromIndex(colorIndex, colorStep);
                const rgb = `rgb(${red * colorStep}, ${green * colorStep}, ${blue * colorStep})`;
                ctx.fillStyle = rgb;
                ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);

                // for testing purpose
                // count ++;
                // if (x === width-1 && y === height-1)
                //     console.log(rgb, count);
            }
        }
    }

    /**
     * When width is selected from the dropdown
     * @param e: event
     */
    const handleWidthChange = (e)=>{
        setRowSize(e.target.value);
    }

    /**
     * When block size is selected from the slide
     * @param e: event
     */
    const handleBlockSizeChange = (e)=>{
        setBlockSize(parseInt(e.target.value));
    }

    return (
      <div>
         <h1>Color Generation</h1>
          <div className='container'>
              <span>Width:</span>
              <select value={rowSize} onChange={handleWidthChange}>
                  <option value="32">32</option>
                  <option value="64">64</option>
                  <option value="128">128</option>
                  <option value="256">256</option>
                  <option value="512">512</option>
                  <option value="1024">1024</option>
              </select>
              <span>Height:</span>
              <select disabled={true} value={columnSize}>
                  <option value={columnSize}>{columnSize}</option>
              </select>
              <span>Block Size:</span>
              <input id="range" type="range" value={blockSize} min="5" max="20" step="5" onChange={handleBlockSizeChange}/>
              <span>{blockSize}px</span>
          </div>


          <Canvas draw={draw} width={rowSize * blockSize} height={totalBlockNumber / rowSize * blockSize}>
          </Canvas>
      </div>
  );
}

export default App;
