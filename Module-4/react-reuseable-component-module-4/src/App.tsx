import { useState } from "react";
import Button from "./components/ui/Button/Button";
import Container from "./components/ui/Container/Container";
import Modal from "./components/ui/Modal/Modal";
import LoadingButton from "./components/ui/Button/LoadingButton";
import Accordion from "./components/ui/Acordion/Accordion";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((previous) => !previous);
  };
  return (
    <Container>
      {/* <MainLayout /> */}
      <div className="w-full">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h2>Modal Header</h2>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <h3>This is modal</h3>
        </Modal>
        <Button></Button>
        <LoadingButton></LoadingButton>
        <Accordion />
      </div>
    </Container>
  );
}

export default App;
