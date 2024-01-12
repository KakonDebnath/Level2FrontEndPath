import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      {/* <MainLayout /> */}
      <div className="h-screen w-full flex justify-center items-center">
        <Button className={'bg-red-500'} outline={true}>Click Me</Button>
      </div>
    </Container>
  );
}

export default App;
