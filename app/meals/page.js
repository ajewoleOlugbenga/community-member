import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meal-grid";
import {GetMeals} from "@/lib/meals";
import { Suspense } from "react";


 async function Meals() {
  const meals = await GetMeals();
  return <MealsGrid meals={meals} />
}
export default async function MealsPage() {
  
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
        <Suspense fallback={<p className={classes.loading}>fetching meals...</p>}>
          <Meals/>
        </Suspense>
      </main>
    </>
  );
}
