import SearchableLayout from "@/components/searchable-layout";

export default function HomePage() {
  return <h1>ONEBITE CINEMA</h1>;
}

HomePage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
