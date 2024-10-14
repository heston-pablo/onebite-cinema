import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import movies from "@/dummy.json";
import styles from "./index.module.css";

export default function SearchPage() {
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
