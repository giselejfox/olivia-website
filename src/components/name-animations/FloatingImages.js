import { useState } from "react";

function DraggableDiv({ initialPosition }) {
    const [pos, setPos] = useState(initialPosition);
    
    const dragMouseDown = (e) => {
        e.preventDefault();
        // get the mouse cursor position at startup:
        const startX = e.clientX;
        const startY = e.clientY;
    
        const elementDrag = (e) => {
            e.preventDefault();
            // calculate the new cursor position:
            const newX = pos.x - (startX - e.clientX);
            const newY = pos.y - (startY - e.clientY);
            // set the element's new position:
            setPos({ x: newX, y: newY });
        };
    
        const closeDragElement = () => {
            // remove event listeners when dragging ends
            document.removeEventListener('mousemove', elementDrag);
            document.removeEventListener('mouseup', closeDragElement);
        };
    
        // add event listeners for dragging
        document.addEventListener('mousemove', elementDrag);
        document.addEventListener('mouseup', closeDragElement);
    };

    return (
        <div
            className="draggable-div"
            style={{ top: pos.y, left: pos.x }}
            onMouseDown={dragMouseDown}
        >
            {/* <div className="content">Drag me</div> */}
            <img src="img/ShoeFor.png" className="homepage-shoe" alt="shoe" />
        </div>
    )
}


export default function FloatingImages() {

    const numberOfDivs = 3; // Change this to the desired number of draggable divs
    const initialPositions = Array.from({ length: numberOfDivs }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));

    console.log(initialPositions)

    const divsToAdd = initialPositions.map((initialPosition, index) => (
        <DraggableDiv key={index} initialPosition={initialPosition} />
    ))
   

    return (
        <h1 className="pb-4 justify-self-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-row">
                    OLIVIA
                </div>
                <div className="d-flex flex-row">
                    OOMEN
                </div>
                {divsToAdd}
            </div>
        </h1> 
    )
}