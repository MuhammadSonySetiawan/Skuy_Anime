"use client"
import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Paginetion from '@/components/Utilities/Paginetion';
import AnimeList from '@/components/AnimeList';
import { getAnimeResponse } from '../libs/api-libs';

function page () {
  const [page, setPage] =useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  }

  useEffect(() => {
    console.log(page);
    fetchData();
  }, [page])

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler - ${page}`} />
      <AnimeList api={topAnime} />
      <Paginetion
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage = {setPage}
      />
    </>
  );
}

export default page