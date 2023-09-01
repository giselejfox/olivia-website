import { useRef, useState, useEffect } from "react";

export default function Test() {

    // Form input 
    //      Ppl could draw something (canvas API)
    //      Ppl could rearrange blocks to least/most important
    //      Handwrite response to a question/cursor input
    //          Toggle between writing and typing
    //          Bc Liv wants to hand things to people

    // Have one of the responses be in a gallery other people can see

    return (
        <div className="container">

        </div>
    )

}




function DrawingArea() {

    // Stole from chatgpt

    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
  
    const startDrawing = (e) => {
      setIsDrawing(true);
  
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'black';
  
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };
  
    const draw = (e) => {
      if (!isDrawing) return;
  
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
    };
  
    const endDrawing = () => {
      setIsDrawing(false);
    };
  
    return (
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        width={800} // Set your desired canvas width
        height={600} // Set your desired canvas height
        style={{ border: '1px solid black' }}
      ></canvas>
    );
}