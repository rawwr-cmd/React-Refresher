import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

const App: React.FC = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Playing guitar" />
      <Todo text="Playing piano" />
      <Todo text="Playing drums" />
      <Modal />
      <Backdrop />
    </div>
  );
};
export default App;
