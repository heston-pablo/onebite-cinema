import Link from "next/link";
import style from "./global-layout.module.css";

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.container}>
      <header>
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </header>
      {children}
    </div>
  );
};
