import Link from "next/link";
import styles from "./movie-item.module.css";

import type { Movie } from "@/types";

type MovieItemProps = { movie: Movie };

export const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <img src={movie.posterImgUrl} className={styles.poster_img} />
    </Link>
  );
};
