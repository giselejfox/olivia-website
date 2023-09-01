import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Line } from 'react-konva';

export default function FavoriteShoesPrompt() {
    const [showTextInput, setShowTextInput] = useState(false)

    const handleRadioChange = (e) => {
        setShowTextInput(e.target.value === 'text'); 
    };

    // toggle to match the strikeout like the rest of the webiste

    // cursor just starts blinking for the text box

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
                <h1>Prompt</h1>
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
            </div>
            {showTextInput ? <TextInput showTextInput={showTextInput} /> : <DrawingArea /> }
        </div>
    )
}


function TextInput({ showTextInput }) {

    // have an imaginary cursor blink

    // return (
    //     <div class="input-group">
    //         <span class="input-group-text">Add Text Here</span>
    //         {/* <textarea class="form-control" aria-label="With textarea"></textarea> */}
    //         <input type="text" class="rq-form-element" autofocus/>
    //     </div>
    // )

    const textInputRef = useRef(null);

    useEffect(() => {
        if (showTextInput === true) {
            textInputRef.current.focus();
        }
    }, [showTextInput])

    return (
        <div>
          <input
            className="border-none"
            type="text"
            ref={textInputRef}
            // placeholder="Click the button to focus and start typing here"
          />
        </div>
    );
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
