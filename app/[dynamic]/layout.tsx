import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Layout({
  children,
  params: { dynamic },
}: {
  params: { dynamic: string };
  children: ReactNode;
}) {
  await new Promise((res) => setTimeout(res, 500));

  if (dynamic === "bad") redirect("/good");

  return (
    <div>
      <div>dynamic layout {dynamic}</div>
      {children}
    </div>
  );
}
