import { useFormContext } from "react-hook-form";

const InputField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full max-w-md">
      <label htmlFor="name" className="block">
        Name:
      </label>
      <input className="" type="text" id="name" {...register("name")} />
      {errors.name && (
        <span className="text-red-600">{errors.name.message }</span>
      )}
    </div>
  );
};

export default InputField;
