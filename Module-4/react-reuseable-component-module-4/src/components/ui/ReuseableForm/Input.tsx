export const Input = ({ lebel, register, errors, type }) => {
  console.log(register.name);
  console.log(errors);
  return (
    <div className="w-full max-w-md">
      <label htmlFor="name" className="block">
        {lebel}
      </label>
      <input className="" type={type} id="name" {...register} />
      {errors?.name && (
        <span className="text-red-600">{errors?.name.message}</span>
      )}
    </div>
  );
};
