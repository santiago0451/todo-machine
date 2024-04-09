import CheckSVG from "./icons/check.svg";
import DeleteSVG from "./icons/delete.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  console.log(<CheckSVG />);

  console.log(type, color);
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {/* {iconTypes[type](color)} */}
    </span>
  );
}

export { TodoIcon };
