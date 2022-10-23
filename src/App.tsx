import Todo from "./components/Todo";

const App: React.FC = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Playing guitar" />
      <Todo text="Playing piano" />
      <Todo text="Playing drums" />
    </div>
  );
};
export default App;
