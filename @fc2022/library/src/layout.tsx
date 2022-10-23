import type { ReactNode } from "react";

export function Layout({
  header,
  main,
}: {
  header: ReactNode;
  main: ReactNode;
}) {
  return (
    <div>
      <header>{header}</header>
      <main>{main}</main>
    </div>
  );
}
