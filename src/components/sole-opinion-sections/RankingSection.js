
import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend'; // Import the TouchBackend

// A lot of this was copied from chatgpt and then simplified by me

const ItemType = 'ITEM';

const Item = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className={"dnd-item"}>
      {item.title}
    </div>
  );
};

export default function RankingSection({ items, handleSetItems }) {

    const moveItem = (fromIndex, toIndex) => {
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(fromIndex, 1);
        updatedItems.splice(toIndex, 0, movedItem);
        handleSetItems(updatedItems);
    };

    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='w-100'>
                <div className='d-flex justify-content-between'>
                    <div>Most Important</div>
                    <div>Least Important</div>
                </div>
                <div className="arrow-container d-flex align-items-center">
                    <div className="arrow-left"></div>
                    <div className="line"></div>
                    <div className="arrow-right"></div>
                </div>
            </div>
            <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }} >
                <div className={"dnd-list"} >
                    {items.map((item, index) => (
                        <Item key={item.id} item={item} index={index} moveItem={moveItem} />
                    ))}
                </div>
            </DndProvider>
        </div>
    );
}