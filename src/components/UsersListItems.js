import React from "react";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removerUser } from "../store/thunks/removeUser";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItems = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removerUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  const header = <>
          <Button loading={isLoading} onClick={handleClick} className="mr-3">
          <GoTrash />
          </Button>
          {error && <div>Error Deleting User</div>}
          {user.name}
  </>

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user}/>
    </ExpandablePanel>
  );
};

export default UsersListItems;
