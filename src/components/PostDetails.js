import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function PostDetails() {

  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        console.log(res.data);
        setPost(res.data);
    })
      .catch(error => console.log(error));
   }, [] );


    return (
        <div>
       {post && <div className="card m-5" style={{width: "700px"}}> 
             <div className="card-body">
                 <h3>{post.title}</h3>
                 <p>{post.body}</p>
             </div>
        </div> }
        </div>
    )
}

export default PostDetails
