import { forwardRef } from "react";

export const Logo = forwardRef<SVGSVGElement, React.SVGAttributes<SVGElement>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 100 100"
        {...props}
      >
        <path
          d="M10 10 Q 30 20, 50 10 T 90 10 Q 70 30, 90 50 T 90 90 Q 70 70, 50 90 T 10 90 Q 30 70, 10 50 T 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

Logo.displayName = "Logo";
