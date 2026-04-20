import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

import img1 from '../assets/GalleryImages/1.jpg';
import img2 from '../assets/GalleryImages/2.jpg';
import img3 from '../assets/GalleryImages/3.jpg';
import img4 from '../assets/GalleryImages/4.jpg';
import img5 from '../assets/GalleryImages/5.jpg';
import img6 from '../assets/GalleryImages/6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className="slider">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            ))}
        </div>
    );
};

export default ImageSlider;
