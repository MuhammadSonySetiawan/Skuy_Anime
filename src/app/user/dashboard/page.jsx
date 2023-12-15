import React from 'react'
import { authUserSession } from '@/libs/auth-libs'
import Image from 'next/image';
import Link from 'next/link';
// import { redirect } from 'next/navigation';

async function page() {
    const user = await authUserSession()
    console.log(user)

    // if(!user) redirect("/")

  return (
    <div className="mt-8 gap-3 flex justify-center items-center flex-col font-bold">
      <h3 className="text-color-primary">Welcome {user?.name}</h3>
      <Image
        src={user?.image}
        height={250}
        width={250}
        className="rounded-full"
      />
      <div className="flex p-8 gap-4">
        <Link
          href="/user/dashboard/collection"
          className="bg-color-accent text-color-dark p-2 rounded hover:bg-color-primary "
        >
          My Collection
        </Link>
        <Link
          href="/user/dashboard/comment"
          className="bg-color-accent text-color-dark p-2 rounded hover:bg-color-primary"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
}

export default page