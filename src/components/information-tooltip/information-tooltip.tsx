import React from "react";
import type { InformationTooltipProps } from "./information-tooltip.type";
import {
  StyledTooltipContainer,
  StyledIcon,
  StyledTooltip,
} from "./information-tooltip.style";

/**
 * InformationTooltip component displays an information icon with a tooltip
 * that shows additional information when hovered.
 */
export const InformationTooltip: React.FC<InformationTooltipProps> = ({
  label,
  size = "md",
  position = "top",
  disabled = false,
  className,
  style,
}) => {
  return (
    <StyledTooltipContainer
      $size={size}
      $disabled={disabled}
      className={className}
      style={style}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={`Information: ${label}`}
      aria-describedby={disabled ? undefined : "tooltip"}
    >
      <StyledIcon aria-hidden="true">i</StyledIcon>
      <StyledTooltip
        id="tooltip"
        $position={position}
        $size={size}
        role="tooltip"
        aria-hidden="true"
      >
        {label}
      </StyledTooltip>
    </StyledTooltipContainer>
  );
};
