import { useState } from "react";
import Button from "./components/ui/Button/Button";
import Container from "./components/ui/Container/Container";
import Modal from "./components/ui/Modal/Modal";
import LoadingButton from "./components/ui/Button/LoadingButton";

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
        <Button></Button>
        <LoadingButton></LoadingButton>
      </div>
    </Container>
  );
}

export default App;
