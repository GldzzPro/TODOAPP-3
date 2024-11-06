import { useMemo, useState } from "react";
import "./App.css";
import { NewToDOForm } from "./NewToDoForm";
import { ToDoItemList } from "./ToDoItemList";

export interface Item {
  id: number;
  text: string;
  isDone: boolean;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<string>("");

  const handelFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleChange = <K extends keyof Item>(
    id: number,
    key: K,
    newValue: Item[K]
  ) => {
    setItems((prevTab) => {
      const itemIndex = prevTab.findIndex((item) => item.id == id);
      prevTab[itemIndex] = { ...prevTab[itemIndex], [key]: newValue };
      return [...prevTab];
    });
  };

  const handelAddItems = (text: string) => {
    setItems((prevTab) => {
      return [...prevTab, { id: prevTab.length, text, isDone: false }];
    });
  };

  const handleDelete = (id: number) => {
    setItems((prev) => {
      return [...prev.filter((item) => item.id != id)];
    });
  };

  const filteredList = useMemo(() => {
    return filter == ""
      ? items
      : items.filter((item) => item.text.includes(filter));
  }, [filter, items]);

  return (
    <>
      <NewToDOForm handelAddItems={handelAddItems} />
      <input type="text" onChange={handelFilterChange} />
      <ToDoItemList
        handleDelete={handleDelete}
        items={filteredList}
        handelChangeIsDoneItem={(id, isDone) =>
          handleChange(id, "isDone", isDone)
        }
        handelSaveUpdateItemText={(id, text) => handleChange(id, "text", text)}
      />
    </>
  );
}
export default App;
