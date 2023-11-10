import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";


const JobDetails = () => {
    const job = useLoaderData();
    const { Name, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range } = job;

    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const email = user.email;
    const handleClick = () => {
        const apply = { Name, Job_Title, Job_Posting_Date, Salary_Range, email }
        console.log(apply);

        fetch('https://job-hunting-assignment-server.vercel.app/applyJobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(apply)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.insertedId){
                    toast.success('Job Apply Successfully')
                }
            })

    }

    return (
        <div className="flex justify-center my-20">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {Name}</h5>
                <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">Job Title: {Job_Title}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Job Posting Date: {Job_Posting_Date}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Application Deadline: {Application_Deadline}</p>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Salary range: {Salary_Range}</p>
                <input onClick={handleClick} type="submit" className="btn btn-ghost" value="Apply Now" />
            </div>
        </div>
    );
};

export default JobDetails;