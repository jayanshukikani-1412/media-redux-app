import React from 'react'
import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store'
import Skeleton from './Skeleton'
import ExapandablePanel from './ExpandablePanel'
import Button from './Button';

const AlbumsList = ({user}) => {
  const {data, error, isLoading} = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  }
  
  let content;
  if(isLoading){
    content = <Skeleton times={2}/>
  }else if (error){
    content = <div>Error Loading Albums</div>
  }else{
    content = data.map(album =>{
      const header = <div>{album.title}</div>
      return <ExapandablePanel key={album.id} header={header}>
        List Of Photos in the album
      </ExapandablePanel>
    })
  }

  return (
    <div>
      <div className='d-flex justify-space-between'>
        Albums for {user.name}
        <Button onClick={handleAddAlbum}>
          + Add Album
        </Button>
        </div>
      <div>{content}</div>
    </div>
  )
}

export default AlbumsList
