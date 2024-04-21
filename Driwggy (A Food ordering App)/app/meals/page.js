import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "../components/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
    title: 'All meals',
    description: 'Browse all the delicious meals',
};

async function FetchedMeals(){
    const meals = await getMeals(); 
    return <MealGrid meals={meals}/>
} 
export default async function Meals(){
    
    return(
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created
                    <span className={classes.hightlight}>By you</span>
                </h1>
                <p>
                    Choose your favourite recipe and cook it Yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favourite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Meals For You!</p>}>
                    <FetchedMeals />
                </Suspense>
            </main>
        </>
    )
}