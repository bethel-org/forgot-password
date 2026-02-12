import styled, { css } from "styled-components";
import type { ButtonProps, StyledButtonProps } from "./button.type";
import { theme } from "../../theme";

const getVariantStyles = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return css`
        background: ${theme.colors.primary[600]};
        color: ${theme.colors.text.inverse};
        border: 1px solid ${theme.colors.primary[600]};

        &:hover:not(:disabled) {
          background: ${theme.colors.primary[700]};
          border-color: ${theme.colors.primary[700]};
          box-shadow: ${theme.shadows.md};
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;

    case "secondary":
      return css`
        background: ${theme.colors.background.primary};
        color: ${theme.colors.text.primary};
        border: 1px solid ${theme.colors.border.medium};

        &:hover:not(:disabled) {
          background: ${theme.colors.background.secondary};
          border-color: ${theme.colors.border.dark};
        }
      `;

    case "danger":
      return css`
        background: ${theme.colors.error[500]};
        color: ${theme.colors.text.inverse};
        border: 1px solid ${theme.colors.error[500]};

        &:hover:not(:disabled) {
          background: ${theme.colors.error[600]};
          border-color: ${theme.colors.error[600]};
          transform: translateY(-1px);
          box-shadow: ${theme.shadows.md};
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;

    case "success":
      return css`
        background: ${theme.colors.success[500]};
        color: ${theme.colors.text.inverse};
        border: 1px solid ${theme.colors.success[500]};

        &:hover:not(:disabled) {
          box-shadow: ${theme.shadows.md};
        }
      `;

    case "warning":
      return css`
        background: ${theme.colors.warning[500]};
        color: ${theme.colors.text.inverse};
        border: 1px solid ${theme.colors.warning[500]};

        &:hover:not(:disabled) {
          background: ${theme.colors.warning[600]};
          border-color: ${theme.colors.warning[600]};
          transform: translateY(-1px);
          box-shadow: ${theme.shadows.md};
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;

    case "ghost":
      return css`
        background: transparent;
        color: ${theme.colors.text.primary};
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          background: ${theme.colors.background.secondary};
          border-color: ${theme.colors.border.light};
        }
      `;

    case "disabled":
    default:
      return css`
        background: ${theme.colors.neutral[200]};
        color: ${theme.colors.neutral[400]};
        border: 1px solid ${theme.colors.neutral[300]};
        cursor: not-allowed;
        opacity: 0.6;
      `;
  }
};

const getSizeStyles = (size: ButtonProps["size"]) => {
  switch (size) {
    case "xs":
      return css`
        padding: ${theme.spacing[1]} ${theme.spacing[2]};
        font-size: ${theme.typography.fontSize.xs};
        min-height: 24px;
      `;

    case "sm":
      return css`
        padding: ${theme.spacing[2]} ${theme.spacing[3]};
        font-size: ${theme.typography.fontSize.sm};
        min-height: 32px;
      `;

    case "lg":
      return css`
        padding: ${theme.spacing[4]} ${theme.spacing[6]};
        font-size: ${theme.typography.fontSize.lg};
        min-height: 48px;
      `;

    case "md":
    default:
      return css`
        padding: ${theme.spacing[3]} ${theme.spacing[4]};
        font-size: ${theme.typography.fontSize.base};
        min-height: 40px;
      `;
  }
};

const getIconPositionStyles = (iconPosition: ButtonProps["iconPosition"]) => {
  switch (iconPosition) {
    case "left":
      return css`
        flex-direction: row;
        gap: ${theme.spacing[2]};
      `;

    case "right":
      return css`
        flex-direction: row-reverse;
        gap: ${theme.spacing[2]};
      `;

    case "only":
      return css`
        padding: ${theme.spacing[2]};
        min-width: 40px;
        justify-content: center;
      `;

    default:
      return css`
        flex-direction: row;
        gap: ${theme.spacing[2]};
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  user-select: none;
  position: relative;
  overflow: hidden;

  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $size }) => getSizeStyles($size)}
  ${({ $iconPosition }) => getIconPositionStyles($iconPosition)}

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
    `}

  ${({ $loading }) =>
    $loading &&
    css`
      cursor: wait;
      pointer-events: none;
    `}

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }

  svg {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
  }
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const ButtonContent = styled.div<{ $loading: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  opacity: ${({ $loading }) => ($loading ? 0 : 1)};
  transition: opacity 0.2s ease;
`;
