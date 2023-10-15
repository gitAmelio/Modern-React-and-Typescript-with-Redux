import React from "react";
import { PiTrashFill } from 'react-icons/pi';
import { useRemovePhotoMutation } from "../store";

interface PhotosListItemProps {
  photo: {
    id: string;
    url: string;
    albumId: string;
  }
}

const PhotosListItem: React.FC<PhotosListItemProps> = ({photo}) => {
  const [removePhoto, results] = useRemovePhotoMutation()

  return (
    <figure className="relative cursor-pointer m-2" onClick={()=>removePhoto(photo)}>
      <img src={photo.url} alt="Photo" />
      <div className="absolute inset-0 flex items-cneter justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 ">
        <PiTrashFill className="text-3xl origin-center translate-y-[200%]  scale-[2.5]" />
      </div>
    </figure>
  )
}

export default PhotosListItem;