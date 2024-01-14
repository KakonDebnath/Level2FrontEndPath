import { useState } from "react";
import Button from "./components/ui/Button/Button";
import Container from "./components/ui/Container/Container";
import Modal from "./components/ui/Modal/Modal";
import LoadingButton from "./components/ui/Button/LoadingButton";
import Accordion from "./components/ui/Accordion/Accordion";
import NormalForm from "./components/ui/NormalForm/NormalForm";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((previous) => !previous);
  };

  const accordionItems = [
    {
      title: "How do I create an account?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "How do I reset my password?",
      description:
        'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions sent to your email.',
    },
  ];
  return (
    <Container>
      {/* <MainLayout /> */}
      <div className="w-full">
        {/* <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h2>Modal Header</h2>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <h3>This is modal</h3>
        </Modal> */}
        <Button></Button>
        <NormalForm />
      </div>
    </Container>
  );
}

export default App;
