import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";
import movies from "@/dummy.json";
import styles from "./index.module.css";

export default function HomePage() {
  return (
    <div className={styles.conatiner}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={styles.reco_conatiner}>
          {movies.slice(0, 3).map((movie) => (
            <MovieItem key={`reco-movie-${movie.id}`} movie={movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={styles.all_container}>
          {movies.map((movie) => (
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
