import { useRef, useState, useEffect } from "react";
import { Stage, Layer, Line } from 'react-konva';

export default function Test() {

    // Form input 
    //      Ppl could rearrange blocks to least/most important
    //      Ppl could draw something (canvas API) // Handwrite response to a question/cursor input
    //          Toggle between writing and typing
    //          Bc Liv wants to hand things to people
    //      Drag and drop pictures of different parts of shoes to make a shoes themselves


    // ipad be able to scroll down -- maybe make phone go into horizontal format?
    // computer be able to scroll down

    // Have one of the responses be in a gallery other people can see


    // STRUCTURE

    // beginning demographic info
    //      Age/gender/name (all optional, can also put pseudonym)

    // Writing/drawing prompt
    //      Prompt: what they're favorite shoes are and why (how long they've had them) (can add any other details they think are important)
    
    // Sorting prompt
    //      Prompt: sort factors from most to least important 
    //      Sustainability, price, modularity, style, durability

    // Make your ideal shoe // collage one
    

    // DESIGN

    // All on white background / fairly minimal
    // Needs to be accessible



    return (
        <div className="container">
            <FavoriteShoesPrompt />
        </div>
    )

}

function FavoriteShoesPrompt() {
    const [showTextInput, setShowTextInput] = useState(false)

    const handleRadioChange = (e) => {
        setShowTextInput(e.target.value === 'text');
    };

    return (
        <div className="d-flex flex-column">
            <div className="mb-3">
                <input
                    type="radio"
                    className="btn-check"
                    name="options-base"
                    id="option-drawing"
                    value="drawing"
                    checked={!showTextInput}
                    onChange={handleRadioChange}
                />
                <label class="btn" htmlFor="option-drawing">Draw</label>
                <input
                    type="radio"
                    className="btn-check"
                    name="options-base"
                    id="option-text"
                    value="text"
                    checked={showTextInput}
                    onChange={handleRadioChange}
                />
                <label class="btn" htmlFor="option-text">Type</label>
            </div>
            {showTextInput ? <TextInput /> : <DrawingArea /> }
        </div>
    )
}


function TextInput() {
    return (
        <div class="input-group">
            <span class="input-group-text">Add Text Here</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
    )
}

function DrawingArea() {
    const [lines, setLines] = useState([]);
    const isDrawing = useRef(false);

    // useEffect(() => {
    //     //loadImage();
    // }, [clearLines])
    
    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { points: [pos.x, pos.y] }]);
    };
    
    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
          return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
    
        // To draw line
        let lastLine = lines[lines.length - 1];
        
        if(lastLine) {
            // add point
            lastLine.points = lastLine.points.concat([point.x, point.y]);
                
            // replace last
            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.concat());
        }
        
    };
    
    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    return (
        <div className=" text-center text-dark">
            <Stage
                width={1200}
                height={600}
                onMouseDown={handleMouseDown}
                onMousemove={handleMouseMove}
                onMouseup={handleMouseUp}
                className="canvas-stage border"
            >
                <Layer>
                    {lines.map((line, i) => (
                        <Line
                        key={i}
                        points={line.points}
                        stroke="#df4b26"
                        strokeWidth={2}
                        tension={0.5}
                        lineCap="round"
                        globalCompositeOperation={
                            line.tool === 'eraser' ? 'destination-out' : 'source-over'
                        }
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    )
}














// function DrawingArea1() {

//     // Stole from chatgpt

//     // TODO: Look as close as possible to black sharpie

//     const canvasRef = useRef(null);
//     const [isDrawing, setIsDrawing] = useState(false);
  
//     const startDrawing = (e) => {
//         setIsDrawing(true);
    
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         const rect = canvas.getBoundingClientRect();

//         ctx.lineWidth = 2;
//         ctx.lineCap = 'round';
//         ctx.strokeStyle = 'black';
    
//         ctx.beginPath();
//         //   ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
//         ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
//     };
  
//     const draw = (e) => {
//         if (!isDrawing) return;
    
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         const rect = canvas.getBoundingClientRect();
    
//         // ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
//         ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
//         ctx.stroke();
//     };
  
//     const endDrawing = () => {
//         setIsDrawing(false);
//     };
  
//     return (
//       <canvas
//         ref={canvasRef}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={endDrawing}
//         onMouseLeave={endDrawing}
//         width={800} // Set your desired canvas width
//         height={600} // Set your desired canvas height
//         style={{ border: '1px solid black' }}
//       ></canvas>
//     );
// }