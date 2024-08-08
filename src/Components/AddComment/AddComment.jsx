import React, { useState } from 'react'
import {postNewComment} from '../../api'

function AddComment(article_id, username) {
    const [newComment, setNewComment] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        postNewComment(newComment, article_id, username)
    }

    function handleChange (event) {
        setNewComment(event.target.value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="Add your comment">
            <input type="text" onBlur={handleChange}/>
        </label>
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddComment