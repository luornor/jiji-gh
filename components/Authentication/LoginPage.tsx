"use client";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
} from "react";
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
      console.log(token)
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
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      {error && !emailError && <ErrorMessage message={error}></ErrorMessage>}
      {!error && !emailError && successMessage && (
        <SuccessMessage message={successMessage}></SuccessMessage>
      )}

      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={handleEmailChange}
              className={`w-full px-3 text-black py-2 bg-gray-200 rounded-lg ${
                emailError ? "border-red-500" : "border"
              } focus:outline-none focus:border-blue-500`}
            />
            {emailError && (
              <p className="text-red-500 font-nunito text-sm  mt-1">
                {emailError}
              </p>
            )}
          </div>
          <div className="mb-6 details relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 text-black bg-gray-200 rounded-lg border focus:outline-none focus:border-blue-500"
            />
            <span
                className="absolute font-nunito text-gray-700 top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-md text-eye"
                role="button"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
          <div className="flex items-center justify-center mb-3">
            <AuthButton loading={loading} text="Login" action={handleSubmit} />
          </div>
          <span className="flex text-md items-center justify-center">
            <p className="text-black">Don't Have an Account? </p>{" "}
            <Link className="text-blue-500 b-2 border-blue-500" href="/signup ">
              Signup Here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
