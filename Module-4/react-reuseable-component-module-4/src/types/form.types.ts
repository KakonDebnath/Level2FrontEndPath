import { FieldValues, SubmitHandler } from "react-hook-form";

export type TForm = {
  children: React.ReactNode;
  double?: boolean;
  onSubmit: SubmitHandler<FieldValues>;
};
