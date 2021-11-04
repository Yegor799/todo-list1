import Container from "./components/Container/Container";
import ToDoList from "./components/todos/ToDoList/ToDoList";
import InProgressList from "./components/todos/InProgressList/InProgressList";
import DoneList from "./components/todos/DoneList/DoneList";
import "./App.css"

function App() {
  return (
    <Container >
      <h1>To Do List</h1>
      <div className="container">
      <ToDoList />
      <InProgressList />
      <DoneList/>
      </div>
    </Container>
  );
}

export default App;
