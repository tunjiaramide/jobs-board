import { Link } from 'react-router-dom';
const NavBar = ({token, logOut}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">Remote Jobs</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {(token) ?
                <li className="nav-item"><button onClick={logOut} className="nav-link btn btn-outline">Logout</button></li> :
                <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
              }
            </ul>
          </div>
        </div>
      </nav> 
    );
}
 
export default NavBar;