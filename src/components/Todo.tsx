interface TodoProps {
  text: string;
}

const Todo: React.FC<TodoProps> = ({ text }) => {
  // document.querySelector('button').addEventListener('click')
  const deleteHandler = () => console.log("deleting");

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
