import { useState } from "react";
import { saveTokens } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { login } from "../auth/auth.api";

export function LoginPage() {

  const navigate =
    useNavigate();

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  async function handleLogin() {

    try {

      const response =
        await login(
          email,
          password,
        );

      saveTokens(
        response.accessToken,
        response.refreshToken,
      );

      navigate("/chat");

    } catch (error) {

      console.error(error);

      alert(
        "Login failed",
      );
    }
  }

  return (

    <div className="h-screen flex items-center justify-center">

      <div className="w-96 rounded-xl border bg-white p-6 shadow">

        <h1 className="mb-6 text-2xl font-bold">
          Login
        </h1>

        <input
          className="mb-3 w-full rounded border p-3"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value,
            )
          }
        />

        <input
          type="password"
          className="mb-4 w-full rounded border p-3"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value,
            )
          }
        />

        <button
          onClick={handleLogin}
          className="w-full rounded bg-blue-600 py-3 text-white"
        >
          Login
        </button>

      </div>

    </div>
  );
}