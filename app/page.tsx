<<<<<<< HEAD

import Sidenav from "@/app/sidebar/page"
=======
'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
>>>>>>> 13b274600f3fa8259760278c632bc1b71caf2ee3

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });
  return (
<<<<<<< HEAD
    <main>
    <Sidenav />
    </main>
  );
=======
    <div className="p-8">
      <div className='text-white'>{session?.data?.user?.email }</div>
      <button className='text-white' onClick={() => signOut()}>Logout</button>
    </div>
  )
>>>>>>> 13b274600f3fa8259760278c632bc1b71caf2ee3
}

Home.requireAuth = true