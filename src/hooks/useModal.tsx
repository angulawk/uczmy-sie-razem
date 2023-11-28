import React, { createContext, useContext, useState } from "react";
import {
  IModalContextProps,
  IModalProviderProps
} from "@app/hooks/@types/ModalContextProps";

const ModalContext = createContext<IModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<IModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): IModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
