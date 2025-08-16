import React, { useState } from "react";
import "./CommentWrapper.css";
import { Input } from "../input/Input";
import { CommentsList } from "../commentsList/CommentsList";

export const CommentsWrapper = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  return (
    <div className="comment-section-main">
      <div>Comments section</div>

      <div className="comments-list-section">
        <CommentsList comments={comments} setComments={setComments} />
      </div>

      <div className="comment-input">
        <Input setNewComment={setNewComment} newComment={newComment} />
        <button
          className="add-comment"
          onClick={() => {
            setComments((prev) => [...prev, {value: newComment, likes: 0, disLikes: 0, replies:[]}]);
            setNewComment('')
          }}
        >
          Add comment
        </button>
      </div>
    </div>
  );
};
