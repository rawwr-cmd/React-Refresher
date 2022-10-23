import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

interface TodoProps {
  text: string;
}

const Todo: React.FC<TodoProps> = ({ text }) => {
  // document.querySelector('button').addEventListener('click')
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
    console.log("deleting");
  };

  // console.log(modalIsOpen);
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* {modalIsOpen ? <Modal /> : null} */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default Todo;
