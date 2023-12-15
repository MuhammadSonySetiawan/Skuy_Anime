"use client"

import React, { useState } from 'react'

const CollectionButton = ({ anime_mal_id, user_email }) => {
    const [isCreate, setIsCreate] = useState(false)

    const handleCollection = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json();
        console.log(collection)
        if(collection.isCreated){
          setIsCreate(true)
        }
        return
    }
  return (
    <>
    {
      isCreate 
      ?
       <p className='text-color-primary'>Berhasil di tambahkan ke koleksi</p> 
      :
    <button
        onClick={handleCollection}
        className="px-2 py-1 text-color-primary"
      >
        Add To Collection
      </button>
    }
    </>
  );
}

export default CollectionButton