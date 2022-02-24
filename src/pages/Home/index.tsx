import React from "react";
import { FunctionComponent, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoItem from "./components/TodoItem";


interface HomeProps {}

interface Todo {
  title: string;
  completed: boolean;
  date: number;
}

const initialTodos: Todo[] = [
  { title: "Learn React", completed: false, date: Date.now() + 1 },
  { title: "Learn TypeScript", completed: false, date: Date.now() + 2 },
  { title: "Learn Next.js", completed: false, date: Date.now() + 3 },
];

const Home: FunctionComponent<HomeProps> = () => {
  const [list, setList] = useState<Todo[]>(initialTodos);

  return (
    <>
      <h1>Home</h1>
      <span>Toplam: {list.length} adet todo var.</span> <br />
      <span>
        Tamamlanmış: {list.filter((i) => i.completed).length} adet todo var.
      </span>{" "}
      <br />
      <span>
        Tamamlanmamış: {list.filter((i) => !i.completed).length} adet todo var.
      </span>
      <ul style={{ width: 500 }}>
        {list.map((i) => (
          <TodoItem
            key={i.date}
            title={i.title}
            date={i.date}
            onEdit={(id) => {
              const promptVal = window.prompt("Todo güncelle", i.title);

              if (promptVal) {
                const newList = [...list];
                const foundIndex = newList.findIndex((f) => f.date === i.date);

                if (foundIndex > -1) {
                  newList[foundIndex].title = promptVal;
                  setList(newList);
                }
              }
            }}
            onCheck={(checked) => {
              const newList = [...list];
              const foundIndex = newList.findIndex((f) => f.date === i.date);

              if (foundIndex > -1) {
                newList[foundIndex].completed = checked;
                setList(newList);
              }
            }}
            onDelete={(id) => {
              const confirmResult = window.confirm("Emin misiniz?");
              if (confirmResult) {
                const newList = list.filter((i) => i.date !== id);
                setList(newList);
              }
            }}
          />
        ))}
      </ul>
      <NewTodoForm
        onNewTodo={(title) => {
          setList((_list) => [
            ..._list,
            { title, completed: false, date: Date.now() },
          ]);
        }}
      />
    </>
  );

  // list
  // item: checkbox, title, date, edit, delete
  // create
};

export default Home;
