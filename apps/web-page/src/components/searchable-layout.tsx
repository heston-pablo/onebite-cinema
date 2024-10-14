import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

import type React from "react";

export const SearchableLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!search || q === search) return;

    router.push(`/search?q=${search}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.searchbar_container}>
        <input
          value={search}
          onChange={handleChangeSearch}
          placeholder="검색어를 입력하세요..."
        />
        <button>검색</button>
      </form>
      {children}
    </div>
  );
};
