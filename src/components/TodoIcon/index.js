import CheckIcon from "./icons/CheckIcon";
import DeleteIcon from "./icons/DeleteIcon";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckIcon fill={color} />,
  delete: (color) => <DeleteIcon fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
