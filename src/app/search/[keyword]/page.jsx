import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

export default async function Home({params}) {
   const keyword = params.keyword;
   
  //  decodeURI() = untuk menghilangkan %20 di spasi yang ada di url
   const decodedKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <div>
      {/* anime Search */}
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
}
