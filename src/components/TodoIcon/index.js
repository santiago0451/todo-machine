import CheckIcon from "./icons/CheckIcon";
import DeleteIcon from "./icons/DeleteIcon";
import "./TodoIcon.css";

const iconTypes = {
  check: <CheckIcon />,
  delete: <DeleteIcon />,
};

function TodoIcon({ type, onClick, completed }) {
  return (
    <span
      className={`Icon-container Icon-container-${type} ${
        completed ? "Icon-container-completed" : ""
      }`}
      onClick={onClick}
    >
      {iconTypes[type]}
    </span>
  );
}

export { TodoIcon };
