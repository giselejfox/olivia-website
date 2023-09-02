import { useEffect, useRef, useState } from "react";
// import { Stage, Layer, Line } from 'react-konva';
// import Sketch from 'react-p5';
// import SignatureCanvas from 'react-signature-canvas'
import { ReactSketchCanvas } from 'react-sketch-canvas';


// TODO: Allow someone to clear the drawing pad
// TODO: MAYBE allow someone to erase the drawing pad

export default function FavoriteShoesSection({ canvasRef, favoriteShoeText, handleSetFavoriteShoeText, lines, handleSetLines, showTextInput, handleSetShowTextInput }) {

    const handleRadioChange = (e) => { handleSetShowTextInput(e.target.value === 'text'); };

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
                    <label className={"btn border-0 fw-bold " + (!showTextInput ? "text-decoration-line-through" : "")} htmlFor="option-drawing">DRAW</label>
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
                <div>
                    <ReactSketchCanvasArea canvasRef={canvasRef}/>
                    <CanvasButtons canvasRef={canvasRef} />
                </div>

            }
        </div>
    )
}

function ReactSketchCanvasArea({ canvasRef }) {
    return (
        <ReactSketchCanvas
            ref={canvasRef}
            width="600"
            height="400"
            strokeWidth={4}
            strokeColor="black"
            className="react-sketch-canvas"
        />
    );
}

function CanvasButtons({ canvasRef }) {

    const handleClearCanvas = () => { canvasRef.current.clearCanvas() }
    const handleUndo = () => { canvasRef.current.undo() }
    const handleRedo = () => { canvasRef.current.redo() }

    return (
        <div className="d-flex flex-row my-3">
            <button className="btn btn-primary me-3" onClick={handleUndo} >Undo</button>
            <button className="btn btn-primary me-3" onClick={handleRedo} >Redo</button>
            <button className="btn btn-primary me-3" onClick={handleClearCanvas} >Clear</button>
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
