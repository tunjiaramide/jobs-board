import Job from './Job';
import { useState } from 'react';


const JobList = ({ jobs, findJob }) => {
    const [jobNo, setJobNo] = useState(5);
    const [indexNo, setIndex] = useState(0);
    let increment = 5;

    let newJobs = jobs.slice(indexNo, jobNo);

    const nextJob = () => {
        setIndex((prevState) => {
            return prevState + increment;
        })
        setJobNo((prevState) => {
            return prevState + increment;
        })
    }

    const prevJob = () => {
        setIndex((prevState) => {
            return prevState - increment;
        })
        setJobNo((prevState) => {
            return prevState - increment;
        })
    }

    return ( 
        <>
        {newJobs.map((job, index) => {
            return <Job key={index} findJob={findJob} {...job}/>
        })}
        {(indexNo > 0 ) && <button className="btn btn-link" onClick={prevJob}>Prev</button> }
        {(jobNo <= jobs.length) && <button className="btn btn-primary" onClick={nextJob}>Next</button>}
        </>
     );
}
 
export default JobList;