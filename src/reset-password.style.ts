import styled from "styled-components";
import { colors } from "./theme/colors";
import { theme } from "./theme";

export const ResetPasswordContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${colors.primary[50]} 0%,
    ${colors.primary[100]} 100%
  );
  padding: ${theme.spacing[4]};
`;

export const ResetPasswordCard = styled.div`
  background: ${colors.background.primary};
  border-radius: ${theme.borderRadius["3xl"]};
  box-shadow: ${theme.shadows.xl};
  padding: ${theme.spacing[12]} ${theme.spacing[10]};
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[4]};
  text-align: center;
`;

export const LogoIcon = styled.div`
  width: 70px;
  height: 70px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${colors.text.primary};
  margin: 0;
  line-height: ${theme.typography.lineHeight.tight};
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

export const ErrorMessage = styled.div`
  color: ${colors.error[700]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
  margin-bottom: ${theme.spacing[4]};
`;

export const SuccessMessage = styled.div`
  color: ${colors.success[700]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
  text-align: center;
  padding: ${theme.spacing[4]};
  background: ${colors.success[50]};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${colors.success[200]};
`;

export const InputWrapper = styled.div`
  margin-bottom: ${theme.spacing[4]};
  width: 100%;
  box-sizing: border-box;
`;
