import { useState } from "react";
import "./CommentsList.css";
import { CommentReply } from "../commentReply/CommentReply";


// 

export const CommentsList = ({ comments, setComments }) => {

    
 
  if (!comments.length) {
    return <>No comments</>
  }
  return (
    <div>
      <ul className="comments-wrapper">
        {comments.length > 0 &&
          comments.map((comment, idx) => {
          

            return (
              <div>
                <div>
                  <li className="comment">{comment.value}</li>
                  <ul key={idx}>
                    {" "}
                    {Boolean(comment.replies) &&
                      comment.replies.map((reply, index) => {
                        return <div> 
                              <CommentReply key={index} idx={index} setComments={setComments} comments={comments} reply={reply} comment={comment}/>
                            </div>;
                      })}{" "}
                  </ul>
                </div>
               

                <CommentReply key={idx} idx={idx} setComments={setComments} comments={comments}/>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
