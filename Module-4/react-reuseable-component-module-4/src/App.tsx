import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((previous) => !previous);
  };
  return (
    <Container>
      {/* <MainLayout /> */}
      <div className="h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h2>Modal Header</h2>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <h3>This is modal</h3>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
