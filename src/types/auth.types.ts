export interface ResetPasswordRequest {
  email: string;
  token: string;
  newPassword: string;
}

export interface ResetPasswordResponse {
  message: string;
}

export interface ResetPasswordError {
  statusCode: number;
  message: string | string[];
  error: string;
}
