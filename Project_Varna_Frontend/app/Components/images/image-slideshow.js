'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import driverImg from '@/assets/driverImg.jpg'
import artImg from '@/assets/artImg.jpg'
import clayImg from '@/assets/clayImg.jpg'
import cleanerImg from '@/assets/cleanerImg.jpg'
import dishImg from '@/assets/dishImg.jpg'
import graphicImg from '@/assets/graphicImg.jpg'
import paintImg from '@/assets/paintImg.jpg'
import classes from './image-slideshow.module.css';

const images = [
  { image: clayImg, alt: 'Clay artist' },
  { image: artImg, alt: 'An artist' },
  { image: driverImg, alt: 'A driver' },
  { image: cleanerImg, alt: 'Cleaner' },
  { image: dishImg, alt: 'dishWasher' },
  { image: graphicImg, alt: 'Graphic Designer' },
  { image: paintImg, alt: 'Painter' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}