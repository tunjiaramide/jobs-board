import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import JobList from './components/JobList';
import SingleJob from './components/singleJob';
import Login from './components/Login';
import Register from './components/Register';
import PostJob from './components/PostJob';
import PrivateRoute from './components/PrivateRoute';
import { Route, Redirect, useHistory } from 'react-router-dom';

const getToken = () => {
  // console.log(sessionStorage.getItem('token'));
  return sessionStorage.getItem('token');
}

const App = () => {

  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [singleJob, setSingleJob] = useState();
  const [user, setUser] = useState({ email: '', password: ''});
  const [jwt, setJwt] = useState(getToken());


  

  const setToken = (tokenkey) => {
    sessionStorage.setItem('token', tokenkey);
    setJwt(tokenkey);
  }

  let history = useHistory();


  const removeToken = () => {  
    sessionStorage.removeItem('token');
    setJwt(null);
    history.push('/');
  }
  
  
  useEffect(() => {
    fetch('https://safe-waters-30248.herokuapp.com/api/jobs')
    .then(response => response.json())
    .then(data => {
      setJobs(data.jobs);
    })
    .catch(err => {
      setError(true);
    })
  }, []);

  const updatedUser = (e, {email, password}) => {
    e.preventDefault();
    setUser((prevState) => {
      return {...prevState, email, password}
    })
  }

  useEffect(() => {
    if(user.email.length !== 0 && user.password.length !== 0) {
      fetch('https://safe-waters-30248.herokuapp.com/api/auth/login', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => setToken(data.token))
        .catch(err => console.log(err));
    } 
  },[user])
  

  jobs.sort((a, b) => {
    return Date.parse(b.date_posted) - Date.parse(a.date_posted);
  });


  const findJob = (id) => {
    const singleJob = jobs.find(item => item._id === id)
    setSingleJob(singleJob);
  }

  return (
    <>
      <NavBar token={jwt} logOut={removeToken} />
      <Route exact path="/">
        <Header />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 main">
                {(!error) ? <JobList jobs={jobs} findJob={findJob} /> : 'Please refresh...' }
              </div>
              <div className="col-sm-12 col-md-6 side">
                {(singleJob) ? <SingleJob {...singleJob}/> : '' }
              </div> 
            </div>
          </div>
        </div>
      </Route>

      <Route exact path="/login" component={() => (!jwt) ? <Login setUser={updatedUser} /> : <Redirect to="/post-job" />} />
      

      <Route exact path="/register" component={Register} />

      <PrivateRoute token={jwt} path="/post-job" component={() => <PostJob loginUser={user.email} tokenKey={jwt} />} exact />
      
      
      
    </>
  );
}

export default App;
