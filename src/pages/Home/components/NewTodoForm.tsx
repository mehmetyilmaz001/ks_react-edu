import { FunctionComponent, useState } from "react";


interface NewTodoFormProps {
  onNewTodo: (title: string) => void;
}

const NewTodoForm: FunctionComponent<NewTodoFormProps> = ({ onNewTodo }) => {
  const [title, setTitle] = useState<string>("");

  const addTodo = () => {
    if (title) {
      onNewTodo(title);
      setTitle("");
    }
  };

  return (
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
  );
};

export default NewTodoForm;
