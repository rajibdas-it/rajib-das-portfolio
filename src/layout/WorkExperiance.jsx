/* eslint-disable react/no-unescaped-entities */

import img from "../assets/images/job.png";

const WorkExperiance = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 justify-center gap-4">
      <div className="border border-myRed lg:col-span-5">
        <img src={img} alt="" height={300} />
      </div>

      <div className="border border-myRed lg:col-span-7">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2021-PRESENT</time>
              <div className="text-xl font-black">Software Engineer</div>
              <div className="text-lg font-black">
                SM Knitwear Limited, Dhaka, Bangladesh
              </div>
              In-house ERP system's sub modules were created using Dream Apps
              ERP++. Developed programs using MSSQL Server and Created reports
              for management with Crystal Report. Participate significantly in
              team tasks.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2018-2021</time>
              <div className="text-lg font-black">RMM Group</div>
              Administrative support including technical support, prepare
              proposals, IT-related support and communication & liaise with the
              partner.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperiance;
