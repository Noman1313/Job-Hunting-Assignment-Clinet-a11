import PropTypes from 'prop-types';

const JobsRow = ({ job, handleDelete }) => {
    const { _id, Name, Job_Title, Job_Posting_Date, Salary_Range, email } = job


    return (
        <tr>
            <td>{Name}</td>
            <td>{Job_Title}</td>
            <td>{email}</td>
            <td>{Salary_Range}</td>
            <td>{Job_Posting_Date}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-xs btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default JobsRow;

JobsRow.propTypes={
    job: PropTypes.object,
    handleDelete: PropTypes.func
    
}