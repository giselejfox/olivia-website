import { useEffect, useRef } from "react";
// import { Stage, Layer, Line } from 'react-konva';
// import Sketch from 'react-p5';
// import SignatureCanvas from 'react-signature-canvas'
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// TODO: Allow someone to clear the drawing pad
// TODO: MAYBE allow someone to erase the drawing pad

export default function FavoriteShoesSection({ canvasRef, favoriteShoeText, handleSetFavoriteShoeText, lines, handleSetLines, showTextInput, handleSetShowTextInput, handleSetShowDrawingWarningModal }) {

    // const handleRadioChange = (e) => { handleSetShowTextInput(e.target.value === 'text'); };
    const handleChooseDrawing = () => { handleSetShowTextInput(false) }
    
    const handleChooseText = () => {
        // Check if there are any SVG paths in the canvas / make sure the person hasn't drawn anything
        const divElement = document.getElementById('react-sketch-canvas');
        const svgPaths = divElement.getElementsByTagName('path');
        if (svgPaths.length > 0) {
            // If they've drawn something we pull up the modal to ask if they want to continue
            handleSetShowDrawingWarningModal(true)
        } else {
            // if they haven't drawn anything then there's nothing to lose and they can head over to typing
            handleSetShowTextInput(true)
        }
    }

    return (
        <div className="container d-flex flex-column justify-content-center">
            <div className="d-flex flex-row justify-content-between align-items-center mb-4">
                <h2 className="fw-bold d-flex flex-column">
                    <span>WHAT'S YOUR FAVORITE PAIR OF SHOES AND WHY?</span>
                    <span>HOW LONG HAVE YOU HAD THEM?</span>
                </h2>
                <div className="d-flex flex-nowrap mb-3">
                    <input
                        type="radio"
                        className="btn-check"
                        name="options-base"
                        id="option-drawing"
                        value="drawing"
                        checked={!showTextInput}
                        onChange={handleChooseDrawing}
                    />
                    <label className={"btn border-0 fw-bold " + (!showTextInput ? "text-decoration-line-through" : "")} htmlFor="option-drawing">WRITE</label>
                    <input
                        type="radio"
                        className="btn-check"
                        name="options-base"
                        id="option-text"
                        value="text"
                        checked={showTextInput}
                        onChange={handleChooseText}
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
            id="react-sketch-canvas"
        />
    );
}

function CanvasButtons({ canvasRef }) {

    const handleClearCanvas = () => { canvasRef.current.clearCanvas() }
    const handleUndo = () => { canvasRef.current.undo() }
    const handleRedo = () => { canvasRef.current.redo() }

    return (
        <div className="d-flex flex-row my-3">
            <button className="btn me-3" onClick={handleUndo} ><svg classname="undo-svg" height="1em" viewBox="0 0 512 512"><path d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"/></svg></button>
            <button className="btn me-3" onClick={handleRedo} ><svg classname="redo-svg" height="1em" viewBox="0 0 512 512"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg></button>
            <button className="btn me-3" onClick={handleClearCanvas} ><svg classname="clear-svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></button>
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
