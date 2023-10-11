import { useEffect } from "react";
import { RootState, fetchUsers, addUser } from "../store";
import { useAppSelector } from "../hooks";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

const UsersList = () => { 

  const [doFetchUsers, isLoadingUsers, loadingUsersError ] = useThunk(fetchUsers);
  const [doAddUser, isAddingUser, isAddingUserError] = useThunk(addUser);

  const {data} = useAppSelector((state: RootState)=>{
    return state.users;
  })

  useEffect(()=>{
    doFetchUsers();
  }, []);

  const addUserClick = ()=>{
    doAddUser(); 
  }

  const renderUsers = () => {
    return data.map(user => {
      return (
         <UsersListItem key={user.id} user={user}/> 
      )
    })
  }

  let content: React.ReactNode;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if(loadingUsersError){
    content = <div>Error fetching data...</div>;
  } else {
    content = renderUsers()
  }
  
  return (
    <div >
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isAddingUser} primary onClick={()=>addUserClick()}>+ Add User</Button>
        {isAddingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  )
}

export default UsersList;