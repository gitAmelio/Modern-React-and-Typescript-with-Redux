import React from 'react';
import ImageShow from './ImageShow';
import { Image } from '../api';
import './ImageList.css'

const imageList = (images: Image[]) => {
  return images.map((image: Image ) => {
    return <ImageShow key={image.id} image={image} />
  })
}

interface ImageListProps {
  images: Image[];
}

const ImageList: React.FC<ImageListProps> = ({images}) => {
  return (
    <div className='image-list'>
      {imageList(images)}
    </div>
  );
}

export default ImageList;