import { useState } from "react";
import "./Comment.css"
import CommentsForm from "./CommentsForm";
export default function Comment(){

    let [comments,setComments] = useState([
        {
            username : "@sk",
            remark : "Good Job",
            rating : 4
        }
    ]);
    let addNewComment = (comment) =>{
        setComments((currComments)=>{
          return  [...currComments,comment];
        })
    }
    return (
        <div>
            <h2>All Comments</h2>
           {comments.map((comment,idx)=>(
             <div className="comment" key={idx}>
             <span>{comment.remark}</span>
             <br />
             <span>Rating = {comment.rating}</span>
             <br />
             <span><span>-{comment.username}</span></span>
         </div>
           ))}
            <CommentsForm addNewComment={addNewComment} />

        </div>
        
    )
}