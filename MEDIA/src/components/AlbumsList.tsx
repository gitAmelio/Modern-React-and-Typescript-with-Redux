import React from "react";
import { 
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation
 } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

interface AlbumsListProps {
  user: {
    id: string;
    name: string;
  }
}

const AlbumsList: React.FC<AlbumsListProps> = ({user}) => {

  const {data, error, isFetching} = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data?.map(album => {
      const header = <div>{album.title}</div>;

      return <AlbumsListItem key={album.id} header={header} album={album}/>
    })
  }

  return (
  <div>
    <div className="flex flex-row justify-between items-center m-2">
      <h3 className="text-lg font-bold">Albums for {user.name}</h3>
      
      <Button loading={results.isLoading} onClick={()=>addAlbum(user)}>
        + Add Album
      </Button>
    </div>

    <div>
      {content}
    </div>
  </div>
  )
}

export default AlbumsList;