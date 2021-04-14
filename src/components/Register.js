import { Link } from 'react-router-dom';

const Register = () => {
    return ( 
        <div className="container">
            <div className="loginCover">
                <form>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" class="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="number" class="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <span>or <Link to="/login">Login to post a Job</Link></span> 
                </form>
            </div>
        </div>  
    );
}
 
export default Register;