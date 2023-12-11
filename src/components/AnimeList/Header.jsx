import React from 'react'
import Link from "next/link";
function Header({title, linkHref, linkTitle}) {
  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-color-primary">{title}</h1>
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="md:text-xl text-md underline hover:text-color-accent transition-all text-color-primary"
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </>
  );
}

export default Header