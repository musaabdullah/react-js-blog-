import React, { createContext, useState, useEffect  } from 'react';
import axios from 'axios';

export const  PostsContext = createContext();

const PostsContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [visable, setVisable] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const [isPending, setIsPending] = useState(false);
   

    

    useEffect(() => {
        setIsLoading(true);
        setIsPending(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data);
            setPosts(res.data);
            setIsPending(false);
            setIsLoading(false);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <PostsContext.Provider value={{ posts, visable , isLoading, isPending , setVisable }}>
            {props.children}
        </PostsContext.Provider>
        )
}

export default PostsContextProvider;