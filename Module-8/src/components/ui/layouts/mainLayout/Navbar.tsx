import Container from "@/components/container/Container";
import { NavLink } from "react-router-dom";
import { Button } from "../../button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <Container>
      <motion.header
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.5 }}
        className="flex justify-between items-center py-4"
      >
        <h2 className="text-3xl">
          <NavLink to="/">iRepair</NavLink>
        </h2>
        <div className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="/">Service</NavLink>
          <Button>Login</Button>
        </div>
      </motion.header>
    </Container>
  );
};

export default Navbar;
