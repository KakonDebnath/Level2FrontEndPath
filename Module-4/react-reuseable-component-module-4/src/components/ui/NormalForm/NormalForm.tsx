import { useForm } from "react-hook-form";
import cn from "../../../utils/cn";

const onSubmit = (data) => {
  console.log(data);
};

const NormalForm = () => {
  const { register, handleSubmit } = useForm();
  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-red-500 p-5 w-full mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(
          "border border-blue-500 p-3 grid justify-items-center gap-5",
          {
            "grid-cols-2": double,
            "grid-cols-1": !double,
          }
        )}
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
          <select name="district" id="district">
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
          <textarea name="address" id="address" ></textarea>
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="skill" className="block">
            Skills:
          </label>
          <input type="checkbox" name="skill" id="skill" /> 
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
