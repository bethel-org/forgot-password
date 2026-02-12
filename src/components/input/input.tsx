import React, { useId } from "react";
import { Controller, type FieldValues } from "react-hook-form";
import {
  StyledInputContainer,
  StyledLabelContainer,
  StyledLabel,
  StyledInput,
  StyledIconContainer,
  StyledErrorMessage,
} from "./input.style";
import type { BaseInputProps, InputFormProps } from "./input.type";
import { InformationTooltip } from "../information-tooltip";

export const InputComponent = React.forwardRef<
  HTMLInputElement,
  BaseInputProps
>(
  (
    {
      label,
      size = "md",
      icon: Icon,
      onIconClick,
      className,
      id,
      disabled,
      fullWidth = false,
      width,
      tooltip,
      tooltipPosition = "top",
      error,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (onIconClick) {
        onIconClick();
      }
    };

    return (
      <StyledInputContainer
        $size={size}
        $fullWidth={fullWidth}
        $width={width}
        className={className}
      >
        {label && (
          <StyledLabelContainer>
            <StyledLabel htmlFor={inputId} $size={size} $disabled={disabled}>
              {label}
            </StyledLabel>
            {tooltip && (
              <InformationTooltip
                label={tooltip}
                position={tooltipPosition}
                size={size}
                disabled={disabled}
              />
            )}
          </StyledLabelContainer>
        )}
        <div style={{ position: "relative", width: "100%" }}>
          <StyledInput
            ref={ref}
            id={inputId}
            $size={size}
            $hasIcon={!!Icon}
            $disabled={disabled}
            disabled={disabled}
            {...props}
          />
          {Icon && (
            <StyledIconContainer
              type="button"
              $size={size}
              $disabled={disabled}
              onClick={handleIconClick}
              aria-label={`${label || "Input"} icon`}
              disabled={disabled}
            >
              <Icon />
            </StyledIconContainer>
          )}
        </div>
        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      </StyledInputContainer>
    );
  }
);

InputComponent.displayName = "InputComponent";

const Input = <T extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: InputFormProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputComponent
          {...props}
          {...field}
          error={fieldState.error?.message}
        />
      )}
    />
  );
};

export default Input;
