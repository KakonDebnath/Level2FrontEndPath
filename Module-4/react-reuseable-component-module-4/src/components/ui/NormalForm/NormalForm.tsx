import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../../utils/cn";
import Button from "../Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupZodSchema, TNormalForm } from "./validation";

const onSubmit = (data: FieldValues) => {
  console.log(data);
};

const NormalForm = () => {
  const methods = useForm<TNormalForm>({
    resolver: zodResolver(SignupZodSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const double = true;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("border border-gray-500 rounded-md p-5 w-full mx-auto", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={cn(" p-3 grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input className="" type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input type="text" id="email" {...register("email")} />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="password" className="block">
              Password:
            </label>
            <input type="password" id="password" {...register("password")} />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="district" className="block">
              District:
            </label>
            <select id="district" {...register("district")}>
              <option value="">Select One</option>
              <option value="barisal">Barisal</option>
              <option value="dhaka">Dhaka</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="khulna">Khulna</option>
            </select>
            {errors.district && (
              <span className="text-red-600">this field is required</span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="address" className="block">
              Address:
            </label>
            <textarea id="address" {...register("address")}></textarea>
            {errors.address && (
              <span className="text-red-600">this field is required</span>
            )}
          </div>
          {/* <div className="w-full max-w-md">
          <label htmlFor="" className="block">
            Skills:
          </label>
          <input type="checkbox" id="html" {...register("html")} /> HTML
          <input type="checkbox" id="css" {...register("css")} /> CSS
          <input type="checkbox" id="js" {...register("js")} /> JS
          <input type="checkbox" id="ts" {...register("ts")} /> TS
          <input type="checkbox" id="react" {...register("react")} /> REACT
        </div> */}
        </div>
        <div
          className={cn(" p-3 grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2": double,
          })}
        >
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
        </div>
      </form>
    </FormProvider>
  );
};

export default NormalForm;
