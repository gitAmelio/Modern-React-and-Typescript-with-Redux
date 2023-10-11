import { PiTrashFill } from 'react-icons/pi';
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from './Button';

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

  return (
    <div className="mb-2 border rounded flex flex-row items-center">
      <Button loading={isLoading} onClick={handleRemoveClick}><PiTrashFill /></Button>

      <div className="flex p-2 justify-between items-center cursor-pointer">
        {error && <div>Error deleting user...  </div>}
        {user.name}
      </div>
    </div>
  )
}

export default UsersListItem;