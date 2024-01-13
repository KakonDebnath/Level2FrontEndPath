import { forwardRef } from "react";
import cn from "../../utils/cn";
import { HiMiniArrowPath } from "react-icons/hi2";

type TLoadingButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

const LoadingButton = forwardRef(
  (
    { children = "Loading...", icon, className }: TLoadingButton,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex justify-center items-center gap-2 bg-gray-300 px-3 py-2 rounded-md cursor-not-allowed",
          className
        )}
      >
        {icon ? (
          <div className="animate-spin">{icon}</div>
        ) : (
          <HiMiniArrowPath className="animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

export default LoadingButton;
