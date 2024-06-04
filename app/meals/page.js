import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meal-grid";
import GetMeals from "@/lib/meals";

export default async function MealsPage() {
  const meals = await GetMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delious meals created{" "}
          <span className={classes.highlight}>By you</span>
        </h1>
        <p>
          Chose your favorite recipe and cook it yourself.It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
