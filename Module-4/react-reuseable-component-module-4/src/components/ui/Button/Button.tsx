import { forwardRef, ButtonHTMLAttributes, ReactNode, Ref } from "react";
import cn from "../../../utils/cn";

type TVariant = "solid" | "outline" | "link";
type TAnimate = "fade" | "zoom";
type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TVariant;
  animate?: TAnimate;
  children?: ReactNode;
};

const Button = forwardRef(
  (
    {
      children = "Click Me",
      className,
      variant,
      animate,
      ...rest
    }: TButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const getVariant = (variant?: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "link":
          return "btn-link";
        default:
          return "btn-solid";
      }
    };
    const getAnimate = (animate?: TAnimate) => {
      switch (animate) {
        case "zoom":
          return "focus:animate-scale";
        case "fade":
          return "focus:animate-fade";
        default:
          return "";
      }
    };
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(getVariant(variant), getAnimate(animate), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
