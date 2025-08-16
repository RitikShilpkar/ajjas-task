import React, { useState } from "react";
export const CommentReply = ({idx, setComments, comments, reply, replies}) => {
  const [replyInputEnable, setReplyInputEnable] = useState(false);
  const [commentReply, setCommentReply] = useState("");
  const [commentReplies, setCommentReplies]= useState(reply?.replies);


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
            !commentReplies ?  setComments([
                ...comments,
                comments[idx].replies.push(commentReply),
              ]) : 
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

      {
        Boolean(commentReplies) && (
            <div>test</div>
        )
      }
    </div>
  );
};
