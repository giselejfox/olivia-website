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
                <h1>Tell Me About Your Favorite Shoes</h1>
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
                    <label class={"btn border-0 fw-bold " + (!showTextInput ? "text-decoration-line-through" : "")} htmlFor="option-drawing">DRAW</label>
                    <input
                        type="radio"
                        className="btn-check"
                        name="options-base"
                        id="option-text"
                        value="text"
                        checked={showTextInput}
                        onChange={handleRadioChange}
                    />
                    <label className={"btn border-0 fw-bold " + (showTextInput ? "text-decoration-line-through" : "")} htmlFor="option-text">TYPE</label>
                </div>
            </div>
            {showTextInput ? <TextInput showTextInput={showTextInput} /> : <DrawingArea /> }
        </div>
    )
}


function TextInput({ showTextInput }) {

    // Makes it so the person can type right away without clicking the 
    const textInputRef = useRef(null);
    useEffect(() => {
        if (showTextInput === true) {
            textInputRef.current.focus();
        }
    }, [showTextInput])

    return (
        <div>
            <label className="visibility-hidden" for="shoe-text-input"></label>
            <textarea
                id='shoe-text-input'
                className="shoe-text-input"
                type="text-area"
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
