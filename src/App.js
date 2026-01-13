import "./styles/general/main.scss";
import Heading from "./Components/Heading/Heading";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
export function App() {
  return (
    <div className="container">
      <Heading title="Daily Todo's" />
        <form>
            <Input title="Add a task" id="task" name="task"/>
            <Button title="Add Task"/>
        </form>
      <p>Edit <code>src/App.tsx</code> to get started!</p>
    </div>
  );
}
