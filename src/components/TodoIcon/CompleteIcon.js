import { TodoIcon } from ".";

export function CompleteIcon({ completed, onComplete }) {
  return <TodoIcon type="check" onClick={onComplete} completed={completed} />;
}
