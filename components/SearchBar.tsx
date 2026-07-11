"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { useState } from "react";
import { Search } from "lucide-react";


const SearchBar = () => {


  const router = useRouter();

  const searchParams = useSearchParams();


  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );



  const handleSearch = (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    const params = new URLSearchParams(
      searchParams.toString()
    );



    if (search.trim()) {

      params.set(
        "search",
        search
      );

    } else {

      params.delete("search");

    }



    router.push(
      `/foods?${params.toString()}`
    );

  };



  return (

    <form
      onSubmit={handleSearch}
      className="
        max-w-3xl
        mx-auto
        flex
        gap-3
      "
    >


      <div
        className="
          flex-1
          flex
          items-center
          gap-3
          bg-slate-800
          border
          border-slate-700
          rounded-xl
          px-4
          focus-within:border-blue-500
          transition
        "
      >

        <Search
          size={22}
          className="text-slate-400"
        />


        <input

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

          placeholder="Search your favorite food..."

          className="
            w-full
            bg-transparent
            text-white
            placeholder:text-slate-500
            py-3
            outline-none
          "

        />


      </div>




      <button

        type="submit"

        className="
          px-7
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          transition
          shadow-lg
        "

      >

        Search

      </button>


    </form>

  );

};


export default SearchBar;