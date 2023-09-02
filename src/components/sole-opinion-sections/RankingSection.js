
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

export default function RankingSection() {
    // const initialItems = Array.from({ length: 6 }, (_, index) => ({
    //     id: `item-${index}`,
    //     content: `Item ${index + 1}`,
    // }));

    // Sustainability, price, modularity, style, durability
    const initialItems = [
        {
            id: 1,
            title: "sustainability"
        }, 
        {
            id: 2,
            title: "price"
        }, 
        {
            id: 3,
            title: "modularity"
        }, 
        {
            id: 4,
            title: "style"
        },
        {
            id: 5,
            title: "durability"
        }
    ]

    const [items, setItems] = useState(initialItems);

    const moveItem = (fromIndex, toIndex) => {
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(fromIndex, 1);
        updatedItems.splice(toIndex, 0, movedItem);
        setItems(updatedItems);
        console.log(items)
    };

    return (
        <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }} >
        <div className={"dnd-list"} >
            {items.map((item, index) => (
                <Item key={item} item={item} index={index} moveItem={moveItem} />
            ))}
        </div>
        </DndProvider>
    );
}





// const getListStyle = () => ({
//   display: 'flex',
//   overflowX: 'auto',
//   padding: '8px',
// });




// const getItemStyle = () => ({
    //   userSelect: 'none',
    //   padding: '8px',
    //   margin: '0 8px 0 0',
    //   background: 'lightgrey',
    //   display: 'inline-block',
    //   borderRadius: '4px',
    //   boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    //   cursor: 'pointer',
    //   transition: 'background-color 0.2s ease',
    // });