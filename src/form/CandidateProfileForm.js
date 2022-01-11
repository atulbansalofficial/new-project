import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import css from "./css/CandidateProfileForm.module.css";

function CandidateProfileForm() {
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
    const data = require("../form/json/country.json");
    console.log(data);
    setCountries(data);
  }, [countries]);
  useEffect(() => {
    const data = require("../form/json/city.json");
    console.log(data);
    setCity(data);
  }, [city]);

  return (
    <React.Fragment>
      <div className={("container-md  bg-light p-2 ", css.root)}>
        <div className="text-secondary m-5">
          <h1>Candidate Registration Form</h1>
        </div>
        <div className={("container", css.border_radius)}>
          <div className="row align-items-center">
            <div className="col ">
              <form className="row g-3 " onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="col-">
                  <button
                    type="submit"
                    className="btn btn-light  bg-primary text-white "
                  >
                    Register/Submit
                  </button>
                </div> */}
                {/* firstname */}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id={"firstname"}
                    type="text"
                    placeholder="First Name"
                    className={`form-control  ${
                      errors.firstname && css.daynamic
                    }`}
                    {...register("firstname", {
                      required: "First name is required",
                      minLength: {
                        value: 2,
                        message: "Please enter a valid name",
                      },

                      maxLength: {
                        value: 50,
                        message: "maximum length allowed is 50 word",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: " Please enter fully alphabate",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("firstname");
                    }}
                  />

                  {errors.firstname && (
                    <span style={{ color: "red" }}>
                      {errors.firstname.message}
                    </span>
                  )}
                </div>
                {/* lastname */}
                <div className="col-md-6">
                  <label htmlFor="lastname" className="form-label">
                    Last Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                    className={`form-control  ${
                      errors.lastname && css.daynamic
                    }`}
                    {...register("lastname", {
                      required: "Last name is required",
                      minLength: {
                        value: 2,
                        message: "Please enter a valid name",
                      },

                      maxLength: {
                        value: 50,
                        message: "maximum length allowed is 50 word",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: " Please enter fully alphabate",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("lastname");
                    }}
                  />
                  {errors.lastname && (
                    <span style={{ color: "red" }}>
                      {errors.lastname.message}
                    </span>
                  )}
                </div>
                {/* email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className={`form-control  ${
                      errors.lastname && css.daynamic
                    }`}
                    {...register("email", {
                      required: "Email is required",

                      pattern: {
                        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                        message: " Please enter a valid Email",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}
                </div>
                {/* mobile */}
                <div className="col-md-6">
                  <label htmlFor="mobile" className="form-label">
                    Mobile<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="mobile"
                    type="number"
                    placeholder="+91 0123456789"
                    className={`form-control  ${errors.mobile && css.daynamic}`}
                    {...register("mobile", {
                      required: {
                        value: true,
                        message: "Mobile number is required",
                      },

                      maxLength: {
                        value: 10,
                        message: "Please Enter a valid phone number",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("mobile");
                    }}
                  />
                  {errors.mobile && (
                    <span style={{ color: "red" }}>
                      {errors.mobile.message}
                    </span>
                  )}
                </div>
                {/* dob */}
                <div className="col-md-6">
                  <label htmlFor="dob" className="form-label">
                    D.O.B<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    {...register("dob", { required: `Date is required` })}
                    type="date"
                    placeholder="01/01/2022"
                    className={`form-control  ${errors.mobile && css.daynamic}`}
                    id="dob"
                  />
                  {errors.dob && (
                    <span style={{ color: "red" }}>{errors.dob.message}</span>
                  )}
                </div>
                {/* country */}
                <div className="col-md-6">
                  <label htmlFor="country" className="form-label">
                    Country<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    id="country"
                    className={`form-select  ${errors.country && css.daynamic}`}
                    {...register("country", {
                      required: `Country is required`,
                    })}
                    onKeyUp={() => {
                      trigger("country");
                    }}
                  >
                    <option value="">Choose...</option>
                    {countries.map((item) => {
                      return <option key={item.code}>{item.name}</option>;
                    })}
                  </select>
                  {errors.country && (
                    <span style={{ color: "red" }}>
                      {errors.country.message}
                    </span>
                  )}
                </div>
                {/* city */}
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label">
                    City<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    id="city"
                    className={`form-select  ${errors.city && css.daynamic}`}
                    {...register("city", {
                      required: `City is required`,
                    })}
                    onKeyUp={() => {
                      trigger("city");
                    }}
                  >
                    <option value="">Choose...</option>
                    {city.map((item) => {
                      return <option key={item.code}>{item.name}</option>;
                    })}
                  </select>
                  {errors.city && (
                    <span style={{ color: "red" }}>{errors.city.message}</span>
                  )}
                </div>
                {/* address */}
                <div className="col-md-6">
                  <label htmlFor="address" className="form-label">
                    Address<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder=" Address"
                    className={`form-control  ${
                      errors.address && css.daynamic
                    }`}
                    {...register("address", {
                      required: "Address is required",
                      minLength: {
                        value: 0,
                        message: "Please enter a valid address",
                      },

                      maxLength: {
                        value: 200,
                        message: "maximum length allowed is 200 word",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("address");
                    }}
                  />

                  {errors.address && (
                    <span style={{ color: "red" }}>
                      {errors.address.message}
                    </span>
                  )}
                </div>
                {/* about */}
                <div className="mb-3">
                  <label htmlFor="about" className="form-label">
                    About
                  </label>
                  <textarea
                    id="about"
                    placeholder="Details about me"
                    className={`form-control rounded-4 ${
                      errors.firstname && css.daynamic
                    }`}
                    rows="3"
                    {...register("about", {
                      required: "About is required",
                      minLength: {
                        value: 10,
                        message: "Please enter a valid about",
                      },

                      maxLength: {
                        value: 200,
                        message: "maximum length allowed is 200 word",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("about");
                    }}
                    ></textarea>

                  {errors.about && (
                    <span style={{ color: "red" }}>
                      {errors.about.message}
                    </span>
                  )}
                 
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
                <div className="col-md-12 ">
                  <span className="col-md-4">Expected salary</span>
                  <div className="form-check col-md-4  ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register("expSalary.any")}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Any
                    </label>
                  </div>
                  <div className="form-check col-md-4 ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register("expSalary.negotiable")}
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Negotiable
                    </label>
                  </div>
                  <div className="input-group  col-md-4 ">
                    <span className="input-group-text">₹</span>
                    <input
                      placeholder="50000"
                      type="number"
                      {...register("expSalary.salary")}
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <label htmlFor="inputState" className="form-label">
                    Job Experience
                  </label>
                  <select
                    {...register("shift")}
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
                <div className="col-md-4">
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
                <div className="form-check col-md-4 mt-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("relocate")}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Willingness to relocate
                  </label>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    When can you join
                  </label>
                  <select
                    {...register("joining")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">within a week (immediate)</option>
                    <option value="2">1 month</option>
                    <option value="3">2 months</option>
                    <option value="4">3 months</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Joining Date
                  </label>
                  <input
                    {...register("joiningdate")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    linkdin
                  </span>
                  <input
                    {...register("linkedin")}
                    type="text"
                    className="form-control"
                    placeholder="linkedin"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div className="input-group flex-nowrap ">
                  <span className="input-group-text" id="addon-wrapping">
                    gitHub
                  </span>
                  <input
                    {...register("github")}
                    type="text"
                    className="form-control"
                    placeholder="github"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputState" className="form-label">
                    Open source community contribution
                  </label>
                  <select
                    {...register("community")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">https://github.com/</option>
                    <option value="2">https://stackoverflow.com/</option>
                    <option value="1">https://github.com/</option>
                    <option value="2">https://stackoverflow.com/</option>
                    <option value="2">https://stackoverflow.com/</option>
                  </select>
                </div>
                <span>Education: </span>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    College/University
                  </label>
                  <input
                    {...register("education.college")}
                    id={"college"}
                    type="text"
                    placeholder="college"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Degree
                  </label>
                  <select
                    {...register("education.degree")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">Bachelor's</option>
                    <option value="2">Masters</option>
                    <option value="3">Diploma etc</option>
                  </select>
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Other Degree
                  </label>
                  <input
                    {...register("education.otherdegree")}
                    id={"degree"}
                    type="text"
                    placeholder="other degree"
                    className="form-control "
                  />
                </div>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    course
                  </label>
                  <input
                    {...register("education.course")}
                    id={"degree"}
                    type="text"
                    placeholder="course"
                    className="form-control "
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    from
                  </label>
                  <input
                    {...register("education.from")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    to
                  </label>
                  <input
                    {...register("education.to")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
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
                    At Present
                  </label>
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Percentage %
                  </label>
                  <input
                    {...register("education.pct")}
                    id={"degree"}
                    type="number"
                    placeholder="%"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    CGPA %
                  </label>
                  <input
                    {...register("education.cgpa")}
                    id={"degree"}
                    type="number"
                    placeholder=" %"
                    className="form-control "
                  />
                </div>
                <span>Highest Schooling</span>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    School Name
                  </label>
                  <input
                    {...register("schooling.name")}
                    id={"degree"}
                    type="text"
                    placeholder="school name"
                    className="form-control "
                  />
                </div>{" "}
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Class Name
                  </label>
                  <select
                    {...register("schooling.class")}
                    id="inputState"
                    className="form-select "
                  >
                    <option value="1">High School</option>
                    <option value="2">Intermediate</option>
                  </select>
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Board
                  </label>
                  <input
                    {...register("schooling.board")}
                    id={"degree"}
                    type="text"
                    placeholder="board"
                    className="form-control "
                  />
                </div>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Percentage %
                  </label>
                  <input
                    {...register("schooling.pct")}
                    id={"degree"}
                    type="number"
                    placeholder="%"
                    className="form-control "
                  />
                </div>
                <span>Break</span>{" "}
                <div className="col-md-12  ">
                  <label htmlFor="firstname " className="form-label">
                    Reason
                  </label>
                  <input
                    {...register("break.reason")}
                    id={"degree"}
                    type="text"
                    placeholder="Example ,etc,Preparing for MBA exams"
                    className="form-control "
                  />
                </div>
                <span></span>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    From
                  </label>
                  <input
                    {...register("break.from")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    To
                  </label>
                  <input
                    {...register("break.to")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <span>Job History </span>{" "}
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Job Title
                  </label>
                  <input
                    {...register("jobs.title")}
                    id={"college"}
                    type="text"
                    placeholder="title"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    Company Name
                  </label>
                  <input
                    {...register("jobs.company")}
                    id={"college"}
                    type="text"
                    placeholder="company"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    From
                  </label>
                  <input
                    {...register("jobs.from")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    To
                  </label>
                  <input
                    {...register("jobs.to")}
                    type="date"
                    placeholder="01/01/2022"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Locations
                  </label>
                  <select
                    {...register("jobs.location")}
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
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Roles/Responbilities
                  </label>
                  <select
                    {...register("jobs.roles")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                    <option value="Noida">Web Developer</option>
                    <option value="Mumbai">Java Developer</option>
                    <option value="pune">php Developer</option>
                    <option value="bhopal">backend developer</option>
                    <option value="Gujrat">Frontend developer</option>
                  </select>
                </div>
                <div className="col-md-6  ">
                  <label htmlFor="firstname " className="form-label">
                    CTC
                  </label>
                  <input
                    {...register("jobs.ctc")}
                    id={"college"}
                    type="text"
                    placeholder="ctc"
                    className="form-control "
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Skills/Tools
                  </label>
                  <select
                    {...register("skills.name")}
                    id="inputState"
                    defaultValue="newvalue"
                    className="form-select "
                  >
                    <option value="none">Choose...</option>
                    <option value="Noida">Javascript</option>
                    <option value="Mumbai">Java</option>
                    <option value="pune">Php</option>
                    <option value="bhopal">Node </option>
                    <option value="Gujrat">Phython </option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Id-Number
                  </label>
                  <input
                    {...register("skills.id")}
                    type="text"
                    placeholder="id"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>{" "}
                <div className="col-md-6 ">
                  <label htmlFor="inputState" className="form-label">
                    Experience
                  </label>
                  <select
                    {...register("skills.experience")}
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
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Self Rating
                  </label>
                  <input
                    min="1"
                    max="10"
                    {...register("skills.selfrating")}
                    type="number"
                    placeholder="self rating"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Last Used
                  </label>
                  <input
                    {...register("skills.lastused")}
                    type="text"
                    placeholder="last used"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Where
                  </label>
                  <input
                    {...register("skills.lastused")}
                    type="text"
                    placeholder="where"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <span>Assessments</span>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Id
                  </label>
                  <input
                    {...register("assessments.id")}
                    type="number"
                    placeholder="id"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    score
                  </label>
                  <input
                    {...register("assessments.score")}
                    type="number"
                    placeholder="score"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Test lmd
                  </label>
                  <input
                    {...register("assessments.testlmd")}
                    type="text"
                    placeholder="test lmd"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <span>certifications</span>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Name
                  </label>
                  <input
                    {...register("certifications.name")}
                    type="text"
                    placeholder="name"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Desc
                  </label>
                  <input
                    {...register("certifications.desc")}
                    type="date"
                    placeholder="desc"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Duration
                  </label>
                  <input
                    {...register("certifications.duration")}
                    type="number"
                    placeholder="duration"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>{" "}
                <div className="col-md-6 ">
                  <label htmlFor="inputState" className="form-label">
                    Language
                  </label>
                  <select
                    {...register("lang")}
                    id="inputState"
                    placeholder="language"
                    className="form-select "
                  >
                    <option value="1">English</option>
                    <option value="2">Hindi</option>
                    <option value="2">Franch</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Achievements
                  </label>
                  <input
                    {...register("achievements")}
                    type="text"
                    placeholder="achievements"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    <span> Academic Excellence </span>
                  </label>
                  <input
                    {...register("acadexcellence")}
                    type="text"
                    placeholder="acadexcellence"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    <span> Patents </span>
                  </label>
                  <input
                    {...register("patents")}
                    type="text"
                    placeholder="patents"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    <span> Projects </span>
                  </label>
                  <input
                    {...register("projects")}
                    type="text"
                    placeholder="projects"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    <span> Profile </span>
                  </label>
                  <input
                    {...register("profile")}
                    type="text"
                    placeholder="profile"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    <span> Hobbies </span>
                  </label>
                  <input
                    {...register("hobbies")}
                    type="text"
                    placeholder="hobbies"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    <span> Online Profile URL: </span>
                  </label>
                  <input
                    {...register("hobbies")}
                    type="url"
                    placeholder="url"
                    className="form-control "
                    id="inputEmail4"
                  />
                </div>
                {/* ///////// */}
                <div className="col-">
                  <button
                    type="submit"
                    className="btn btn-light  bg-primary text-white "
                  >
                    Register/Submit
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

export default CandidateProfileForm;
{
  /* <select
class="form-select"
multiple
aria-label="multiple select example"
>
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select> */
}
