import { PiTrashFill } from 'react-icons/pi';
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

interface UsersListItemProps {

  
  user: {
    id: string;
    name: string;
  }
}

const UsersListItem: React.FC<UsersListItemProps> = ({user}) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser)

  const handleRemoveClick = () => {
    doRemoveUser(user.id);
  }

  const header = (
    <>
      <Button loading={isLoading} onClick={handleRemoveClick}>
        <PiTrashFill />
      </Button>
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {error && <div>Error deleting user...  </div>}
        {user.name}
      </div>
    </>
  )

  return (
    <ExpandablePanel header={header}>
       <AlbumsList user={user}/>
    </ExpandablePanel>
  )
}

export default UsersListItem;