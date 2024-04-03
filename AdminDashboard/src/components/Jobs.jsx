import React from "react";
import "./Jobs.css";
import { JobsData } from "../Data/data";

const Jobs = () => {
  return (
    <div className="Jobs">
      {JobsData.slice(0, 3).map((job) => {
        return (
          <div className="job">
            <div className="job-details">
              <div>
                <div>
                  <a href="#">{job.name}</a>
                </div>
                <div>{job.type}</div>
                <div>
                  {job.company}, <span>{job.location}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
