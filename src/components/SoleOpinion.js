import { useState, useRef } from "react"

import FavoriteShoesSection from "./sole-opinion-sections/FavoriteShoesSection"
import DemographicsSection from "./sole-opinion-sections/DemographicsSection";

import { getDownloadURL, getStorage, uploadBytes, ref as storageRef } from "firebase/storage";
import { getDatabase, ref, set as firebaseSet } from 'firebase/database'
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




    // --- Demographics Section States
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const handleSetName = (newName) => { setName(newName) }
    const handleSetAge = (newAge) => { setAge(newAge) }
    const handleSetGender = (newGender) => { setGender(newGender) }

    // --- Favorite Shoe Section States ---
    const [favoriteShoeText, setFavoriteShoeText] = useState('')
    const [lines, setLines] = useState([]);

    const handleSetFavoriteShoeText = (newText) => { setFavoriteShoeText(newText) }
    const handleSetLines = (newLines) => { setLines(newLines) }

    const stageRef = useRef(null);     // drawing pad ref

    // --- Upload Handlers ---
    const saveInfo = async () => {

        // Change to viewing the drawing so we can get the ref

        const db = getDatabase();
        const storage = getStorage();

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
        // Get the url to the picture
        const drawingImageURL = await getDownloadURL(imageRef);
        // Building the info to pass to firebase realtime database
        let entryInfo = {
            name: name,
            age: age,
            gender: gender,
            drawingImage: drawingImageURL
        }
        // Pass up the info and then reset the page
        const entryRef = ref(db, 'entries/' + name + Date.now() )
        firebaseSet(entryRef, entryInfo)
            .then(() => {
                setName('')
                setAge('')
                setGender('')
                setFavoriteShoeText('')
                setLines([])
            })
            .catch((e) => {
                console.log("There was an error " + e)
            })
    };

    return (
        <div className="container">
            <DemographicsSection 
                name={name}
                handleSetName={handleSetName}
                age={age}
                handleSetAge={handleSetAge}
                gender={gender}
                handleSetGender={handleSetGender}
            />
            <FavoriteShoesSection 
                stageRef={stageRef} 
                favoriteShoeText={favoriteShoeText} 
                handleSetFavoriteShoeText={handleSetFavoriteShoeText}
                lines={lines}
                handleSetLines={handleSetLines}
            />
            <button className="btn btn-secondary" onClick={saveInfo} >Save Info</button>
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