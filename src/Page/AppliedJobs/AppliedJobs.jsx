import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import JobsRow from "./JobsRow";
import toast from "react-hot-toast";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext)

    const [jobs, setJobs] = useState([])

    const url = `https://job-hunting-assignment-server.vercel.app/applyJobs?email=${user.email}`
    useEffect(() => {
        fetch(url, {credentials: 'include'})
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you suer to delete')
        if (proceed) {
            fetch(`https://job-hunting-assignment-server.vercel.app/applyJobs/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        toast.success('Delete Success')
                        const remaining = jobs.filter(job=> job._id !== id)
                        setJobs(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto max-w-6xl mx-auto my-3">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Posting Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => <JobsRow
                                key={job._id}
                                job={job}
                                handleDelete={handleDelete}
                            ></JobsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;