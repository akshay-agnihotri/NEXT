import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Time to get Started
      </h1>
      <p>
        <Link href={"/meals"}>MealsPage</Link>
      </p>
      <p>
        <Link href={"/meals/share"}>Meal</Link>
      </p>
      <p>
        <Link href={"/community"}>Community</Link>
      </p>
    </main>
  );
}
