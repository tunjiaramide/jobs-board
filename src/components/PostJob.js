import { useState, useEffect } from 'react';
import { jobValidation } from './validation';


const PostJob = ({tokenKey}) => {

    const [jobForm, setJobForm] = useState({
        job_title: '',
        job_description: '',
        job_category: '',
        company_name: '',
        company_email: '',
        website_url: '',
        application_link: ''
    });
    const [valerror, setValError] = useState({});
    const [postForm, setPostForm] = useState({});
    const [jobCreate, setJobCreate] = useState({});
    

    const handleChange = (e) => {
       let target = e.target;
       let value = target.type === 'checkbox' ? target.checked : target.value;
       let name = target.name;

       setJobForm((prevState) => {
           return { ...prevState, [name]: value }
       })
    }

    const postJobForm = (e) => {
        e.preventDefault();
        const { error } = jobValidation(jobForm);
        if (error) return setValError({message: error.details[0].message}) 
        setPostForm(jobForm)
        setJobForm({job_title: '',
        job_description: '',
        job_category: '',
        company_name: '',
        company_email: '',
        website_url: '',
        application_link: ''});
    }

    
    useEffect(() => {
        if(Object.keys(postForm).length !== 0) { 
        let upload = {...postForm, token: tokenKey};
          fetch('http://localhost:5000/api/jobs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(upload),
            })
            .then(response => response.json())
            .then(data => setJobCreate(data))
            .catch(err => console.log(err));
        } 
      },[postForm, tokenKey])

        

    return ( 
        <div className="container">
            <div className="jobCover">
                <h3>Post your Job</h3>
                {(valerror.message) && <div className="alert alert-danger text-center" role="alert">{valerror.message}</div>}
                {(jobCreate.jobCreated) && <div className="alert alert-success text-center" role="alert">Job has been uploaded <a href="/">Click here to view</a></div>}
                <form onSubmit={postJobForm}> 
                    <div className="mb-3">
                        <label className="form-label">Job Title</label>
                        <input type="text" 
                        name="job_title" 
                        className="form-control" 
                        value={jobForm.job_title}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Job Description</label>
                        <textarea className="form-control" rows="10" name="job_description" value={jobForm.job_description} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Job Category</label>
                        <select name="job_category" value={jobForm.job_category}  onChange={handleChange} className="form-control">
                            <option value="null">Choose Category</option>
                            <option value="design">design</option>
                            <option value="development">development</option>
                            <option value="content">content</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Company Name</label>
                        <input type="text" 
                        name="company_name" 
                        className="form-control" 
                        value={jobForm.company_name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Company Email</label>
                        <input type="email" 
                        name="company_email" 
                        className="form-control" 
                        value={jobForm.company_email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Website url</label>
                        <input type="text" 
                        name="website_url" 
                        className="form-control"
                        value={jobForm.website_url}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Application Link</label>
                        <input type="text" 
                        name="application_link" 
                        className="form-control"
                        value={jobForm.application_link}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Post Job</button>
                        
                </form>
            </div>
        </div> 
    );
}
 
export default PostJob;