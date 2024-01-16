import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Container from "./components/ui/Container/Container";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ui/ReuseableForm";
import {
  FormZodSchema,
  TFormValidationType,
} from "./components/ui/ReuseableForm/formValidation";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormValidationType>({
    resolver: zodResolver(FormZodSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      {/* <MainLayout /> */}
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <Input
            lebel={"Name"}
            type={"text"}
            register={register("name")}
            errors={errors}
          ></Input>
          <Input
            lebel={"Email"}
            type={"email"}
            register={register("email")}
            errors={errors}
          ></Input>
        </FormSection>
        <FormSection>
          <FormSubmit />
        </FormSection>
      </Form>
    </Container>
  );
}

export default App;
