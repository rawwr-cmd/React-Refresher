type closeBackdrop = {
  onCancel: () => void;
};

const Backdrop: React.FC<closeBackdrop> = ({ onCancel }) => {
  return <div className="backdrop" onClick={onCancel} />;
};
export default Backdrop;
