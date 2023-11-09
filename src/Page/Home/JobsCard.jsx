import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const JobsCard = ({ job }) => {
    const { _id, Name, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, View_Details_Button } = job
    return (

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {Name}</h5>
            <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">Job Title: {Job_Title}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Job Posting Date: {Job_Posting_Date}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Application Deadline: {Application_Deadline}</p>
            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Salary range: {Salary_Range}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Job Applicants Number: {Job_Applicants_Number}</p>
            <Link to={`/details/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {View_Details_Button}
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>

    );
};

export default JobsCard;

JobsCard.propTypes={
    job: PropTypes.object
}