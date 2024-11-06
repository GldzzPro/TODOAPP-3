import React from "react";
import { Item } from "./App";
import { ToDoItem } from "./ToDoItem";

type Props = {
  items: Item[];
  handelChangeIsDoneItem: (id: number, isDone: boolean) => void;
  handelSaveUpdateItemText: (id: number, text: string) => void;
  handleDelete: (id: number) => void;
};

export const ToDoItemList: React.FC<Props> = ({
  items,
  handelChangeIsDoneItem,
  handelSaveUpdateItemText,
  handleDelete,
}: Props) => {
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <ToDoItem
            item={item}
            key={item.id}
            deleteItem={() => handleDelete(item.id)}
            handelChangeIsDoneItem={handelChangeIsDoneItem}
            handelSaveUpdateItemText={handelSaveUpdateItemText}
          />
        ))}
      </tbody>
    </table>
  );
};
