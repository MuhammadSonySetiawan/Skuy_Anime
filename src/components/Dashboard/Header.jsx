"use client"
import React from 'react'
import { ArrowUUpLeft } from "@phosphor-icons/react";
import {useRouter} from "next/navigation"

function Header({title}) {
    const router = useRouter()

    const handelBack = () => {
        event.preventDefault()
        router.back()
    }
  return (
    <div className="w-full flex justify-between items-center mb-4 ">
      <button className="text-color-primary" onClick={handelBack}>
        <ArrowUUpLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
}

export default Header