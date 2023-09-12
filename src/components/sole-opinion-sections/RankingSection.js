import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import RankingShoeSvg from '../../svg-banks/RankingShoeSVG';

const Item = ({ item, index }) => {

  const draggableId = item.id.toString(); // Ensure it's a string

  const lighterColor = lightenColor(item.textColor, 95);

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="dnd-item mx-4 my-1">
          {/* Your item content here */}
          <div className="w-100 p-3 rounded d-flex flex-sm-column justify-content-evenly align-items-center" style={{backgroundColor: lighterColor}}>
            <RankingShoeSvg shoe={item.shoeIcon} />
            <div className="fw-bold" style={{color: item.textColor}}>{item.title}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default function RankingSection({ items, handleSetItems }) {
  
  const moveItem = (result) => {
    if (!result.destination) return;

    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, movedItem);
    handleSetItems(updatedItems);
  };

  const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  return (
    <div className="container ">
      <div className='d-flex flex-column'>
        <h2 className='fw-bold mb-0 me-3'>SHOE VALUES</h2>
        <p className='fst-italic mb-1 my-3'>Drag and drop the values below from most to least</p>
      </div>
      <div className='fw-bold mt-4 d-sm-none'>MOST VALUED</div>
      <div className='d-flex flex-sm-column align-items-center justify-content-center'>
        <DragDropContext onDragEnd={moveItem}>
          <Droppable droppableId="items" direction={width < 576 ? "vertical" : "horizontal"}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="d-flex flex-column flex-sm-row p-4 align-items-center w-100"
                // style={{ display: 'inline-block' }}
              >
                {items.map((item, index) => (
                  <Item key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* Horizonatal line on sm and up*/}
        <div className='w-100 d-none d-sm-flex flex-row justify-content-between align-items-center'>
            <div className='text-nowrap fs-5 fw-semibold'>MOST</div>
            <div className="w-100 arrow-container d-flex align-items-center">
                <div className="line mx-5"></div>
            </div>
            <div className='text-nowrap fs-5 fw-semibold'>LEAST</div>
        </div>
      </div>
      <div className='fw-bold d-sm-none'>LEAST VALUED</div>
    </div>
  );
}


function lightenColor(hexColor, percent) {
  // Ensure the percent is within a valid range (0-100)
  percent = Math.min(100, Math.max(0, percent));

  // Remove the "#" character and parse the hexadecimal color
  hexColor = hexColor.replace(/^#/, '');
  const red = parseInt(hexColor.slice(0, 2), 16);
  const green = parseInt(hexColor.slice(2, 4), 16);
  const blue = parseInt(hexColor.slice(4, 6), 16);

  // Calculate the new RGB values by increasing brightness
  const newRed = Math.min(255, red + (255 - red) * (percent / 100));
  const newGreen = Math.min(255, green + (255 - green) * (percent / 100));
  const newBlue = Math.min(255, blue + (255 - blue) * (percent / 100));

  // Convert the new RGB values back to a hexadecimal color
  const newHexColor = `#${Math.round(newRed).toString(16).padStart(2, '0')}${Math.round(newGreen).toString(16).padStart(2, '0')}${Math.round(newBlue).toString(16).padStart(2, '0')}`;

  return newHexColor;
}

