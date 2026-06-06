import { useState } from "react";
import { saveTokens } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { signup } from "../auth/auth.api";

export function SignupPage() {

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

  async function handleSignup() {

    const response =
      await signup(
        email,
        password,
      );

    saveTokens(
      response.accessToken,
      response.refreshToken,
    );

    navigate("/chat");
  }

  return (

    <div className="h-screen flex items-center justify-center">

      <div className="w-96 rounded-xl border bg-white p-6 shadow">

        <h1 className="mb-6 text-2xl font-bold">
          Signup
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
          onClick={handleSignup}
          className="w-full rounded bg-green-600 py-3 text-white"
        >
          Signup
        </button>

      </div>

    </div>
  );
}