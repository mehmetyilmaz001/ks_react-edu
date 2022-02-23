import { FC, FunctionComponent, useState } from "react";

interface HomeProps {}

interface Todo {
  title: string;
  completed: boolean;
  date: number;
}

const initialTodos: Todo[] = [
  { title: "Learn React", completed: false, date: Date.now() },
  { title: "Learn TypeScript", completed: false, date: Date.now() },
  { title: "Learn Next.js", completed: false, date: Date.now() },
];

const Home: FunctionComponent<HomeProps> = () => {
  const [list, setList] = useState<Todo[]>(initialTodos);
  const [title, setTitle] = useState<string>("");

  const addTodo = () => {
    if (title) {
      setList((_list) => [
        ..._list,
        { title, completed: false, date: Date.now() },
      ]);

      setTitle("");
    }
  };

  return (
    <>
      <h1>Home</h1>
      <p>Toplam {list.length} adet todo var.</p>
      <ul>
        {list.map((i) => (
          <TodoItem
            title={i.title}
            date={i.date}
            onCheck={() => {}}
            onDelete={() => {}}
          />
        ))}
      </ul>

      <div style={{ display: "flex" }}>
        <input
          type={"text"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button onClick={() => addTodo()}>Yeni Todo Ekle</button>
      </div>
    </>
  );

  // list
  // item: checkbox, title, date, edit, delete
  // create
};

export default Home;

interface ITodoItem {
  title: string;
  date: number;
  onCheck: () => void;
  onDelete: () => void;
}

const TodoItem: FC<ITodoItem> = ({ title, date }) => {
  return (
    <li style={{ display: "flex" }}>
      <input type={"checkbox"} />
      <span>
        {title} <i>{date}</i>
      </span>
      <div style={{ marginLeft: 8 }}>
        <button>Düzenle</button>
        <button>Sil</button>
      </div>
    </li>
  );
};
