
'use client';
import User from "@/app/components/user/user"

export default function Home() {

  return (
    <>
      <User/>
    </>
  )
}

Home.requireAuth = true