import { useState } from 'react';

const Login = ({setUser}) => {

    const [loginUser, setLoginUser] = useState({ email: '', password: ''});

    return ( 
    <div className="container">
        <div className="loginCover">
            <form onSubmit={(e) => setUser(e, {...loginUser})}> 
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" 
                    name="email" 
                    className="form-control" 
                    value={loginUser.email}
                    onChange={(e) => setLoginUser({...loginUser, email: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" 
                    name="password" 
                    className="form-control" 
                    value={loginUser.password}
                    onChange={(e) => setLoginUser({...loginUser, password: e.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                    
            </form>
        </div>
    </div> 
    );
}
 
export default Login;