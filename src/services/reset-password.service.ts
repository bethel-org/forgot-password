import { post } from "./api";
import type {
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "../types/auth.types";

export const resetPassword = async (
  data: ResetPasswordRequest
): Promise<ResetPasswordResponse> => {
  return await post("/auth/client/reset-password", data);
};
