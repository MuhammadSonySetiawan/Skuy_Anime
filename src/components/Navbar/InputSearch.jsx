"use client"
// import React from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

function InputSearch() {
  const searchRef = useRef()
  const router = useRouter()

  const hendleSearch = (event) =>{
    const keyword = searchRef.current.value;
    
    if(!keyword || keyword.trim() == "") return

    if(event.key === "Enter" || event.type === "click"){
      event.preventDefault()
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`)
    }
  }
  
  return (
    <div className='relative'>
      <input 
        placeholder="Cari anime" 
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={hendleSearch}
      />
        <button className='absolute top-2 end-2' onClick={hendleSearch}>
          <MagnifyingGlass size={24} />
        </button>
    </div>
  );
}

export default InputSearch