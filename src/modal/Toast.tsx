import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import "./modal.css";

type ToastProps = {
  open: boolean;
  onClose: () => void;
  duration?: number;
  content: string;
};

const Toast = ({ open, onClose, duration = 3000, content }: ToastProps) => {
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(onClose, duration);
    return () => clearTimeout(id);
  }, [open, duration, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.dialog
          className="toast"
          role="status"
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 500,
              damping: 32,
              mass: 0.8,
            },
          }}
          exit={{
            opacity: 0,
            y: 16,
            scale: 0.96,
            transition: { duration: 0.15, ease: "easeIn" },
          }}
        >
          {content}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default Toast;
