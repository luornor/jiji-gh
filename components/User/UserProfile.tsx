"use client";
import React, { useState, useEffect,ChangeEvent } from 'react';
import axios from 'axios';
import AuthButton from '../Common/AuthButton';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({userId}) => {
  const [user, setUser] = useState({ username: '', email: '' });
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();


  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}auth/users`; // Corrected environment variable access
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`${baseUrl}/${userId}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setMessage(response.data.message as string);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setMessage(error as string);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setUser((prevUser) => ({
      ...prevUser,
      username: e.target.value,
    }));
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.put(`${baseUrl}/${userId}`, user); // Adjust the URL as needed
      setSuccess(res.data.message);
      setMessage("");
      setLoading(false);
      router.push('/login');

      // Handle successful update (e.g., show a success message)
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
      // Handle error (e.g., show an error message)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Manage Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUserNameChange}
              className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-center">
            <AuthButton loading={loading} text="Update" action={handleSubmit} />
            <Link href='/listings'>
            <button>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
