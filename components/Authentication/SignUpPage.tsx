"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import Link from "next/link";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";
import ErrorMessage from "../Common/ErrorMessage";
import SuccessMessage from "../Common/SuccessMessage";
import AuthButton from "../Common/AuthButton";
import { useRouter } from "next/navigation";

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [user, setUser] = useState({
    email: "",
    username: "",
    role: "",
    password: "",
  });

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setUser((prevUser) => ({
      ...prevUser,
      username: e.target.value,
    }));
  };

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
    setUser((prevUser) => ({
      ...prevUser,
      role: e.target.value,
    }));
  };

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
    if (!passwordVisible) {
      setTimeout(() => {
        setPasswordVisible(false);
      }, 10000);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    setUser((prevUser) => ({
      ...prevUser,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setUser((prevUser) => ({
      ...prevUser,
      password: e.target.value,
    }));
  };

  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(event.target.value);
  };

  const clearMessageTimeout = () => {
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }
  };

  useEffect(() => {
    if (message || success) {
      clearMessageTimeout();
      messageTimeoutRef.current = setTimeout(() => {
        setMessage("");
        setSuccess("");
      }, 8000);
    }
    return () => {
      clearMessageTimeout();
    };
  }, [message, success]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      setLoading(false); // Ensure loading is set to false on error
      return; // Exit the function early
    }

    setPasswordError(""); // Clear any previous password errors

    try {
      const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}auth/signup/`; // Corrected environment variable access
      const res = await axios.post(baseUrl, user);
      setSuccess(res.data.message);
      setMessage(""); // Clear any previous messages
      router.push("/login");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message || "An unexpected error occurred.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
      // Clear the message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } finally {
      setLoading(false); // Ensure loading is set to false in both success and error cases
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      {!passwordError && message && <ErrorMessage message={message}></ErrorMessage>}
      {!passwordError && !message && success && <SuccessMessage message={success}></SuccessMessage>}

      <div className="card p-4 shadow-lg">
        <h2 className="card-title text-center text-primary">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className={`form-control ${emailError ? "is-invalid" : ""}`}
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUserNameChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <select
              value={role}
              onChange={handleRoleChange}
              className="form-select"
            >
              <option value="user">user</option>
              <option value="shop owner">shop owner</option>
            </select>
          </div>
          <div className="mb-3 position-relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control"
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y pe-3"
              role="button"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
          <div className="mb-3 position-relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="form-control"
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y pe-3"
              role="button"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <IoEyeOff /> : <IoEye />}
            </span>
            {passwordError && (
              <div className="invalid-feedback d-block">{passwordError}</div>
            )}
          </div>
          <div className="d-flex justify-content-center mb-3">
            <AuthButton loading={loading} text="Signup" action={handleSubmit} />
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-2">Already Have an Account?</p>
            <Link href="/login" className="text-primary">
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
