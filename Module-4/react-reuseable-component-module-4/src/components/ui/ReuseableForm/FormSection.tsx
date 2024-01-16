import { useContext } from "react";
import cn from "../../../utils/cn";
import { FormElementContext } from ".";

export const FormSection = ({ children }: { children: React.ReactNode }) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn(" p-3 grid grid-cols-1 justify-items-center gap-5", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
