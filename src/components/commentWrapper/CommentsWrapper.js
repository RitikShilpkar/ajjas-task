import React, { useState } from "react";
import "./CommentWrapper.css";
import { Input } from "../input/Input";
import { CommentsList } from "../commentsList/CommentsList";

export const CommentsWrapper = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = (text, parentId = null) => {
    const newCommentObj = {
      id: Date.now() + Math.random(),
      value: text,
      likes: 0,
      disLikes: 0,
      replies: []
    };

    if (parentId === null) {
      setComments((prev) => [...prev, newCommentObj]);
    } else {
      setComments((prev) => addReplyToComment(prev, parentId, newCommentObj));
    }
  };

  const addReplyToComment = (comments, parentId, reply) => {
    return comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply]
        };
      } else if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: addReplyToComment(comment.replies, parentId, reply)
        };
      }
      return comment;
    });
  };

  return (
    <div className="comment-section-main">
      <div>Comments section</div>

      <div className="comments-list-section">
        <CommentsList comments={comments} onAddReply={addComment} />
      </div>

      <div className="comment-input">
        <Input setNewComment={setNewComment} newComment={newComment} />
        <button
          className="add-comment"
          onClick={() => {
            if (newComment.trim()) {
              addComment(newComment);
              setNewComment('');
            }
          }}
        >
          Add comment
        </button>
      </div>
    </div>
  );
};
