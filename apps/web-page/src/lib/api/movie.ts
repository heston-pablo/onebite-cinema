import { Movie } from "@/types";

const BASE_URL = "http://localhost:12345/movie";

export async function getAllMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(BASE_URL);

    if (response.ok === false) throw new Error("Fetch Failed");

    return await response.json();
  } catch (err: unknown) {
    console.error(err);

    return [];
  }
}

export async function getMovie(id: Movie["id"]): Promise<Movie | null> {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}`);

    if (response.ok === false) throw new Error("Fetch Failed");

    return await response.json();
  } catch (err: unknown) {
    console.error(err);

    return null;
  }
}

export async function getRandomMovie(): Promise<Movie[]> {
  try {
    const response = await fetch(`${BASE_URL}/random`);

    if (response.ok === false) throw new Error("Fetch Failed");

    return await response.json();
  } catch (err: unknown) {
    console.error(err);

    return [];
  }
}

export async function searchMovie(q: string): Promise<Movie[]> {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${q}`);

    if (response.ok === false) throw new Error("Fetch Failed");

    return await response.json();
  } catch (err: unknown) {
    console.error(err);

    return [];
  }
}
