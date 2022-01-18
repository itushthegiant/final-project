import React, { useEffect, useState } from "react";
import baseURL from "../api/baseURL";
import JobsTable from "./JobsTable";
import PastJobs from "./PastJobs";

function Jobs({ currentUser }) {
  const [jobs, setJobs] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isApproved, setIsApproved] = useState(true);
  const [sort, setSort] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [isDone, setIsDone] = useState(false);

  // fetch all jobs
  useEffect(() => {
    if (!sort) {
      const fetchJobs = async () => {
        try {
          const response = await baseURL.get("/jobs", {
            withCredentials: true,
          });
          setJobs(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchJobs();
    }
  }, [isApproved, setIsApproved, sort, isDone]);

  // filter the jobs after delete request
  const filterJobs = (id) => {
    const newJobs = jobs.filter((job) => job.id !== id);
    setJobs(newJobs);
  };

  // fetch the specific job to render images
  const fetchJob = async (id) => {
    try {
      const response = await baseURL.get(`/jobs/${id}`, {
        withCredentials: true,
      });
      if (response.statusText === "OK") {
        setCurrentJob(response.data);
        setIsClicked(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // patch job's approval
  const handleApprove = async (id) => {
    try {
      await baseURL.patch(
        `/jobs/${id}`,
        { approved: isApproved },
        { withCredentials: true }
      );
      setIsApproved(!isApproved);
    } catch (err) {
      console.log(err);
    }
  };

  // delete the job if it has been rejected or canceled
  const handleRejection = async (id) => {
    try {
      await baseURL.delete(`/jobs/${id}`, { withCredentials: true });
      filterJobs(id);
    } catch (err) {
      console.log(err);
    }
  };

  // patch job as "done"
  const handleDone = async (id) => {
    try {
      await baseURL.patch(
        `/jobs/${id}`,
        { is_done: true },
        { withCredentials: true }
      );
      setIsDone(true);
    } catch (err) {
      console.log(err);
    }
  };

  // sort by urgency
  const sortByUrgency = (jobs) => {
    const sortedJobs = jobs.sort((a, b) => {
      if (a.urgent > b.urgent) {
        return -1;
      }
      if (a.urgent < b.urgent) {
        return 1;
      }
      return 0;
    });
    setJobs(sortedJobs);
    setSort(!sort);
  };

  return (
    <div>
      {jobs.length === 0 ? (
        <div className="border-8 border-none shadow-2xl rounded-3xl flex items-center justify-center mt-32 m-40 bg-blue-300 bg-opacity-70">
          <h1 className="bold m-10 text-3xl">There are no jobs in your data</h1>
        </div>
      ) : (
        <div>
          <div
            className={isClicked ? "flex bg-gray-600 bg-opacity-60" : "flex"}
          >
            <JobsTable
              sortByUrgency={sortByUrgency}
              handleDone={handleDone}
              handleRejection={handleRejection}
              handleApprove={handleApprove}
              fetchJob={fetchJob}
              currentJob={currentJob}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              jobs={jobs}
              currentUser={currentUser}
              sort={sort}
            />
          </div>
          <div
            className={isClicked ? "flex bg-gray-600 bg-opacity-60" : "flex"}
          >
            <PastJobs
              fetchJob={fetchJob}
              currentJob={currentJob}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              jobs={jobs}
              currentUser={currentUser}
              sort={sort}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
