import React from 'react'
import { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';
import { Link } from 'react-router-dom';
function Home() {
    const { posts, visable,isLoading,isPending, setVisable } = useContext(PostsContext);

    return (
        <div>
            {isLoading && <div style={{position: "fixed", top: "43%", right:"45%", background: "black", color: "white", padding: 50, borderRadius: 20}}><i style={{fontSize: "2em", color: "white"}} className="fa fa-spinner fa-pulse text-white"></i>  Loading....</div>}
            { posts ? <div>
                    { posts.slice(0, visable).map((post) => (
                        <div key={post.id} className="card m-4" style={{width: 600}}>
                        <div  className="card-body">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <Link  className="btn btn-primary" to={`/postDetails/${post.id}`} >Read more</Link>
                        </div>
                        </div>
                    )) }
                    
                    {isPending && <button onClick={() => setVisable(visable => visable + 4)} className=" mb-5 btn btn-success justify-content-center">Fetching data</button>}
                    {!isPending && <button onClick={() => setVisable(visable => visable + 4)} className=" mb-5 btn btn-success justify-content-center">Show more</button>}

                    
                    </div> : 
            <div>
                <h2>There is no posts</h2>
            </div>
            }
        </div>
    )
}

export default Home
