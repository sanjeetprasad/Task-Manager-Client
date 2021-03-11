import React from "react"
import { Link } from "react-router-dom"

//This module is responsible for creating the single HTML representation of a post

export const Task = ({ task }) => {

    return (
        <section className="taskCard">
            <h3>
                <Link to={{ pathname: `/tasks/${task.id}` }}>
                    Title: {task.title}
                </Link>
            </h3>
            <p>Author: {post.user_id}</p>
            <p>Category: {post.category_id}</p>
            <p>Title: {post.Title}</p>
            <p>Publication: {post.publication_date}</p>
            <p>Image: {post.image_url}</p>
            <p>Content: {post.content}</p>
            <p>Approved: {post.approved}</p>
        </section>)

}
