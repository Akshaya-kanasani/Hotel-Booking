import React from 'react';
import { assets } from '../assets/assets';

export const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
          alt="star-icon"
          className="w-[18px] h-[18px]"
        />
      ))}
    </>
  );
};

export default StarRating;
