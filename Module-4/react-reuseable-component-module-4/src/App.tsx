import Container from "./components/ui/Container/Container";

import { Accordion1 } from "./components/ui/Accordion/Accordion1";
import Accordion2 from "./components/ui/Accordion/Accordion2";
import MainLayout from "./components/Layout/MainLayout/MainLayout";

const items = [
  { title: "Accordion 1", description: "lorem ipsum dolor sit amet" },
  { title: "Accordion 2", description: "lorem ipsum dolor sit amet" },
];

function App() {
  return (
    <Container>
      {/* <MainLayout /> */}

      <Accordion2></Accordion2>
      {/* <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div> */}
      <div className="w-10 h-10 border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700 rounded-full animate-[spin_1s_linear_infinite] "></div>
    </Container>
  );
}

export default App;
