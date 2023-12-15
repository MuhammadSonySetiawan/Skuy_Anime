import Image from 'next/image'
import Link from 'next/link'
import React, { cloneElement } from 'react'
import Header from '@/components/Dashboard/Header';
import prisma from '@/libs/prisma';
import { authUserSession } from '@/libs/auth-libs';

async function page() {
  const user = await authUserSession()
  const collection =  await prisma.collection.findMany({
    where: { user_email: user.email }
  })

  console.log(collection)
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Collection"}/>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {collection.map((collect, index) => {
        return (
          <Link
            key={index}
            href={`/anime/${collect.anime_mal_id}`}
            className="relative border-2 border-color-accent"
          >
            <Image
              src=""
              alt=""
              height={250}
              width={250}
              className="w-full"
            ></Image>
            <div className="absolute bottom-0 w-full">
              <h5 className="text-xl text-center bg-color-accent">
                Judul Anime - {collect.anime_mal_id}
              </h5>
            </div>
          </Link>
        );
      })}
        
      </div>
    </section>
  );
}

export default page