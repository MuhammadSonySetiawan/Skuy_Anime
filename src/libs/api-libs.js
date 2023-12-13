import { response } from "express";

export const getAnimeResponse = async(resource, quary) =>{
    const response = await fetch(
      `https://api.jikan.moe/v4/${resource}?${quary}`
    );
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse = async(resource, objectProperty) =>{
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[objectProperty]);
}

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data?.length - gap) + 1)
  const last = first + gap

  // console.log({first, last})
  const response = {
    data : data.slice(first, last)
  }

  return response
}