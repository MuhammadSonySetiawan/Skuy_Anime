import React from 'react'
import Link from 'next/link';
import { authUserSession } from '@/libs/auth-libs';

async function UserActionButton() {
  const user = await authUserSession()
  
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? <Link href="/user/dashboard" className='my-auto'>Dashboard</Link> : null}

      <Link href={actionUrl} className='bg-color-dark text-color-accent rounded p-2'>{actionLabel}</Link>
    </div>
  );
}

export default UserActionButton