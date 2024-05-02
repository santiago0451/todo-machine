import { AppUI } from "./app-ui";
import { TodoProvider } from "../components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
