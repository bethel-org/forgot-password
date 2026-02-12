import styled, { css } from "styled-components";
import type {
  StyledInputProps,
  StyledInputContainerProps,
  StyledLabelProps,
  StyledIconContainerProps,
} from "./input.type";
import { theme } from "../../theme";

const getSizeStyles = (size: StyledInputProps["$size"]) => {
  switch (size) {
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

const getLabelSizeStyles = (size: StyledLabelProps["$size"]) => {
  switch (size) {
    case "sm":
      return css`
        font-size: ${theme.typography.fontSize.sm};
        margin-bottom: ${theme.spacing[2]};
      `;

    case "lg":
      return css`
        font-size: ${theme.typography.fontSize.lg};
        margin-bottom: ${theme.spacing[3]};
      `;

    case "md":
    default:
      return css`
        font-size: ${theme.typography.fontSize.base};
        margin-bottom: ${theme.spacing[2]};
      `;
  }
};

const getIconSizeStyles = (size: StyledIconContainerProps["$size"]) => {
  switch (size) {
    case "sm":
      return css`
        width: 16px;
        height: 16px;
        right: ${theme.spacing[2]};
      `;

    case "lg":
      return css`
        width: 20px;
        height: 20px;
        right: ${theme.spacing[4]};
      `;

    case "md":
    default:
      return css`
        width: 28px;
        height: 28px;
        right: ${theme.spacing[3]};
      `;
  }
};

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => $width || "100%"};
  position: relative;
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${theme.spacing[2]};
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  color: ${({ $disabled }) =>
    $disabled ? theme.colors.text.tertiary : theme.colors.text.secondary};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};

  ${({ $size }) => getLabelSizeStyles($size)}
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid
    ${({ $disabled }) =>
      $disabled ? theme.colors.border.light : theme.colors.border.medium};
  border-radius: ${theme.borderRadius.md};
  background: ${({ $disabled }) =>
    $disabled
      ? theme.colors.background.secondary
      : theme.colors.background.primary};
  color: ${({ $disabled }) =>
    $disabled ? theme.colors.text.tertiary : theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all 0.2s ease;
  outline: 1px solid transparent;
  outline-offset: 2px;
  position: relative;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "text")};

  ${({ $size }) => getSizeStyles($size)}
  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      padding-right: ${theme.spacing[10]};
    `}

  &::placeholder {
    color: ${({ $disabled }) =>
      $disabled ? theme.colors.neutral[400] : theme.colors.text.tertiary};
  }

  &:focus {
    border-color: ${({ $disabled }) =>
      $disabled ? theme.colors.border.light : theme.colors.border.dark};
  }
`;

export const StyledIconContainer = styled.button<StyledIconContainerProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  color: ${({ $disabled }) =>
    $disabled ? theme.colors.neutral[400] : theme.colors.text.secondary};
  transition: color 0.2s ease;
  z-index: 1;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  ${({ $size }) => getIconSizeStyles($size)}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledErrorMessage = styled.div`
  color: ${theme.colors.error[500]};
  font-size: ${theme.typography.fontSize.xs};
  margin-top: ${theme.spacing[1]};
  line-height: ${theme.typography.lineHeight.tight};
`;
