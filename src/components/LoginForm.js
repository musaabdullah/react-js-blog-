import React from 'react'
import { Link } from 'react-router-dom';
function LoginForm() {
    return (
        
             <div className="d-flex justify-content-center align-items-center">
                 <div className="card p-0 m-5 " style={{width: 400}}>
                     <div className="card-header text-white bg-dark">
                         <h3>Login form</h3>
                     </div>
                     <div className="card-body">
                         <form>
                             <div className="form-group">
                                 <label>username</label>
                                 <input type="text" className="form-control" placeholder="Enter username" />
                             </div>
                             <div className="form-group">
                                 <label>password</label>
                                 <input type="password" className="form-control" placeholder="Enter password" />
                             </div>
                             <div className="container mt-3 text-center">
                                 <button className="btn btn-primary">Login</button>
                                 <button className="btn btn-danger" style={{ marginLeft: 7}}>Cancel</button>
                             </div>
                             <p style={{fontSize: 13, marginTop: 10}}>Click here to register if you're not registered ? <Link to="/register">Register</Link></p>

                         </form>
                     </div>
                 </div>
             </div>
         
    )
}

export default LoginForm
