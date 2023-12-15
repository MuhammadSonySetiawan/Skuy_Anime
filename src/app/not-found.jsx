"use client"
import { FileSearch } from '@phosphor-icons/react/dist/ssr';
import React from 'react'
import { useRouter } from 'next/navigation';

function page() {
const router = useRouter()

const handleBack = () => {
  event.preventDefault()
  router.back()
}
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-4">
        <FileSearch size={32} className="text-color-accent" />
        <h3 className="text-color-accent text-2xl font-bold">Not Found</h3>
        <button
          onClick={handleBack}
          className="text-color-primary hover:text-color-accent transition-all"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}

export default page