import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

export default async function Home ()  {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <div>
      {/* anime Poluler */}
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* Anime terbaru */}
      <section>
        <Header
          title="Paling bBaru"
          linkHref="/new"
          linkTitle="Ikuti Sekarang"
        />
        <AnimeList api={topAnime} />
      </section>

    </div>
  );
}
