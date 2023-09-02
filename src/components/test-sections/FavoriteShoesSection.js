import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Line } from 'react-konva';

// TODO: Allow someone to clear the drawing pad
// TODO: MAYBE allow someone to erase the drawing pad

export default function FavoriteShoesPrompt({ stageRef, favoriteShoeText, handleSetFavoriteShoeText, lines, handleSetLines }) {
    
    const [showTextInput, setShowTextInput] = useState(false)

    const handleRadioChange = (e) => {
        setShowTextInput(e.target.value === 'text'); 
    };

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
            {showTextInput ? 
                <TextInput 
                    showTextInput={showTextInput} 
                    favoriteShoeText={favoriteShoeText} 
                    handleSetFavoriteShoeText={handleSetFavoriteShoeText}
                /> 
                : 
                <DrawingArea 
                    stageRef={stageRef}
                    lines={lines}
                    handleSetLines={handleSetLines}
                /> 
            }
        </div>
    )
}


function TextInput({ showTextInput, favoriteShoeText, handleSetFavoriteShoeText }) {

    // Makes it so the person can type right away without clicking the box
    const textInputRef = useRef(null);
    useEffect(() => {
        if (showTextInput === true) {
            textInputRef.current.focus();
        }
    }, [showTextInput])

    const handleTextChange = (e) => { handleSetFavoriteShoeText(e.target.value) }

    return (
        <div>
            <label className="visibility-hidden" for="shoe-text-input"></label>
            <textarea
                id='shoe-text-input'
                value={favoriteShoeText}
                onChange={handleTextChange}
                className="shoe-text-input"
                type="text-area"
                ref={textInputRef}
                placeholder="my favorite shoes are..."
            />
        </div>
    );
}

function DrawingArea({ stageRef, lines, handleSetLines }) {
    // const [lines, setLines] = useState([]);
    const isDrawing = useRef(false);

    // useEffect(() => {
    //     //loadImage();
    // }, [clearLines])
    
    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        handleSetLines([...lines, { points: [pos.x, pos.y] }]); // CHANGE LINES HERE
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
            handleSetLines(lines.concat());  // CHANGE LINES HERE
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
                ref={stageRef}
            >
                <Layer>
                    {lines.map((line, i) => (
                        <Line
                        key={i}
                        points={line.points}
                        stroke="black"
                        strokeWidth={4}
                        tension={0.5}
                        lineCap="round"
                        lineJoin='round'
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
