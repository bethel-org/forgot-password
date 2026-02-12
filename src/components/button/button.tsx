import React from "react";
import { useFormContext } from "react-hook-form";
import { StyledButton, LoadingSpinner, ButtonContent } from "./button.style";
import type { ButtonFormProps } from "./button.type";

const Button: React.FC<ButtonFormProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  onClick,
  className,
  type = "button",
  "aria-label": ariaLabel,
  autoLoading = false,
  autoDisabled = false,
  fullWidth = false,
  allFieldsTouched = false,
  ...props
}) => {
  // Get form context if available
  const formContext = useFormContext();

  // Get form states if form context is available
  const formState = formContext?.formState;
  const isSubmitting = formState?.isSubmitting ?? false;
  const isValid = formState?.isValid ?? true;
  const isDirty = formState?.isDirty ?? false;

  // Determine loading state
  const isLoading = loading || (autoLoading && isSubmitting);

  // Determine disabled state
  let isFormDisabled;
  let isSubmitButtonDisabled = false;

  if (allFieldsTouched) {
    // New logic for staff modal
    isFormDisabled =
      autoDisabled && (isSubmitting || (type === "submit" && !isDirty));
    // For submit buttons, enable when all fields are touched, but prevent submission when invalid
    isSubmitButtonDisabled =
      type === "submit" && autoDisabled && !allFieldsTouched;
  } else {
    // Old logic for other modals
    isFormDisabled =
      autoDisabled &&
      (isSubmitting ||
        (type === "submit" && !isValid) ||
        (type === "submit" && !isDirty));
    // No isSubmitButtonDisabled for old logic
  }

  const isDisabled =
    disabled || isLoading || isFormDisabled || isSubmitButtonDisabled;

  const effectiveVariant = isDisabled ? "disabled" : variant;

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  const renderIcon = () => {
    if (!icon) return null;
    return icon;
  };

  const renderContent = () => {
    if (iconPosition === "only") {
      return renderIcon();
    }

    if (!children) {
      return renderIcon();
    }

    return (
      <ButtonContent $loading={isLoading}>
        {iconPosition === "left" && renderIcon()}
        {children}
        {iconPosition === "right" && renderIcon()}
      </ButtonContent>
    );
  };

  return (
    <StyledButton
      $variant={effectiveVariant}
      $size={size}
      $iconPosition={iconPosition}
      $loading={isLoading}
      $disabled={isDisabled}
      onClick={handleClick}
      disabled={isDisabled}
      type={type}
      className={className}
      aria-label={ariaLabel}
      $fullWidth={fullWidth}
      {...props}
    >
      {isLoading && <LoadingSpinner />}
      {renderContent()}
    </StyledButton>
  );
};

export default Button;
