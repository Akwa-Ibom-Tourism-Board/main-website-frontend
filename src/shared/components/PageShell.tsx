import { useState, type ReactNode } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";
import registerQr from "@/assets/qrcode/qrcode.png";
import { PageWrapper, ModalBody, QrImage, ModalHint, ModalOrText, ModalLink } from "./PageShell.styles";

interface PageShellProps {
  children: ReactNode;
}

const REGISTRATION_URL = "https://register.akhtdc.com.ng";

const PageShell = ({ children }: PageShellProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageWrapper>
      <TopBar setIsModalOpen={setIsModalOpen} />
      <Navbar />
      {children}
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Register Your Hospitality Establishment"
      >
        <ModalBody>
          <QrImage src={registerQr} alt="Registration QR Code" />
          <ModalHint>Scan the QR code to register your establishment.</ModalHint>
          <ModalOrText>Or click the link below:</ModalOrText>
          <ModalLink href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
            Register your hospitality establishment
          </ModalLink>
        </ModalBody>
      </Modal>
    </PageWrapper>
  );
};

export default PageShell;
