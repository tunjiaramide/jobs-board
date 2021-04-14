import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        
            <div className="container">
                <header>
                    <h4>Find the best <span>remote jobs for designers and developers.</span></h4>
                    <h4>Friendly, mobile-first, ad-free interface and blazing fast.</h4>
                    <button className="btn"><Link to="/post-job"> Post a Job</Link> </button>
                </header>
            </div>
       
    );
}
 
export default Header;