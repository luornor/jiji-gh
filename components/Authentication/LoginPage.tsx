"use client";
import React, { useState,ChangeEvent,FormEvent,useRef,useEffect } from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import { signIn } from "next-auth/react";
import ErrorMessage from "../Common/ErrorMessage";
import SuccessMessage from "../Common/SuccessMessage";
import AuthButton from '../Common/AuthButton';
import { IoEyeOff,IoEye } from 'react-icons/io5';



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

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (response?.error) {
        setError(response.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      } else {
        setSuccessMessage("Login successful. Redirecting...");
        setTimeout(() => {
          setSuccessMessage("");
          router.push("/");
        }, 7000);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
    if (!passwordVisible) {
      setTimeout(() => {
        setPasswordVisible(false);
      }, 700);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
              placeholder='user@example.com'
              value={email}
              onChange={handleEmailChange}
              className={`w-full px-3 text-black py-2 bg-gray-200 rounded-lg ${
                emailError ? "border-red-500" : "border"
              } focus:outline-none focus:border-blue-500`}
            />
            {emailError && <p className="text-red-500 font-nunito text-sm  mt-1">{emailError}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder='Enter Your Password'
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 text-black bg-gray-200 rounded-lg border focus:outline-none focus:border-blue-500"
            />
              <span
                className="absolute font-nunito top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-eye text-xl"
                role="button"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <IoEyeOff /> : <IoEye />}
              </span>
          </div>
          <div className='flex items-center justify-center mb-3'>
          <AuthButton loading={loading} text="Login" action={handleSubmit} />
          </div>
          <span className='flex text-md items-center justify-center'>
            <p className='text-black'>Don't Have an Account? </p> <Link className='text-blue-500 b-2 border-blue-500' href="/signup ">Signup Here</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
