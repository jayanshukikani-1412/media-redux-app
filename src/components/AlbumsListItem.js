// import Button from "./Button";
import Button from './Button';
import ExapandablePanel from './ExpandablePanel'
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumsMutation } from '../store';
import PhotosList from './PhotosList';

import React from 'react'

const AlbumsListItem = ({ album }) => {
    const [removeAlbum, results] = useRemoveAlbumsMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }

    const header = (
        <>
            <Button classname="mr-3" onClick={handleRemoveAlbum}><GoTrash /></Button>
            {album.title}
        </>
    );

    return <ExapandablePanel key={album.id} header={header} loading={results.isLoading}>
       <PhotosList album={album}/>
    </ExapandablePanel>
}

export default AlbumsListItem
