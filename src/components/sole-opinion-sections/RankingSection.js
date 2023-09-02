
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend'; // Import the TouchBackend


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
        console.log(items)
    };

    return (
        <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }} >
        <div className={"dnd-list"} >
            {items.map((item, index) => (
                <Item key={item.id} item={item} index={index} moveItem={moveItem} />
            ))}
        </div>
        </DndProvider>
    );
}