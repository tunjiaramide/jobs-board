
const singleJob = ({ job_title, company_name, job_description, application_link}) => {
    return ( 
        <>
        <h2>{job_title}</h2>
              <h6>{company_name}</h6>
              <p>{job_description}</p>
            <button className="btn"><a href={application_link}>Apply Now</a></button>
        </>
     );
}
 
export default singleJob;