import { useState, useRef } from "react"

import FavoriteShoesSection from "./sole-opinion-sections/FavoriteShoesSection"
import DemographicsSection from "./sole-opinion-sections/DemographicsSection";
import RankingSection from "./sole-opinion-sections/RankingSection";

import { getDownloadURL, getStorage, uploadBytes, ref as storageRef } from "firebase/storage";
import { getDatabase, ref, set as firebaseSet } from 'firebase/database'
import { dataURLtoFile } from "../helpers/dataURLtoFile";
import HeroSection from "./sole-opinion-sections/HeroSection";
import DrawingWarningModal from "./sole-opinion-sections/DrawingWarningModal";

export default function SoleOpinion() {

    // --- Demographics Section States
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState("starting-blank")

    const handleSetName = (newName) => { setName(newName) }
    const handleSetAge = (newAge) => { setAge(newAge) }
    const handleSetGender = (newGender) => { setGender(newGender) }


    // --- Favorite Shoe Section States ---
    const [showTextInput, setShowTextInput] = useState(false)
    const [favoriteShoeText, setFavoriteShoeText] = useState('')
    // const [lines, setLines] = useState([]);

    const handleSetShowTextInput = (newBool) => { setShowTextInput(newBool) }
    const handleSetFavoriteShoeText = (newText) => { setFavoriteShoeText(newText) }
    // const handleSetLines = (newLines) => { setLines(newLines) }

    const canvasRef = useRef(null); // drawing pad ref


    // --- Ranking Section States ---
    const initialItems = [{ id: 1, title: "sustainability", shoeIcon: "oxford", textColor: "#00471B"}, { id: 2, title: "price", shoeIcon: "birkenstock mule", textColor: "#000BA1"}, { id: 3, title: "modularity", shoeIcon: "cowboy boot", textColor: "#380053" }, { id: 4, title: "style", shoeIcon: "heel", textColor: "#FF84F2" }, { id: 5, title: "durability", shoeIcon: "hiking boot", textColor: "#DE0000" }, { id: 6, title: "comfort", shoeIcon: "sneaker", textColor: "#E1A400" }]
    const [items, setItems] = useState(initialItems);

    const handleSetItems = (newRanking) => { setItems(newRanking) }


    // --- Warning Modal State ---
    const [showDrawingWarningModal, setShowDrawingWarningModal] = useState(false)

    const handleSetShowDrawingWarningModal = (newBool) => { setShowDrawingWarningModal(newBool) }

    // --- Upload Handler ---
    const saveInfo = async () => {
        const db = getDatabase();
        const storage = getStorage();
        // Change the favorite shoe input to the drawing so we can get the ref to download the image
        await handleSetShowTextInput(false)
        // Create the DataURL of the drawing
        let canvasDataURL = ''
        await canvasRef.current.exportImage("png")
            .then(data => {
                canvasDataURL = data
            })
            .catch(e => {
                console.log(e);
            });
        // Create a unique filename
        const filename = `drawing-${Date.now()}`;
        // Turn the data URL to a file
        const file = dataURLtoFile(canvasDataURL, filename);
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
            drawingImage: drawingImageURL,
            favoriteShoeText: favoriteShoeText,
            itemRanking: reduceArray(items)
        }
        // Pass up the info and then reset the page
        const entryRef = ref(db, 'entries/' + name + Date.now() )
        firebaseSet(entryRef, entryInfo)
            .then(() => {
                setName('')
                setAge('')
                setGender('')
                setFavoriteShoeText('')
                // setLines([])
            })
            .catch((e) => {
                console.log("There was an error " + e)
            })
    };

    const reduceArray = (array) => {
        return array.reduce((finalObj, item, index) => {
          finalObj[index + 1] = item.title
          return finalObj;
        }, {});
    };

    return (
        <div>
            <HeroSection />
            <div className="sole-option-between-spacer"></div>
            <DemographicsSection 
                name={name}
                handleSetName={handleSetName}
                age={age}
                handleSetAge={handleSetAge}
                gender={gender}
                handleSetGender={handleSetGender}
            />
            <div className="sole-option-between-spacer"></div>
            <FavoriteShoesSection 
                showTextInput={showTextInput}
                handleSetShowTextInput={handleSetShowTextInput}
                canvasRef={canvasRef} 
                favoriteShoeText={favoriteShoeText} 
                handleSetFavoriteShoeText={handleSetFavoriteShoeText}
                // lines={lines}
                // handleSetLines={handleSetLines}
                handleSetShowDrawingWarningModal={handleSetShowDrawingWarningModal}
            />
            <div className="sole-option-between-spacer"></div>
            <RankingSection 
                items={items}
                handleSetItems={handleSetItems}
            />
            <div className="sole-option-between-spacer"></div>
            <div className="w-100 d-flex justify-content-center py-5">
                <button className="btn btn-secondary" onClick={saveInfo} >Save Info</button>
            </div>
            {/* <div>{favoriteShoeText}</div> */}
            <DrawingWarningModal 
                showDrawingWarningModal={showDrawingWarningModal}
                handleSetShowDrawingWarningModal={handleSetShowDrawingWarningModal}
                handleSetShowTextInput={handleSetShowTextInput}
            />
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