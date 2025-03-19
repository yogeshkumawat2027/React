import { useState } from "react";

export default function Form(){
    let [formData,setFormData] = useState({fullname : "",username : ""});
    let handleInputChange = (event) =>{
        let feildName = event.target.name;
        let newValue  = event.target.value;
        setFormData((currData)=>{
            // currData[feildName] = newValue;
            return {...currData,[feildName] : newValue};
             
        });
        
    }
    let handleSubmit = (event) =>{
        event.preventDefault();
        setFormData({fullname : "",username : ""});
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">FullName</label>
            <br />
            <input type="text" id="fullName" placeholder="Enter Name" value={formData.fullname} onChange={handleInputChange}  name="fullname"/>
            <br /><br /><br />
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" placeholder="Enter Name" value={formData.username} onChange={handleInputChange} name="username" />
            <br /><br /><br />
            <button>Submit</button>
        </form>
    )

}