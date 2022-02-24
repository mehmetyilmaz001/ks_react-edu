import React, { useEffect } from "react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../redux/reducers/TodoReducer";
import { Store } from "../../redux/store";
import NewTodoForm from "./components/NewTodoForm";
import TodoItem from "./components/TodoItem";
import { Todo } from "../../model/Todo";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const kargocu = useDispatch();
  const list = useSelector((s: Store) => s.todo.list);

  const fetchTodos = async () => {
    const response = await fetch(
      "https://mocki.io/v1/0210f24c-027b-4700-b84e-51158669147b"
    );
    const data = await response.json();
    console.log(data);
    // dispatch(setList(data));
  };
  // const postTodo  = async(todo: Todo) => {
  //   const response = await fetch("https://mocki.io/v1/0210f24c-027b-4700-b84e-51158669147b", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(todo)
  //   });

  //   const data = await response.json();

  //   console.log("post", data);

  //   // dispatch(setList(data));
  // }

  // Did mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Did mount & update
  useEffect(() => {
    console.log("list", list);
  }, [list]);

  // Did unmount
  useEffect(() => {
    return () => console.log("unmount");
  }, []);

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
            completed={i.completed}
            onEdit={(id) => {
              const promptVal = window.prompt("Todo güncelle", i.title);

              if (promptVal) {
                const newList = [...list];
                const foundIndex = newList.findIndex((f) => f.date === i.date);

                if (foundIndex > -1) {
                  newList[foundIndex] = {
                    ...newList[foundIndex],
                    title: promptVal,
                  };
                  kargocu(setList(newList));
                }
              }
            }}
            onCheck={(checked) => {
              const newList = [...list];
              const foundIndex = newList.findIndex((f) => f.date === i.date);

              if (foundIndex > -1) {
                newList[foundIndex] = {
                  ...newList[foundIndex],
                  completed: checked,
                };
                kargocu(setList(newList));
              }
            }}
            onDelete={(id) => {
              const confirmResult = window.confirm("Emin misiniz?");
              if (confirmResult) {
                const newList = list.filter((i) => i.date !== id);
                kargocu(setList(newList));
              }
            }}
          />
        ))}
      </ul>
      <NewTodoForm
        onNewTodo={(title) => {
          const newItem = { title, completed: false, date: Date.now() };
          const newList = [...list, newItem];
          kargocu(setList(newList));

          // postTodo(newItem);
        }}
      />
    </>
  );

  // list
  // item: checkbox, title, date, edit, delete
  // create
};

export default Home;
