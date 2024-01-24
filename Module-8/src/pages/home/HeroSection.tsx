import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center justify-items-center py-32">
      <div className="text-center md:text-left">
        <h1 className="md:text-7xl lg:text-8xl font-bold">
          <span className="text-gray">Don't worry.</span> <br />{" "}
          <span>We'll fix it.</span>
        </h1>
        <p className="text-dark-gray text-base md:text-xl max-w-[40ch] my-5">
          Welcome to <span className="text-black font-semibold">iRepair</span>,
          your one-stop place for all kinds of{" "}
          <span className="text-black font-semibold">Macbook repairs</span> and
          diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>
      <div className="md:rotate-[-30deg] ">
        <img
          className="object-contain w-full mx-auto md:w-10/12"
          src={macbook}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
