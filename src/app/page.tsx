import { AppUI } from "./appUI";
import { TodoProvider } from "../components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
