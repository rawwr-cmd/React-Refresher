const Modal: React.FC = () => {
  return (
    <div className="modal">
      <h1>Are you sure?</h1>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
};

export default Modal;
