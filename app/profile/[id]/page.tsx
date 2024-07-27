"use client";
import React from "react";
import UserProfile from "@/components/User/UserProfile";
import { useRouter } from 'next/router'; // Update the import statement

const Profile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id: string }; // Update the type of router.query

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
      <UserProfile userId={id}/>
  );
};

export default Profile;
