import { FC } from "react";
import { Todo } from "../../../model/Todo";

interface ITodoItem extends Todo {
    onCheck: (checked: boolean) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
  }
  
  const TodoItem: FC<ITodoItem> = ({ title, date, completed, onDelete, onCheck, onEdit }) => {
    const formItemId = `todo-checkbox-${date}`;
    return (
      <li style={{ display: "flex", justifyContent: 'space-between' }}>
  
        <div>
          <input 
            type={"checkbox"} 
            id={formItemId} 
            checked={completed}
            onChange={(e) => onCheck(e.target.checked)} />

          <label htmlFor={formItemId}>
            {title} - &nbsp; <i>{new Date(date).toLocaleString("tr-TR")}</i>
          </label>
        </div>
  
        <div style={{ marginLeft: 8 }}>
          <button onClick={() => onEdit(date)}>Düzenle</button>
          <button onClick={() => onDelete(date)}>Sil</button>
        </div>
  
      </li>
    );
  };


export default TodoItem;