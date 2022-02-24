import React from "react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../../redux/reducers/TodoReducer";
import { Store } from "../../redux/store";
import NewTodoForm from "./components/NewTodoForm";
import TodoItem from "./components/TodoItem";


interface HomeProps {}


const Home: FunctionComponent<HomeProps> = () => {
  const dispatch = useDispatch();
  const list = useSelector( (s: Store) => s.todo.list)

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
                  newList[foundIndex] = {...newList[foundIndex], title:promptVal};
                  dispatch(setList(newList));
                }
              }
            }}
            onCheck={(checked) => {
              const newList = [...list];
              const foundIndex = newList.findIndex((f) => f.date === i.date);

              if (foundIndex > -1) {
                newList[foundIndex] = {...newList[foundIndex], completed: checked};
                dispatch(setList(newList));
              }
            }}
            onDelete={(id) => {
              const confirmResult = window.confirm("Emin misiniz?");
              if (confirmResult) {
                const newList = list.filter((i) => i.date !== id);
                dispatch(setList(newList));
              }
            }}
          />
        ))}
      </ul>
      <NewTodoForm
        onNewTodo={(title) => {
          const newList = [...list, { title, completed: false, date: Date.now()}]
          dispatch(setList(newList))
        }}
      />
    </>
  );

  // list
  // item: checkbox, title, date, edit, delete
  // create
};

export default Home;
