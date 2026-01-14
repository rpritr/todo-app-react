import "./styles/general/main.scss";
import Heading from "./Components/Heading/Heading";
import Footer from "./Components/Footer/Footer";
import Todo from "./Components/Todo/Todo";
export function App() {
  return (
    <div className="container">
        <div className="row">
          <Heading title="Daily Todo's" />
            <Todo/>
            <Footer title="vsb.uidev"/>
        </div>
    </div>
  );
}
