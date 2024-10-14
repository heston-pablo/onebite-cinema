import { SearchableLayout } from "@/components/searchable-layout";
import { MovieItem } from "@/components/movie-item";
import { getAllMovies, getRandomMovie } from "@/lib/api/movie";
import styles from "./index.module.css";

import type { InferGetStaticPropsType } from "next/types";

export async function getStaticProps() {
  const [allMovies, recoMovies] = await Promise.all([
    getAllMovies(),
    getRandomMovie(),
  ]);

  return {
    props: {
      allMovies,
      recoMovies,
    },
  };
}

export default function HomePage({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.conatiner}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={styles.reco_conatiner}>
          {recoMovies.map((movie) => (
            <MovieItem key={`reco-movie-${movie.id}`} movie={movie} />
          ))}
        </div>
      </section>

      <section>
        <h3>등록된 모든 영화</h3>
        <div className={styles.all_container}>
          {allMovies.map((movie) => (
            <MovieItem key={`all-movie-${movie.id}`} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

HomePage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
