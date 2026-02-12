import type { ReactNode } from "react";

export interface StyledButtonProps {
  $variant: ButtonProps["variant"];
  $size: ButtonProps["size"];
  $iconPosition: ButtonProps["iconPosition"];
  $loading: boolean;
  $disabled: boolean;
  $fullWidth: boolean;
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "ghost"
  | "disabled";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type IconPosition = "left" | "right" | "only";

export interface BaseButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  fullWidth?: boolean;
}

export interface ButtonProps extends BaseButtonProps {}

export interface ButtonFormProps extends BaseButtonProps {
  autoLoading?: boolean;
  autoDisabled?: boolean;
  allFieldsTouched?: boolean;
}
