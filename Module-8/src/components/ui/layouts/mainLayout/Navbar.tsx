import Container from "@/components/container/Container";
import { NavLink } from "react-router-dom";
import { Button } from "../../button";

const Navbar = () => {
  return (
    <Container className="flex justify-between items-center space-y-4">
      <h2 className="text-3xl">iRepair</h2>
      <div className="space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Service</NavLink>
        <Button>Login</Button>
      </div>
    </Container>
  );
};

export default Navbar;
