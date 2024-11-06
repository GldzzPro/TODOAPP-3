import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import { Item } from "./App";

type Props = {
  item: Item;
  handelChangeIsDoneItem: (id: number, isDone: boolean) => void;
  handelSaveUpdateItemText: (id: number, text: string) => void;
  deleteItem: () => void;
};

export const ToDoItem = ({
  item,
  handelChangeIsDoneItem,
  handelSaveUpdateItemText,
  deleteItem,
}: Props) => {
  const [isEdit, steIsEdit] = useState(false);
  const [textItem, setTextItem] = useState(item.text);
  const [isDone, setIsDone] = useState(item.isDone);

  //Event click isDone
  const HandelChangeIsDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDone(e.target.checked);
    handelChangeIsDoneItem(parseInt(e.target.id, 10), e.target.checked);
  };

  const ShowUpdate = () => {
    steIsEdit(true);
  };

  const SaveUpdateItem = () => {
    steIsEdit(false);
    handelSaveUpdateItemText(item.id, textItem);
  };

  const HandelInputTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextItem(e.target.value);
  };

  return (
    <>
      <tr>
        <td>
          {!isEdit ? (
            <span>{item.text}</span>
          ) : (
            <input
              type="text"
              id={item.id.toString()}
              value={textItem}
              onChange={HandelInputTextChange}
            />
          )}
        </td>
        <td>
          <input
            type="checkbox"
            id={item.id.toString()}
            checked={isDone}
            onChange={HandelChangeIsDone}
          />
        </td>
        <td>
          {!isEdit ? (
            <button style={{ marginLeft: "10px" }} onClick={ShowUpdate}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          ) : (
            <input
              type="submit"
              id={item.id.toString()}
              onClick={SaveUpdateItem}
              value={"Save"}
            />
          )}
        </td>
        <td>
          <button onClick={deleteItem} style={{ marginLeft: "10px" }}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    </>
  );
};
