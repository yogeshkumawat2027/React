import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot empty';
    } 
    return errors;
  };
  

export default function CommentsForm({addNewComment}){  ///  <---------
    // let [formdata,setFormData] = useState({
    //     username : "",
    //     remark : "",
    //     rating : 5
 
    // });
    const formik = useFormik({
        initialValues: {
        username: '',
          remark: '',
          rating: 5,
        },
        validate,     // validate is a function 
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    // let handleInputChange = (event) =>{
    //     setFormData((currData)=>{
    //         return {...currData,[event.target.name] : event.target.value};
    //     })
    // }
    // let handleSubmit = (event) =>{
    //     console.log(formdata);
    //     addNewComment(formdata);      ////  <------------
    //     event.preventDefault();
    //     setFormData({
    //         username : "",
    //         remark : "",
    //         rating : 5
     
    //     })
    // }
     return(
        <div>
            <h2>Give a Comment</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"/>
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <br /> <br />
                
                  

                <label htmlFor="remark">Remark</label>
                <textarea name="remark" id="remark" placeholder="Add Remark" value={formik.values.remark} onChange={formik.handleChange}>Remark</textarea>
                <br />

                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating" name="rating" placeholder="rating" min={1} max={5} value={formik.values.rating}onChange={formik.handleChange}/>
                <br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}