"use client";
import React, { useState, ChangeEvent, FormEvent,useEffect,useRef } from 'react';
import Link from "next/link";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";
import ErrorMessage from "../Common/ErrorMessage";
import SuccessMessage from "../Common/SuccessMessage";
import AuthButton from '../Common/AuthButton';
import { useRouter } from 'next/navigation';


const SignupPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>("");

  const [username, setUsername] = useState<string>('');
  const [role, setRole] = useState<string>('user');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
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
      },10000);
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
      router.push('/login');
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!passwordError && message && <ErrorMessage message={message}></ErrorMessage>}
      {!passwordError && !message && success && <SuccessMessage message={success}></SuccessMessage>}

      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
              className={`w-full px-3 text-black py-2 bg-gray-200 rounded-lg ${
                emailError ? "border-red-500" : "border"
              } focus:outline-none focus:border-blue-500`}
            />
            {emailError && <p className="text-red-500 font-nunito text-sm  mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={handleUserNameChange}
              className="w-full px-3 py-2 text-black bg-gray-200 rounded-lg border focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <select
              value={role}
              onChange={handleRoleChange}
              className="w-full block px-3 py-2 text-gray-500 bg-gray-200 rounded-lg border  focus:outline-none focus:border-blue-500"
            >
             <option className='text-black bg-blue-500'>user</option>
             <option className='text-black'>shop owner</option>
            </select>

          </div>
          <div className="mb-4 relative">
            <input
              type="password"
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
          <div className="mb-6 relative">
            <input
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full px-3 py-2 text-black bg-gray-200 rounded-lg border focus:outline-none focus:border-blue-500"
            />
            <span
                className="absolute text-gray-700 font-nunito top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-md text-eye"
                role="button"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <IoEyeOff /> : <IoEye />}
              </span>
              {passwordError && (
              <p className="text-red-500 font-nunito text-sm  mt-1">{passwordError}</p>
            )}
          </div>
          <div className='flex items-center justify-center mb-3'>
          <AuthButton loading={loading} text="Signup" action={handleSubmit} />
          </div>
          <span className='flex text-md items-center justify-center'>
            <p className='text-black'>Already Have an Account? </p> <Link className='text-blue-500 b-2 border-blue-500' href="/login ">Login Here</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
