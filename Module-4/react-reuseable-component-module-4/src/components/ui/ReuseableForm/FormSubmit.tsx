import { useContext } from "react";
import cn from "../../../utils/cn";
import { FormElementContext } from ".";
import Button from "../Button/Button";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn("flex justify-end w-full max-w-md", {
        "md:col-start-2": double,
      })}
    >
      <Button
        className={cn("w-full", {
          "md:w-fit": double,
        })}
        type="submit"
      >
        Submit
      </Button>
    </div>
  );
};
