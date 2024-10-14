import style from "./global-layout.module.css";
import Link from "next/link";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <header>
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </header>
      {children}
    </div>
  );
}
