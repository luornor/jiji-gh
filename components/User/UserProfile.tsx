"use client";
import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import AuthButton from '../Common/AuthButton';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const UserProfile: React.FC = () => {
  const params = useParams<{ id: string }>();

  const [user, setUser] = useState({ username: '', email: '' });
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter();
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}auth/users`;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`${baseUrl}/${params.id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setMessage(error as string);
        setLoading(false);
      }
    };
    fetchUserData();
  }, [params.id]);

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
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
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
      const res = await axios.put(`${baseUrl}/${params.id}/`, user);
      setSuccess(res.data.message);
      setMessage('');
      setLoading(false);
      router.push('/listings');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message || 'An unexpected error occurred.');
      } else {
        setMessage('An error occurred. Please try again later.');
      }
      setTimeout(() => {
        setMessage('');
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Manage Your Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="form-control"
              />
              {emailError && <div className="text-danger">{emailError}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleUserNameChange}
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <AuthButton loading={loading} text="Update" action={handleSubmit} />
              <Link href="/listings">
                <button type="button" className="btn btn-secondary ms-3">Cancel</button>
              </Link>
            </div>
          </form>
          {message && <div className="alert alert-danger mt-3">{message}</div>}
          {success && <div className="alert alert-success mt-3">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
