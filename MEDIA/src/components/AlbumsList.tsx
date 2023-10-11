import React from "react";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

interface AlbumsListProps {
  user: {
    id: string;
    name: string;
  }
}

const AlbumsList: React.FC<AlbumsListProps> = ({user}) => {

  const albums = useAppSelector((state: RootState)=>{
    // return state.albums
  })

   return (
    <div>Albums for {user.name}</div>
   )
}

export default AlbumsList;