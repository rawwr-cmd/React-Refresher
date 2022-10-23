interface closeModalHandler {
  onCancel: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<closeModalHandler> = ({ onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <h1>Are you sure?</h1>
      <button className="btn btn--alt" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
