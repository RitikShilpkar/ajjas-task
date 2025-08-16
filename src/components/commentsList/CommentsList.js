import { useState } from "react";
import "./CommentsList.css";

const CommentItem = ({ comment, onAddReply, depth = 0 }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleAddReply = () => {
    if (replyText.trim()) {
      onAddReply(replyText, comment.id);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div className="comment-item" style={{ marginLeft: `${depth * 20}px` }}>
      <div className="comment-content">
        <div className="comment-text">{comment.value}</div>
        <div className="comment-actions">
          <button 
            className="reply-btn"
            onClick={() => setShowReplyInput(!showReplyInput)}
          >
            Reply
          </button>
        </div>
      </div>

      {showReplyInput && (
        <div className="reply-input-section">
          <input
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="reply-input"
          />
          <div className="reply-actions">
            <button onClick={handleAddReply} className="submit-reply-btn">
              Submit
            </button>
            <button 
              onClick={() => {
                setShowReplyInput(false);
                setReplyText("");
              }}
              className="cancel-reply-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="replies-section">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onAddReply={onAddReply}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const CommentsList = ({ comments, onAddReply }) => {
  if (!comments.length) {
    return <div className="no-comments">No comments</div>;
  }

  return (
    <div className="comments-wrapper">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onAddReply={onAddReply}
          depth={0}
        />
      ))}
    </div>
  );
};
