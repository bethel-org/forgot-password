import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../services/reset-password.service";
import type { ResetPasswordError } from "../types/auth.types";

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
    onError: (error: ResetPasswordError) => {
      console.error("Reset password error:", error);
    },
  });
};
