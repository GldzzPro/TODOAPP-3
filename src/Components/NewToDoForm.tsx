import { useState } from "react";

type Props = {
  handelAddItems: (text: string) => void;
};

export const NewToDOForm = ({ handelAddItems }: Props) => {
  const [itemAddForm, setItemAddForm] = useState("");

  const handelChangeItemAddForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemAddForm(e.target.value);
  };

  const handelAddFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    handelAddItems(itemAddForm);

    setItemAddForm("");
  };

  return (
    <>
      <form onSubmit={handelAddFormSubmit}>
        <input
          type="text"
          value={itemAddForm}
          onChange={handelChangeItemAddForm}
        ></input>
        <button type="submit">ADD</button>
      </form>
    </>
  );
};
