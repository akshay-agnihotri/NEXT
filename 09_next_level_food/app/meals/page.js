import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse through a list of delicious meals",
};

async function LoadMeals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const Meals = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals created{" "}
          <span className={classes.highlight}>for you !</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favoriterecipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>fetchingMeals...</p>}
        >
          <LoadMeals />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
