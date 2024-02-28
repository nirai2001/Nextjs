import classes from "./partner-grid.module.css"
import PartnerItem from "./partner-item"
export default function PartnersGrid({partners}){
    return(
        <ul className={classes.meals}>
            {partners.map((partner) => 
                (<li key={partner.id}>
                    <PartnerItem {...partner}/>
                </li>)
            )
            }
        </ul>
    )
}