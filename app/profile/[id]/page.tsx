"use client";
import React from "react";
import UserProfile from "@/components/User/UserProfile";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Profile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated" || !session) {
    return <div>You need to be authenticated to view this page.</div>;
  }

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserProfile userId={id as string} session={session} />
    </div>
  );
};

export default Profile;
