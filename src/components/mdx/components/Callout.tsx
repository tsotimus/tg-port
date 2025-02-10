"use client"

import cn from "clsx";
import type { ReactElement, ReactNode } from "react";

const TypeToEmoji = {
  default: "💡",
  error: "🚫",
  info: "ℹ️",
  warning: "⚠️",
};

type CalloutType = keyof typeof TypeToEmoji;

const classes: Record<CalloutType, string> = {
  default: cn("border-orange-400/30 bg-orange-400/20 text-orange-300"),
  error: cn("border-red-200/30 bg-red-900/30 text-red-200"),
  info: cn("border-blue-200/30 bg-blue-900/30 text-blue-200"),
  warning: cn("border-yellow-200/30 bg-yellow-700/30 text-yellow-200"),
};

type CalloutProps = {
  type?: CalloutType;
  emoji?: string | ReactNode;
  children: ReactNode;
};

export function Callout({
  children,
  type = "default",
  emoji = TypeToEmoji[type],
}: CalloutProps): ReactElement {
  return (
    <div
      className={cn(
        "callout overflow-x-auto mt-6 flex rounded-lg border py-2 ltr:pr-4 rtl:pl-4",
        "contrast-more:border-current contrast-more:border-current",
        classes[type]
      )}
    >
      <div
        className="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2 px-2"
        style={{
          fontFamily:
            '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        {emoji}
      </div>
      <div className="w-full min-w-0 leading-7">{children}</div>
    </div>
  );
}
