import { useState, useRef } from "react"
import FavoriteShoesPrompt from "./test-sections/FavoriteShoesSection"

import { getDownloadURL, getStorage, uploadBytes, ref as storageRef } from "firebase/storage";
import { dataURLtoFile } from "../helpers/dataURLtoFile";

export default function SoleOpinion() {

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
    const storage = getStorage();

    // Text area state
    const [favoriteShoeText, setFavoriteShoeText] = useState('')
    const handleSetFavoriteShoeText = (newText) => { setFavoriteShoeText(newText) }
    
    // drawing pad ref
    const stageRef = useRef(null);

    const saveImage = async () => {
        // Create the DataURL of the drawing
        const stageDataURL = stageRef.current.toDataURL();

        // Create a unique filename
        const filename = `drawing-${Date.now()}`;

        // Turn the data URL to a file
        const file = dataURLtoFile(stageDataURL, filename);

        // Create a reference to the storage location
        const imageRef = storageRef(storage, 'favoriteShoeDrawing/' + filename + '.jpg');
      
        // Upload the image to Firebase Storage
        await uploadBytes(imageRef, file)
    };

    return (
        <div className="container">
            <FavoriteShoesPrompt stageRef={stageRef} favoriteShoeText={favoriteShoeText} handleSetFavoriteShoeText={handleSetFavoriteShoeText} />
            <button className="btn btn-secondary" onClick={saveImage} >Save Info</button>
            {/* <div>{favoriteShoeText}</div> */}
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