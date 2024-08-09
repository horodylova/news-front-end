import React from 'react';
import { deleteComment } from '../../api';
import DeleteIcon from "../../public/icons/garbage-bin.svg";

function DeleteCommentComponent({ comment_id }) {

    function handleDelete() {
        deleteComment(comment_id)
        .then(() => {
             
            console.log(`Comment ${comment_id} deleted successfully`);
        })
        .catch((error) => {
            console.error(`Error deleting comment: ${error.message}`);
        });
    }

    return (
        <button onClick={handleDelete}>
            <img src={DeleteIcon} alt="garbage bin icon"/>
        </button>
    );
}

export default DeleteCommentComponent;
