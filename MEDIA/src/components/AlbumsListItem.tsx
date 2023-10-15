import { PiTrashFill } from 'react-icons/pi';
import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { Album, useRemoveAlbumMutation } from "../store/apis/albumsApi";
import PhotosList from './PhotosList';


interface AlbumsListItemProps {
  album: Album; 
  [key: string]: any;
}

const AlbumsListItem: React.FC<AlbumsListItemProps> = ({ album, props}) => {

  const [removeAlbum, results] = useRemoveAlbumMutation();

  const header = <div className="flex flex-row items-center justify-between">
    <Button loading={results.isLoading} onClick={()=>removeAlbum(album)} className="m-3" ><PiTrashFill /></Button>
    {album.title}
  </div>

  return (
    <ExpandablePanel header={header} {...props}>
        <PhotosList album={album}/>
    </ExpandablePanel>
  )
}

export default AlbumsListItem;