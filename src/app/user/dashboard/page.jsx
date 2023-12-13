import React from 'react'
import { authUserSession } from '@/libs/auth-lins'
import Image from 'next/image';

async function page() {
    const user = await authUserSession()
    console.log(user)
  return (
    <div>
      <h3 className="text-color-primary">DASHBOARD</h3>
      <h3 className="text-color-primary">welcome {user.name}</h3>
      <Image src={user.image} height={250} width={250}></Image>
    </div>
  );
}

export default page