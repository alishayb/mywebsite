import "./modal.css";

const Modal = ({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) => {
  if (!open) return null;
  return (
    <div className="backdrop">
      <dialog className="modal">{children}</dialog>
    </div>
  );
};

export default Modal;
