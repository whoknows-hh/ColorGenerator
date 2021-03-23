import React, { useRef , useEffect} from 'react';

const Canvas = props  => {

    const canvasRef = useRef(null);

    const draw = ctx => {
        const colorSize = 10;
        const colorStep = 8;
        const width = 32;
        const height = 1024
        let count = 0;

        for (let y= 0; y<height; y++){
            for (let x=0; x<width; x++) {

                const colorIndex = y * width + x;
                const red = Math.floor(colorIndex / 1024);
                const green = Math.floor((colorIndex - red * 1024) / 32);
                const blue = colorIndex - red * 1024 - green * 32;
                const rgb = `rgb(${red * colorStep},${green * colorStep},${blue * colorStep})`;
                ctx.fillStyle = rgb;
                ctx.fillRect(x * colorSize, y * colorSize, colorSize, colorSize);
                count ++;
                if (x === width-1 && y === height-1)
                    console.log(rgb, count);

            }
        }
    }

    useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

        //Our draw come here
        draw(context)
    }, [draw])

    return <canvas ref = {canvasRef} {...props}/>
}

export default Canvas;
