import { ReactNode } from "react";

export interface IModalContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface IModalProviderProps {
  children: ReactNode;
}
