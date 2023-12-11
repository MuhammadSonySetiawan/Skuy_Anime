export const getAnimeResponse = async(resource, quary) =>{
    const response = await fetch(
      `https://api.jikan.moe/v4/${resource}?${quary}`
    );
    const anime = await response.json()
    return anime
}