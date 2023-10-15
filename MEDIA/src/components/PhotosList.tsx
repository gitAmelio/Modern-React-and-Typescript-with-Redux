import React from "react";
import {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemoveAlbumMutation
} from "../store";
import ExpandablePanel from "./ExpandablePanel"
import Skeleton from "./Skeleton";
import Button from "./Button";
import { Album } from "../store/apis/albumsApi";
import PhotosListItem from "./PhotosListItem";

interface PhotosListProps {
  album: Album;
  [key: string]: any;
}

const PhotosList: React.FC<PhotosListProps> = ({album}) => {
  const {data, error, isFetching} = useFetchPhotosQuery(album)
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  let content;
  if (isFetching) {
    content = <Skeleton className="h-[150px] w-[150px]" times={data?.length || 3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data?.map(photo => {
      return <PhotosListItem key={photo.id} photo={photo}/>
    })
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={()=>addPhoto(album)}>+ Add Photo</Button>
      </div>
      <div className="m-6 flex flex-row items-center justify-center gap-6 flex-wrap">
        {content}
      </div>
    </div>
  )
}

export default PhotosList;