import { api } from "../api/axios";

export async function signup(
  email: string,
  password: string,
) {
  const response =
    await api.post(
      "api/auth/signup",
      {
        email,
        password,
      },
    );

  return response.data;
}

export async function login(
  email: string,
  password: string,
) {
  const response =
    await api.post(
      "api/auth/login",
      {
        email,
        password,
      },
    );

  return response.data;
}