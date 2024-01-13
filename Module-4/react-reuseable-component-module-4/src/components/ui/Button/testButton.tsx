import cn from "../../../utils/cn";

type TButton = {
  children: string;
  className: string;
  outline: boolean;
};

const TestButton = ({ children, className, outline }: TButton) => {
  return (
    <button
      //   className={twMerge(
      //     `bg-purple-500 px-3 py-2 rounded-md ${className} ${
      //       variant == "outline" ? "border border-purple-500 bg-opacity-10" : ""
      //     }`
      //   )}
      className={cn(
        "bg-purple-500 px-3 py-2 rounded-md",
        {
          "border border-purple-500 bg-opacity-10": outline,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default TestButton;
