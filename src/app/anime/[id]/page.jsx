import { getAnimeResponse } from '@/libs/api-libs'
import Image from 'next/image'
import React from 'react'
import VideoPlayer from '@/components/Utilities/VideoPlayer'
import CollectionButton from '@/components/AnimeList/CollectionButton'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'

async function page({ params : { id } }) {
    const anime = await getAnimeResponse(`anime/${id}`, )
    const user = await authUserSession()
    
    const collection = await prisma.collection.findFirst({
      where: 
      {
        user_email: user?.email,
        anime_mal_id: id,
      }
    });
    
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && (
          <CollectionButton anime_mal_id={id} user_email={user?.email} />
        )}

        <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Peringkat</h3>
            <p>{anime.data.rank}</p>
          </div>

          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Skor</h3>
            <p>{anime.data.score}</p>
          </div>

          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Anggota</h3>
            <p>{anime.data.members}</p>
          </div>

          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Episode</h3>
            <p>{anime.data.episodes}</p>
          </div>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={150}
            height={150}
            className="w-full rounded object-cover"
          />
          <p className="text-justify text-xl">{anime.data.synopsis}</p>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
}

export default page