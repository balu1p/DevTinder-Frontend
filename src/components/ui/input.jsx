import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, isGray = false, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        `flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-base text-white ring-offset-black file:border-0 file:bg-gray-800 file:text-sm file:font-medium file:text-gray-800 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
