import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import css from "./css/PostJobProfile.module.css";
function PostJob() {
  //Handle Event
  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();
  //Handle Submit
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    const data = require("./json/country.json");
    // console.log(data);
    setCountries(data);
  }, [countries]);
  useEffect(() => {
    const data = require("./json/city.json");
    // console.log(data);
    setCity(data);
  }, [city]);

  return (
    <React.Fragment>
      <div className={("container-md  bg-light p-2 ", css.root)}>
        <div className="text-secondary m-5">
          <h1>Post Job</h1>
        </div>
        <div className={("container", css.border_radius)}>
          <div className="row align-items-center">
            <div className="col ">
              <form className="row g-3 " onSubmit={handleSubmit(onSubmit)}>
                {/* Job Title */}
                <div className="col-md-12">
                  <label htmlFor="jobtitle" className="form-label">
                    Job Title<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="jobtitle"
                    type="text"
                    placeholder="Job Title"
                    className={`form-control  ${
                      errors.jobtitle && css.daynamic
                    }`}
                    {...register("jobtitle", {
                      required: "Job Title is required",
                      minLength: {
                        value: 2,
                        message: "Please enter a valid Job Title",
                      },

                      maxLength: {
                        value: 50,
                        message: "maximum length allowed is 200 word",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: " Please enter fully alphabate",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("jobtitle");
                    }}
                  />
                  {errors.jobtitle && (
                    <span style={{ color: "red" }}>
                      {errors.jobtitle.message}
                    </span>
                  )}
                </div>
                {/* Skills */}
                <div className="col-md-6">
                  <label htmlFor="Skills" className="form-label">
                    Skills
                  </label>
                  <select
                    {...register("Skills")}
                    id="Skills"
                    className="form-select "
                  >
                    <option value="0">JavaScript</option>
                    <option value="1">JavaScript</option>
                    <option value="2">Php</option>
                    <option value="3">Node</option>
                    <option value="4">C</option>
                    <option value="5">C# </option>
                  </select>
                </div>
                {/* Experience */}
                <div className="col-md-6 ">
                  <label htmlFor="inputState" className="form-label">
                    Overall Experience
                  </label>
                  <select
                    {...register("experience")}
                    id="inputState"
                    placeholder="4.5"
                    className="form-select "
                  >
                    <option value="1">0-1 years</option>
                    <option value="2">1-3 years</option>
                    <option value="2">3-5 years</option>
                    <option value="2">5-10 years</option>
                    <option value="2">10-20 years</option>
                    <option value="2">20+ years</option>
                  </select>
                </div>{" "}
                {/* Skills Experience */}
                <div className="col-md-12 border border-light bg-light ">
                  <div className="input-group   d-flex justify-content-between">
                    <p>Skills Experience</p>
                  </div>
                  <div className="input-group   d-flex justify-content-between">
                    <p>S.No</p>
                    <p>Skill</p>
                    <p> Experience (years)</p>
                  </div>

                  <div className="col-md-12 mb-3 row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="input-group  col">
                      <div className="input-group-text col-md-0 bg-light ">
                        1.
                      </div>
                      <div className="col-md-8 mx-1">
                        <input
                          type="text"
                          className="form-control col-md-12  "
                          placeholder="	My SQL"
                          aria-label="Input group example"
                          aria-describedby="btnGroupAddon2"
                        />
                      </div>

                      <input
                        type="number"
                        className="form-control  mx-1"
                        placeholder="0"
                        aria-label="Input groupnumbermple"
                        aria-describedby="btnGroupAddon2"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <button
                    type="button"
                    className="btn float-start  btn-outline-secondary "
                  >
                    Add More
                  </button>
                </div>
                {/* Job Description: */}
                <div className="mb-3">
                  <label htmlFor="jobdescription" className="form-label">
                    Job Description:
                  </label>
                  <textarea
                    id="jobdescription"
                    placeholder="jobdescription"
                    className={`form-control rounded-4 ${
                      errors.jobdescription && css.daynamic
                    }`}
                    rows="3"
                    {...register("jobdescription", {
                      required: "Jobdescription is required",
                      minLength: {
                        value: 10,
                        message: "Please enter a valid Jobdescription",
                      },

                      maxLength: {
                        value: 200,
                        message: "maximum length allowed is 200 word",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("jobdescription");
                    }}
                  ></textarea>

                  {errors.jobdescription && (
                    <span style={{ color: "red" }}>
                      {errors.jobdescription.message}
                    </span>
                  )}
                </div>
                <div className="col-md-4 ">
                  <label htmlFor="Salary" className="form-label">
                    Salary
                  </label>
                  <select
                    {...register("Salary")}
                    id="Salary"
                    placeholder="4.5"
                    className="form-select "
                  >
                    <option value="0">Any</option>
                    <option value="1">1L-5L</option>
                    <option value="2">5L-10L</option>
                    <option value="3">10L-15L</option>
                    <option value="4">15L+</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="minimum" className="form-label">
                    Minimum
                  </label>
                  <input
                    min="1"
                    id="minimum"
                    type="number"
                    placeholder="Minimum"
                    className={`form-control  ${
                      errors.jobtitle && css.daynamic
                    }`}
                    {...register("minimum")}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="Maximum" className="form-label">
                    Maximum
                  </label>
                  <input
                    min="1"
                    id="Maximum"
                    type="number"
                    placeholder="Maximum"
                    className={`form-control  ${
                      errors.jobtitle && css.daynamic
                    }`}
                    {...register("Maximum")}
                  />
                </div>
                {/* joblocations */}
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Job Locations
                  </label>
                  <select
                    {...register("joblocations")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                    <option value="Noida">Noida</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="pune">pune</option>
                    <option value="bhopal">bhopal</option>
                    <option value="Gujrat">Gujrat</option>
                  </select>
                </div>
                {/* Job type */}
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Job Type
                  </label>
                  <select
                    {...register("jobtype")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">Full Time</option>
                    <option value="2">Part Time</option>
                    <option value="3">Contract </option>
                  </select>
                </div>
                {/* Work location */}
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Work Location
                  </label>
                  <select
                    {...register("loctype")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">Any</option>
                    <option value="2">Remote</option>
                    <option value="3">Office</option>
                    <option value="4">100% Remote</option>
                    <option value="5">Hybrid </option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Shift
                  </label>
                  <select
                    {...register("shift")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="0">Any</option>
                    <option value="1">Day Shift</option>
                    <option value="2">Night Shift</option>
                    <option value="3">Morning shift</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Planned Start Date
                  </label>
                  <input
                    {...register("joiningdate")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Job Deadline
                  </label>
                  <input
                    {...register("joiningdate")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />{" "}
                  <span
                    className="fs-6 "
                    style={{ zoom: 0.8, color: "#888888" }}
                   
                  >
                    Candidates will not be able to apply after this date
                    01/02/2022.
                  </span>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Job Expires on
                  </label>
                  <input
                    {...register("joiningdate")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />{" "}
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Number of openings
                  </label>
                  <input
                    {...register("joiningdate")}
                    type="number"
                    placeholder="12"
                    className="form-control "
                    id="inputEmail4"
                  />{" "}
                </div>
                <div className="form-check col-md-4 mt-5   ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("education.atpresent")}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Always Hiring
                  </label>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Pay Benefits
                  </label>
                  <select
                    {...register("joblocations")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                    <option value="joining">joining</option>
                    <option value="performance">performance</option>
                    <option value="shift">shift</option>
                    <option value="yearly bonus">yearly bonus</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Other Benefits:
                  </label>
                  <select
                    {...register("joblocations")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                    <option value="reimbursements">reimbursements</option>
                    <option value="food">food</option>
                    <option value="health insurance">health insurance</option>
                    <option value="PF">PF</option>
                    <option value="WFH">WFH</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Education
                  </label>
                  <select
                    {...register("joblocations")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                  </select>
                </div>
                <span>
                  Pre-Requisites: These will be asked as questions when
                  candidate applies for job.
                </span>
                <div className="col-md-12 border border-light bg-light">
                  <div className="input-group   d-flex justify-content-between">
                    <p>S.No</p>
                    <p>Pre-requisite</p>
                    <p>Action</p>
                  </div>
                  {/* java Certification edit delete */}
                  <div className="col-md-12 mb-3 ">
                    <div className="input-group">
                      <div
                        className="input-group-text bg-light"
                        id="btnGroupAddon2"
                      >
                        1.
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Java Certification from Udemy"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon2"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <button
                    type="button"
                    className="btn float-end  btn-outline-secondary "
                  >
                    Add More
                  </button>
                </div>
                <div className="col-md-8">
                  <button
                    className="  col-md-6 btn btn-outline-secondary "
                    type="button"
                  >
                    <small> Add Other Exam as prerequisite</small>
                  </button>
                </div>
                <div className="col-">
                  <button
                    type="submit"
                    className="btn btn-light  bg-primary text-white "
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PostJob;
