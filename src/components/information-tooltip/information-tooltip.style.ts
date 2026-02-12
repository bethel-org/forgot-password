import styled, { css } from "styled-components";
import type {
  StyledTooltipContainerProps,
  StyledTooltipProps,
} from "./information-tooltip.type";
import { theme } from "../../theme";

const getIconSizeStyles = (size: StyledTooltipContainerProps["$size"]) => {
  switch (size) {
    case "sm":
      return css`
        width: 14px;
        height: 14px;
      `;
    case "lg":
      return css`
        width: 20px;
        height: 20px;
      `;
    case "md":
    default:
      return css`
        width: 16px;
        height: 16px;
      `;
  }
};

const getTooltipSizeStyles = (size: StyledTooltipProps["$size"]) => {
  switch (size) {
    case "sm":
      return css`
        font-size: ${theme.typography.fontSize.xs};
        padding: ${theme.spacing[2]} ${theme.spacing[3]};
        min-width: 200px;
        max-width: 400px;
        width: max-content;
      `;
    case "lg":
      return css`
        font-size: ${theme.typography.fontSize.sm};
        padding: ${theme.spacing[3]} ${theme.spacing[4]};
        min-width: 250px;
        max-width: 500px;
        width: max-content;
      `;
    case "md":
    default:
      return css`
        font-size: ${theme.typography.fontSize.xs};
        padding: ${theme.spacing[2]} ${theme.spacing[3]};
        min-width: 220px;
        max-width: 450px;
        width: max-content;
      `;
  }
};

const getTooltipPositionStyles = (
  position: StyledTooltipProps["$position"],
) => {
  switch (position) {
    case "top":
      return css`
        bottom: 100%;
        left: 100%;
        transform: translateX(-20%);
        margin-bottom: ${theme.spacing[2]};

        &::after {
          top: 100%;
          left: 20%;
          transform: translateX(-50%);
          border-top-color: ${theme.colors.neutral[800]};
        }
      `;
    case "bottom":
      return css`
        top: 100%;
        left: 100%;
        transform: translateX(-20%);
        margin-top: ${theme.spacing[2]};

        &::after {
          bottom: 100%;
          left: 20%;
          transform: translateX(-50%);
          border-bottom-color: ${theme.colors.neutral[800]};
        }
      `;
    case "left":
      return css`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-right: ${theme.spacing[2]};

        &::after {
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-left-color: ${theme.colors.neutral[800]};
        }
      `;
    case "right":
      return css`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-left: ${theme.spacing[2]};

        &::after {
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-right-color: ${theme.colors.neutral[800]};
        }
      `;
  }
};

export const StyledTooltipContainer = styled.div<StyledTooltipContainerProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "help")};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transition: opacity 0.2s ease;

  ${({ $size }) => getIconSizeStyles($size)}
`;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${theme.colors.text.secondary};
  color: ${theme.colors.text.inverse};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: 0.75em;
  transition: all 0.2s ease;

  ${StyledTooltipContainer}:hover & {
    background-color: ${theme.colors.text.primary};
    color: ${theme.colors.text.inverse};
  }
`;

export const StyledTooltip = styled.div<StyledTooltipProps>`
  position: absolute;
  z-index: 1000;
  background-color: ${theme.colors.neutral[800]};
  color: ${theme.colors.text.inverse};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: ${theme.typography.lineHeight.snug};
  white-space: normal;
  word-wrap: break-word;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  pointer-events: none;

  ${({ $size }) => getTooltipSizeStyles($size)}
  ${({ $position }) => getTooltipPositionStyles($position)}

  /* Tooltip arrow */
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 4px solid transparent;
  }

  ${StyledTooltipContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
