"use client";
import React from "react";
import UserProfile from "@/components/User/UserProfile";
import { useParams } from 'next/navigation'; // Update the import statement

const Profile: React.FC = () => {
  const params = useParams<{ id: string }>();

  if (!params) {
    return <div>Loading...</div>;
  }

  return (
      <UserProfile/>
  );
};

export default Profile;
