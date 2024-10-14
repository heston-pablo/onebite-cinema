import { useRouter } from "next/router";
import { getAllMovies, getMovie } from "@/lib/api/movie";
import styles from "./index.module.css";

import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next/types";

export async function getStaticPaths() {
  const movies = await getAllMovies();

  return {
    paths: movies.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params!.id;
  const movie = await getMovie(Number(id));

  if (!movie) return { notFound: true };

  return {
    props: { movie },
  };
}

export default function MoviePage({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) return "Loading...";
  if (!movie) return "Something's gone wrong. Try again!";

  const {
    title,
    subTitle,
    company,
    runtime,
    description,
    posterImgUrl,
    releaseDate,
    genres,
  } = movie;

  return (
    <div className={styles.container}>
      <div
        className={styles.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} />
      </div>

      <div className={styles.info_container}>
        <div>
          <h2>{title}</h2>
          <div>
            {releaseDate} / {genres.join(", ")} / {runtime}분
          </div>
          <div>{company}</div>
        </div>

        <div>
          <div className={styles.subTitle}>{subTitle}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
}
