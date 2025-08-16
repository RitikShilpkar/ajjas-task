

export const Input = ({setNewComment, newComment})=> {
    return (

        <div>
            <input placeholder="comment here" value={newComment} onChange={(e)=>{
                 setNewComment(e.target.value)
            }}/>
        </div>
    )
}