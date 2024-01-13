import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { MouseEvent, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <div
      className={cn(
        "fixed inset-0 flex justify-center items-center bg-gray-500/75 invisible z-[999]",
        {
          visible: isOpen,
        }
      )}
      onClick={handleOutsideClose}
    >
      <div
        ref={containerRef}
        className="bg-white w-full max-w-md rounded-md px-5 py-3"
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
