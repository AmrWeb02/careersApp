import React, { useState, useEffect } from 'react'
import JobListing from './JobListing.jsx';
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from './Spinner.jsx';
const JobListings = ({isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchJobs = async () =>{
        const apiURL = isHome ? "http://localhost:4000/jobs?_limit=3" : "http://localhost:4000/jobs";
        try{
          const responseObj = await fetch(apiURL);
          const jobData = await responseObj.json();
          setJobs(jobData);
        }
        catch(error){
          console.log("Error fetching data",error);
        }
        finally{
          setLoading(false);
        }
      }
      fetchJobs();
    }, [])
    
    // console.log(jobs);
    // const jobListings = isHome? jobs.slice(0,3) : jobs;
    return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">{isHome? 'Recent Jobs':'Browse Jobs'}</h2>
          { loading ? <Spinner loading={loading}/> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {jobs.map( (job) => {return(
            <JobListing key={job.id} job={job}/>
            )})} </div>
          }
      </div>
    </section>
  )
}

export default JobListings