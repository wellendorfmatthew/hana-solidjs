import { cva, type VariantProps } from "class-variance-authority";
import { JSX } from "solid-js";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-md border border-transparent shadow-sm px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-btn-bg-primary hover:bg-btn-bg-primary/60 focus:ring-btn-bg-primary",
        secondary:
          "bg-btn-bg-secondary hover:bg-btn-bg-secondary/60 focus:ring-btn-bg-secondary",
      },
      size: {
        default: "px-4 py-2 text-sm",
        small: "px-2.5 py-1.5 text-xs",
        large: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface buttonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  autofocus?: boolean;
  onClick?: (e: Event & { currentTarget: HTMLButtonElement }) => void;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  children: JSX.Element;
}

/**
 * **Button with different variants. Defaults to** `variant="primary"` **and** `size="default"`
 *
 * **It is prestyled but can be styled further with the regular** `class="style"` **attribute**
 * @param disabled
 * @param autofocus
 * @param onClick
 * @param type
 * @param className
 * @param children
 * @returns
 */
export function Button({
  disabled,
  autofocus,
  onClick,
  children,
  type = "button",
  className,
  variant,
  size,
}: buttonProps): JSX.Element {
  return (
    <button
      disabled={disabled}
      autofocus={autofocus}
      onClick={onClick}
      type={type}
      class={cn(buttonVariants({ variant, size, className }), disabled ? "cursor-not-allowed bg-btn-bg-disabled hover:bg-btn-bg-disabled" : "")}
    >
      {children}
    </button>
  );
}
