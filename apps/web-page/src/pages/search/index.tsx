import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";

export default function SearchPage() {
  const router = useRouter();

  const { q } = router.query;

  return <h1>검색 결과: {q}</h1>;
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
