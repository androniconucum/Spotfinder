
'use client';
import User from "@/app/components/user/user"
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  return (
    <>
      <User/>
    </>
  )
}

Home.requireAuth = true