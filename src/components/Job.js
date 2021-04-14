import './Job.css';
import moment from 'moment';

const Job = ({ _id, job_title, company_name, date_posted, findJob }) => {
    return ( 
        <div className="box">
            <h1>{job_title}</h1>
            <p>{company_name} <span>Posted {moment(date_posted).fromNow()}</span></p>
            <button className="btn" onClick={() => findJob(_id)}>Read More</button>
        </div>
     );
}
 
export default Job;