"use client";
import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ErrorMessage from "../Common/ErrorMessage";
import SuccessMessage from "../Common/SuccessMessage";
import AuthButton from "../Common/AuthButton";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { env } from "next-runtime-env";
import axios from "axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const router = useRouter();

  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const clearMessageTimeout = () => {
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const user = { email, password };

    try {
      const loginUrl = env("NEXT_PUBLIC_BASE_URL") + "auth/login/";
      const response = await axios.post(loginUrl, user);

      const token = response.data.token;
      console.log(token);
      sessionStorage.setItem("token", token);

      setSuccessMessage("Login successful. Redirecting...");
      setTimeout(() => {
        setSuccessMessage("");
        router.push("/listings");
      }, 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data);
      } else {
        setError("An unexpected error occurred.");
      }
    }

    setLoading(false);
  };

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
    if (!passwordVisible) {
      setTimeout(() => {
        setPasswordVisible(false);
      }, 10000);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      {error && !emailError && <ErrorMessage message={error}></ErrorMessage>}
      {!error && !emailError && successMessage && (
        <SuccessMessage message={successMessage}></SuccessMessage>
      )}

      <div className="card p-4 shadow-lg">
        <h2 className="card-title text-center text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={handleEmailChange}
              className={`form-control ${emailError ? "is-invalid" : ""}`}
            />
            {emailError && (
              <div className="invalid-feedback">{emailError}</div>
            )}
          </div>
          <div className="mb-3 position-relative">
            <label className="form-label">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control"
            />
            <span
              className="position-absolute top-50 end-0  pe-3"
              role="button"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <AuthButton loading={loading} text="Login" action={handleSubmit} />
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-2">Don't Have an Account?</p>
            <Link href="/signup" className="text-primary">
              Signup Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
