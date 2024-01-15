import { useForm } from "react-hook-form";
import cn from "../../../utils/cn";
import Button from "../Button/Button";

const onSubmit = (data) => {
  console.log(data);
};

const NormalForm = () => {
  const { register, handleSubmit } = useForm();
  const double = true;
  return (
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
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input type="text" id="email" {...register("email")} />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="password" className="block">
            Password:
          </label>
          <input type="password" id="password" {...register("password")} />
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
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="address" className="block">
            Address:
          </label>
          <textarea id="address" {...register("address")}></textarea>
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="" className="block">
            Skills:
          </label>
          <input type="checkbox" id="html" {...register("html")} /> HTML
          <input type="checkbox" id="css" {...register("css")} /> CSS
          <input type="checkbox" id="js" {...register("js")} /> JS
          <input type="checkbox" id="ts" {...register("ts")} /> TS
          <input type="checkbox" id="react" {...register("react")} /> REACT
        </div>
        <div className={cn("flex justify-end w-full", {
          "md:col-start-2": double
        })}>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
