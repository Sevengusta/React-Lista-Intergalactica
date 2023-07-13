"use client";
import { useState } from "react";
import { TodoItem } from "./types/todoItem";

function Page() {
  const [list, setList] = useState<TodoItem[]>([
    { label: "Comer frutas", checked: false },
    { label: "Comer legumes", checked: false },
  ]);
  const [input, setInput] = useState("");
  const handleClickAdd = () => {
    if (input.trim()) {
      setList([...list, { label: input, checked: false }]);
      setInput("");
    }
  };

  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key != index ?? item));
  };
  const toggleItem = (index: number) => {
    let newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList)
  }

  return (
    <div className=" h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl"> Lista de tarefas</h1>
      <div className="flex gap-3  bg-stone-500 p-2 justify-around">
        <input
          type="text"
          className=" bg-stone-300 rounded-md text-black h-15 p-2 "
          placeholder="Digite seu nome"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-green-500 h-10 rounded-lg p-2 outline-2 border-2 "
          onClick={handleClickAdd}
        >
          Adicionar lista
        </button>
      </div>
      <p>itens na lista: {list.length} </p>
      <ul>
        {list.map((item, key) => (
          <li
            key={key}
            className="h-12 bg-stone-500 flex items-center gap-2 justify-between pl-2 "
          >
            <input
              type="checkbox"
              checked={item.checked}
              className="w-6 h-6 mr-3"
              onChange={() => toggleItem(key)}
            />
            {item.label}
            <button
              onClick={() => deleteItem(key)}
              className="bg-red-500 p-2 rounded-full"
            >
              deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Page;
