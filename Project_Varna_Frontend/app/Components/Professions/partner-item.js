import Link from 'next/link';
import Image from 'next/image';
import classes from './partner-item.module.css';

export default function PartnerItem({ name, profession, location, image, rating }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={profession} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{name}</h2>
          <p>{profession},</p>
          <p>{location}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{rating}</p>
        <div className={classes.actions}>
          <Link href={''}>Book now</Link>
        </div>
      </div>
    </article>
  );
}