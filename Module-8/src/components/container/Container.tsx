import { cn } from "@/lib/utils";
import { TContainer } from "@/types";

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("w-full max-w-[1230px] px-[20px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
