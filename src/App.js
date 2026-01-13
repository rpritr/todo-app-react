import "./styles/general/main.scss";
import Heading from "./Components/Heading/Heading";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import Todo from "./Components/Todo/Todo";
export function App() {
  return (
    <div className="container">
        <div className="row">
          <Heading title="Daily Todo's" />
            <Form>
                <Input title="Add a task" id="task" name="task"/>
                <Button title="Add Task"/>
            </Form>
            <Todo/>
            <Footer title="vsb.uidev"/>
        </div>
    </div>
  );
}
