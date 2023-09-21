import React from 'react';
import { Image } from '../api';

interface ImageShowProps {
  image: Image;
}

const ImageShow: React.FC<ImageShowProps> = ({image}) => {
  return (
    <figure className="image-show">
      <img className="image" src={image.url} alt={image.description} />
    </figure>
  )
}  

export default ImageShow;