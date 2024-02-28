import classes from "./page.module.css";
import SearchBar from "../Components/Professions/search-bar";
import GetPartners from "@/lib/getPartners";
import { Suspense } from "react";
import PartnersGrid from "../Components/Professions/partner-grid";
export const metadata = {
    title: 'All professional',
    description: 'Browse all the professional available',
};

async function FetchedPartners(){
    const partners = await GetPartners();
    return <PartnersGrid partners={partners}/>
} 

export default async function Professions(){
    
    return(
        <>
            <SearchBar />
            <header className={classes.header}>
                <h1>
                    More and More Professionals
                    <span className={classes.hightlight}> For you</span>
                </h1>
                <p>
                    Choose the professionals nearby you!
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Partners For You!</p>}>
                    <FetchedPartners />
                </Suspense>
            </main>
        </>
    )
}