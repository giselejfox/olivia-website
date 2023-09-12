import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import RankingShoeSvg from '../../svg-banks/RankingShoeSVG';

const Item = ({ item, index }) => {

  const draggableId = item.id.toString(); // Ensure it's a string

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="dnd-item mx-4 d-flex flex-column justify-content-end"
        >
          {/* Your item content here */}
          <RankingShoeSvg shoe={item.shoeIcon} />
          <div className="mt-3 fw-bold" style={{color: item.textColor}}>{item.title}</div>
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

  return (
    <div className="container ">
      <div className='d-flex flex-column'>
        <h2 className='fw-bold mb-0 me-3'>SHOE VALUES</h2>
        <p className='fst-italic mb-1 my-3'>drag and drop</p>
      </div>
      <div className='d-flex flex-column align-items-center justify-content-center d-none d-md-flex py-5'>
        <DragDropContext onDragEnd={moveItem}>
          <Droppable droppableId="items" direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="d-flex p-4 align-items-end"
                style={{ display: 'inline-block' }}
              >
                {items.map((item, index) => (
                  <Item key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className='w-100 d-flex flex-row justify-content-between align-items-center'>
            <div className='text-nowrap fs-5 fw-semibold'>MOST</div>
            <div className="w-100 arrow-container d-flex align-items-center">
                <div className="line mx-5"></div>
            </div>
            <div className='text-nowrap fs-5 fw-semibold'>LEAST</div>
        </div>
      </div>
    </div>
  );
}

