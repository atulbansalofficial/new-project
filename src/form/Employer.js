import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import css from "./css/CandidateProfileForm.module.css";

function Employer() {
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
    console.log(data);
    setCountries(data);
  }, [countries]);
  useEffect(() => {
    const data = require("./json/city.json");
    console.log(data);
    setCity(data);
  }, [city]);

  return (
    <div className="container">
      <div className="d-flex flex-row bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Username</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                magnam mollitia laudantium alias exercitationem obcaecati.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 bd-highlight mt-5">
          <div className={"container"}>
            <div className="row align-items-center">
              <div className="col ">
                <form className="row g-3 " onSubmit={handleSubmit(onSubmit)}>
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
                      <span style={{ color: "red" }}>
                        {errors.email.message}
                      </span>
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
                      className={`form-control  ${
                        errors.mobile && css.daynamic
                      }`}
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
                      className={`form-control  ${
                        errors.mobile && css.daynamic
                      }`}
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
                      className={`form-select  ${
                        errors.country && css.daynamic
                      }`}
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
                      <span style={{ color: "red" }}>
                        {errors.city.message}
                      </span>
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

                  <div className="col-">
                    <button
                      type="submit"
                      className="btn btn-light  bg-primary text-white "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employer;
