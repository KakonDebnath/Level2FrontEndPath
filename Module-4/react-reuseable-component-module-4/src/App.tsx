import Container from "./components/ui/Container";
import TestButton from "./components/ui/testButton";

function App() {
  return (
    <Container>
      {/* <MainLayout /> */}
      <div className="h-screen w-full flex justify-center items-center">
        <TestButton className={"bg-red-500"} outline={true}>
          Click Me
        </TestButton>
      </div>
    </Container>
  );
}

export default App;
