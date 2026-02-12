import styled from "styled-components";
import { theme } from "../../theme";

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Error = styled.div`
  color: ${theme.colors.error[500]};
  font-size: ${theme.typography.fontSize.sm};
  margin-top: ${theme.spacing[2]};
  padding: ${theme.spacing[2]};
  background-color: ${theme.colors.error[50]};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.error[500]};
`;
