'use client';

import AcmeLogo from "@/app/ui/acme-logo";
import { lusitana } from '@/app/ui/fonts';
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import { redirect } from "next/navigation";

export default function Page() {

  function SearchForm() {
    const [qt, setQt] = useState("");
    return (
      <form action="results?qt={qt}">
        <label htmlFor="qt">Search</label>
        <input
          type="text"
          placeholder="what are you looking for?"
          name="qt"
          id="qt"
          value={qt}
          onChange={(e) => setQt(e.target.value)}
        />
        <button type="submit">Search</button>
      
        <p>{!!qt && `Query term set to: ${qt}`}</p>
      
      </form>
    )
  }

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the NextJS prototype wireframe.
          </p>
          <SearchForm />
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          ToDo add in a search form...
        </div>
      </div>
    </main>
  );
}
