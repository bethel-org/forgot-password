import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import BethelLogo from "@src/assets/bethel-logo.png";
import { Eye, EyeOff, Lock, CheckCircle } from "lucide-react";
import {
  ResetPasswordContainer,
  ResetPasswordCard,
  LogoSection,
  LogoIcon,
  Title,
  FormSection,
  ErrorMessage,
  SuccessMessage,
  InputWrapper,
} from "./reset-password.style";
import { useResetPassword } from "./hooks/use-reset-password";
import { RESET_PASSWORD_MESSAGES } from "./constants/messages";
import type {
  ResetPasswordRequest,
  ResetPasswordError,
} from "../src/types/auth.types";
import { Form } from "./components/form";
import Input from "./components/input";
import { Button } from "./components/button";

const ResetPassword: React.FC = () => {
  const searchParams = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      token: params.get("token"),
      email: params.get("email"),
    };
  }, []);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = searchParams.token;
  const email = searchParams.email;

  const resetPasswordMutation = useResetPassword();

  const formMethods = useForm<
    ResetPasswordRequest & { confirmPassword: string }
  >({
    defaultValues: {
      email: email || "",
      token: token || "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (
    data: ResetPasswordRequest & { confirmPassword: string },
  ) => {
    if (data.newPassword !== data.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...resetData } = data;
      await resetPasswordMutation.mutateAsync(resetData);
      setIsSuccess(true);
      setError(null);
    } catch (err: unknown) {
      const errorData: ResetPasswordError =
        (err as { response?: { data?: ResetPasswordError } })?.response?.data ||
        (err as ResetPasswordError);
      const backendMessage = Array.isArray(errorData.message)
        ? errorData.message[0]
        : errorData.message;

      // Convert backend technical messages to user-friendly messages
      let userFriendlyMessage: string = RESET_PASSWORD_MESSAGES.GENERIC_ERROR;

      if (
        backendMessage?.includes("Token inválido") ||
        backendMessage?.includes("expirado") ||
        backendMessage?.includes("correo electrónico") ||
        backendMessage?.includes("email")
      ) {
        // For token/email errors, show generic "link expired" message
        userFriendlyMessage = RESET_PASSWORD_MESSAGES.INVALID_LINK;
      } else if (backendMessage?.includes("contraseña")) {
        // For password validation errors, show specific validation message
        userFriendlyMessage = backendMessage;
      } else if (backendMessage) {
        // For any other backend errors, show generic message
        userFriendlyMessage = RESET_PASSWORD_MESSAGES.INVALID_LINK;
      }

      setError(userFriendlyMessage);
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isFormDirty = formMethods.formState.isDirty;

  if (isSuccess) {
    return (
      <ResetPasswordContainer>
        <ResetPasswordCard>
          <LogoSection>
            <LogoIcon>
              <img src={BethelLogo} alt="Logo Bethel" />
            </LogoIcon>
            <Title>¡Contraseña Restablecida!</Title>
          </LogoSection>

          <FormSection>
            <SuccessMessage>
              <CheckCircle size={24} style={{ marginBottom: "8px" }} />
              <div>{RESET_PASSWORD_MESSAGES.SUCCESS}</div>
            </SuccessMessage>
          </FormSection>
        </ResetPasswordCard>
      </ResetPasswordContainer>
    );
  }

  if (!token || !email) {
    return (
      <ResetPasswordContainer>
        <ResetPasswordCard>
          <LogoSection>
            <LogoIcon>
              <img src={BethelLogo} alt="Logo Bethel" />
            </LogoIcon>
            <Title>Enlace Inválido</Title>
          </LogoSection>

          <FormSection>
            <ErrorMessage>{RESET_PASSWORD_MESSAGES.INVALID_LINK}</ErrorMessage>
          </FormSection>
        </ResetPasswordCard>
      </ResetPasswordContainer>
    );
  }

  return (
    <ResetPasswordContainer>
      <ResetPasswordCard>
        <LogoSection>
          <LogoIcon>
            <img src={BethelLogo} alt="Logo Bethel" />
          </LogoIcon>
          <Title>Restablecer Contraseña</Title>
        </LogoSection>

        <FormSection>
          <Form formMethods={formMethods} onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                name="newPassword"
                control={formMethods.control}
                label="Nueva Contraseña"
                type={showNewPassword ? "text" : "password"}
                placeholder="Ingresa tu nueva contraseña"
                icon={showNewPassword ? EyeOff : Eye}
                onIconClick={toggleNewPasswordVisibility}
                size="md"
                rules={{
                  required: "La contraseña es requerida",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]+$/,
                    message:
                      "La contraseña debe contener al menos una letra y un número, sin espacios",
                  },
                }}
              />
            </InputWrapper>

            <InputWrapper>
              <Input
                name="confirmPassword"
                control={formMethods.control}
                label="Confirmar Contraseña"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirma tu nueva contraseña"
                icon={showConfirmPassword ? EyeOff : Eye}
                onIconClick={toggleConfirmPasswordVisibility}
                size="md"
                rules={{
                  required: "La confirmación de contraseña es requerida",
                  validate: (value: string) => {
                    const newPassword = formMethods.getValues("newPassword");
                    return (
                      value === newPassword || "Las contraseñas no coinciden"
                    );
                  },
                }}
              />
            </InputWrapper>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button
              type="submit"
              variant="primary"
              size="md"
              loading={resetPasswordMutation.isPending}
              icon={<Lock />}
              iconPosition="left"
              autoLoading
              disabled={!isFormDirty}
              fullWidth
            >
              Restablecer Contraseña
            </Button>
          </Form>
        </FormSection>
      </ResetPasswordCard>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
