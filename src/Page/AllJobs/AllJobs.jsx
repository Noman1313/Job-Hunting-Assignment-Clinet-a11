import { useEffect, useState } from "react";
import JobsCard from "../Home/JobsCard";


const AllJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    jobs.map(job => <JobsCard
                        key={job._id}
                        job={job}
                    ></JobsCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;