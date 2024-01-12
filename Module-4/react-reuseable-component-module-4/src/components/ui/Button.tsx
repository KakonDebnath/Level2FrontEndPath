import cn from "../../utils/cn";

type TButton = {
  children: string;
  className: string;
  variant: string;
};

const Button = ({ children, className, variant }: TButton) => {
  const getVariant = (variant: string) => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      default:
        return "btn-solid";
    }
  };
  return (
    <button className={cn(getVariant(variant), className)}>{children}</button>
  );
};

export default Button;
