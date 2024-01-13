import { createPortal } from "react-dom";
import cn from "../../../utils/cn";
import React, { MouseEvent, createContext, useContext, useRef } from "react";

const ModalContext = createContext<TModalContext | null>(null);
type TModalContext = { onClose: () => void };

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

type TChildren = {
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
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
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TChildren) => {
  const { onClose } = useContext(ModalContext) as TModalContext;

  return (
    <button className="ml-auto" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: TChildren) => {
  return <div className="flex w-full">{children}</div>;
};

Modal.CloseButton = CloseButton;
Modal.Header = Header;

export default Modal;
