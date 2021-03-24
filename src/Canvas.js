import React, { useRef , useEffect} from 'react';

const Canvas = props  => {

    const { draw, ...rest } = props
    const canvasRef = useRef(null);

    useEffect(() => {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const render = () => {
                draw(context,props.width,props.height)
            }
            render()
        }
    )

    return <canvas ref = {canvasRef} {...rest}/>
}

export default Canvas;
