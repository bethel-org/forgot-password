import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import type { Control, FieldValues, Path } from "react-hook-form";

export interface StyledInputProps {
  $size: "sm" | "md" | "lg";
  $hasIcon: boolean;
  $disabled?: boolean;
}

export interface StyledInputContainerProps {
  $size: "sm" | "md" | "lg";
  $fullWidth: boolean;
  $width?: string;
}

export interface StyledLabelProps {
  $size: "sm" | "md" | "lg";
  $disabled?: boolean;
}

export interface StyledIconContainerProps {
  $size: "sm" | "md" | "lg";
  $disabled?: boolean;
}

export type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: InputSize;
  icon?: LucideIcon;
  onIconClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  width?: string;
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
}

export interface BaseInputProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  icon?: React.ComponentType<any>;
  onIconClick?: () => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
  width?: string;
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  error?: string;
  [key: string]: any;
}

export interface InputFormProps<T extends FieldValues> extends BaseInputProps {
  name: Path<T>;
  control: Control<T>;
  rules?: any;
}
