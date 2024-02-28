import Link from "next/link";
import logoImg from "@/assets/logoImg.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader(){
    return(
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href ="/">
            <Image src = {logoImg} alt="A plate with food on it" priority />
            Varna
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href="/Professions">Browse Professions </NavLink>
                </li>
                <li>
                    <NavLink href="/Partners">Join Varna</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </> 
)
}