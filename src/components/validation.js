import Joi from 'joi';

export const jobValidation = (data) => {
    const schema = Joi.object({
        job_title: Joi.string().required().min(5).label("Job Title"),
        job_description: Joi.string().required().min(10).label("Job Description"),
        job_category: Joi.string().required(),
        company_name: Joi.string().min(5).required().label("Company Name"),
        company_email: Joi.string().required().email({tlds: { allow: false }}).label("Email"),
        website_url: Joi.string().required().label("Website"),
        application_link: Joi.string().required().min(5).label("Application Link")
    })
    return schema.validate(data);
}
