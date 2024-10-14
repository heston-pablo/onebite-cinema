import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieItem } from "@/components/movie-item";
import { SearchableLayout } from "@/components/searchable-layout";
import { searchMovie } from "@/lib/api/movie";
import styles from "./index.module.css";

import type { Movie } from "@/types";

export default function SearchPage() {
  const router = useRouter();
  const q = router.query.q as string;

  const [searchedMovies, setSearchedMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    if (!q) return;

    (async () => {
      const movies = await searchMovie(q);
      setSearchedMovies(movies);
    })();
  }, [q]);

  return (
    <div className={styles.container}>
      {searchedMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
