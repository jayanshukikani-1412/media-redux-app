import React from 'react'
import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store'
import Skeleton from './Skeleton'
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

const AlbumsList = ({user}) => {
  const {data, error, isFetching} = useFetchAlbumsQuery(user);
  useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const handleAddAlbum = () => {
    addAlbum(user);
  }
  
  let content;
  if(isFetching){
    content = <Skeleton className="h-10 w-full" times={2}/>;
  }else if (error){
    content = <div>Error Loading Albums</div>;
  }else{
    content = data.map(album =>{
      return <AlbumsListItem key={album.id} album={album} />
    })
  }

  return (
    <div>
      <div className='flex flex-row justify-between m-2'>
        <h3 className='text-lg font-bold'>Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add Album
        </Button>
        </div>
      <div>{content}</div>
    </div>
  )
}

export default AlbumsList
