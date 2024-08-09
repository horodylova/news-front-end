import React , {useContext} from "react";
import { AppContext } from "../../contexts/AppContext";
import { toast } from 'react-toastify';
import { deleteComment } from "../../api";
import DeleteIcon from "../../public/icons/garbage-bin.svg";

function DeleteCommentComponent({ comment_id, commentAuthor, currentUser }) {
  const { commentsList, setCommentsList } = useContext(AppContext);
  function handleDelete() {
    deleteComment(comment_id)
      .then(() => {
        setCommentsList((currentList) => {
          return currentList.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
        toast.success(`Comment ${comment_id} deleted successfully`);
      })
      .catch((error) => {
        toast.error(`Error deleting comment: ${error.message}`); 
      });
  }
  if (currentUser !== commentAuthor) {
    return null;
  }

  return (
    <button onClick={handleDelete}>
      <img src={DeleteIcon} alt="garbage bin icon" />
    </button>
  );
}

export default DeleteCommentComponent;
