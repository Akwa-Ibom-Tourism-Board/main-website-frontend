import { type ReactNode } from "react";
import { X } from "lucide-react";
import { Overlay, Backdrop, Panel, Header, Title, CloseButton } from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Backdrop onClick={onClose} />
      <Panel>
        <Header>
          {title && <Title>{title}</Title>}
          <CloseButton onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </CloseButton>
        </Header>
        {children}
      </Panel>
    </Overlay>
  );
};

export default Modal;
