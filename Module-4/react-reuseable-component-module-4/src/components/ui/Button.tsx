import { forwardRef, ButtonHTMLAttributes, ReactNode, Ref } from "react";
import cn from "../../utils/cn";

type TVariant = "solid" | "outline";
type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TVariant;
  children?: ReactNode;
};

const Button = forwardRef(
  (
    { children, className, variant, ...rest }: TButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const getVariant = (variant?: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        default:
          return "btn-solid";
      }
    };
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
