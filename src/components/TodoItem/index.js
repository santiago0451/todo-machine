import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <div className="TodoItemIcons">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <DeleteIcon onDelete={props.onDelete} />
      </div>
    </li>
  );
}

export { TodoItem };
