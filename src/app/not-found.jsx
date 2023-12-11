"use clien"
import { FileSearch } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-4">
      <FileSearch size={32} className='text-color-accent'/>
        <h3 className="text-color-accent text-2xl font-bold">Not Found</h3>
        <Link href="/" className='text-color-primary hover:text-color-accent transition-all'>Kembali</Link>
      </div>
    </div>
  );
}

export default page