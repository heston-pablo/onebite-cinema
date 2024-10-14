import { MovieItem } from "@/components/movie-item";
import { SearchableLayout } from "@/components/searchable-layout";
import { searchMovie } from "@/lib/api/movie";
import styles from "./index.module.css";

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { q } = context.query;
  const movies = await searchMovie(q as string);

  return {
    props: { movies },
  };
}

export default function SearchPage({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
