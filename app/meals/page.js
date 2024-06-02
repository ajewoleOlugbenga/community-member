import Link from "next/link";
import React from "react";

const Meals = () => {
  return (
    <main>
        <h1>Welcome to our meal sharing</h1>
        <p>
            <Link href="/meals/share">Buy me coffee</Link>
        </p>
      <p>
        <Link href="/meals/meal-1">Share your meals</Link>
      </p>
    </main>
  );
};

export default Meals;
