import React, { useState } from "react";
export const CommentReply = ({idx, setComments, comments, reply}) => {
  const [replyInputEnable, setReplyInputEnable] = useState(false);
  const [commentReply, setCommentReply] = useState("");

  return (
    <div>
        {reply}
      {replyInputEnable && (
        <div>
          <input
            placeholder="add comment reply"
            value={commentReply}
            onChange={(e) => setCommentReply(e.target.value)}
            
          />
          <button
            onClick={() => {
              setComments([
                ...comments,
                comments[idx].replies.push(commentReply),
              ]);
              setReplyInputEnable(false);
              setCommentReply("");
            }}
            
          >
            submit
          </button>
        </div>
      )}

      {!replyInputEnable && (
        <button
          onClick={() => {
            setReplyInputEnable(true);
          }}
        >
          reply
        </button>
      )}
    </div>
  );
};
