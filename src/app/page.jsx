import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

export default async function Home ()  {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime", "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 4)

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

      {/* Anime Recomendasi */}
      <section>
        <Header
          title="Rekomendasi"
          linkHref="/new"
          linkTitle="Ikuti Sekarang"
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </div>
  );
}
