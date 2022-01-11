import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import css from "./css/CandidateProfileForm.module.css";

function CompanyProfile() {
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
        <div className="row">
          <div className="col-sm-3">
            {" "}
            <div className="p-2 bd-highlight">
              <div className="container " style={{ width: "18rem" }}>
                <img
                  src="https://www.taxmann.com/post/wp-content/uploads/2021/04/company-concept-illustration_114360-2581.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Company Name</h3>
                  <span></span>
                  <br />

                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint magnam mollitia laudantium alias exercitationem
                    obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="p-2 bd-highlight mt-5">
              <div className={"container"}>
                <div className="row align-items-center">
                  <div className="col ">
                    <form
                      className="row g-3 "
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <h1>Company Profile</h1>
                      {/* Company Name: */}
                      <div className="col-md-6  ">
                        <label htmlFor="firstname " className="form-label">
                          Company Name: <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id={"firstname"}
                          type="text"
                          placeholder="Company Name"
                          className={`form-control  ${
                            errors.firstname && css.daynamic
                          }`}
                          {...register("firstname", {
                            required: "Company Name is required",
                            minLength: {
                              value: 2,
                              message: "Please enter a valid Company Name",
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
                      {/* Contact Person Name: */}
                      <div className="col-md-6">
                        <label htmlFor="lastname" className="form-label">
                          Contact Person Name:
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id="lastname"
                          type="text"
                          placeholder="Contact Person Name:"
                          className={`form-control  ${
                            errors.lastname && css.daynamic
                          }`}
                          {...register("lastname", {
                            required: "Contact Person Name is required",
                            minLength: {
                              value: 2,
                              message:
                                "Please enter a valid Contact Person Name",
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

                      {/* Contact Number: */}
                      <div className="col-md-6">
                        <label htmlFor="mobile" className="form-label">
                          Contact Number:<span style={{ color: "red" }}>*</span>
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
                          className={`form-select  ${
                            errors.city && css.daynamic
                          }`}
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
                      {/* Company Brief: */}
                      <div className="mb-3">
                        <label htmlFor="about" className="form-label">
                          Company Brief:
                        </label>
                        <textarea
                          id="about"
                          placeholder="Company Brief"
                          className={`form-control rounded-4 ${
                            errors.firstname && css.daynamic
                          }`}
                          rows="3"
                          {...register("about", {
                            required: "Company Brief is required",
                            minLength: {
                              value: 10,
                              message: "Please enter a valid Company Brief",
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

                      <div className="mb-3">
                        <label for="formFile" className="form-label">
                          Company Logo
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>

                      {/* Company Tagline */}
                      <div className="col-md-12">
                        <label htmlFor="companytagline" className="form-label">
                          Company Tagline<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id="companytagline"
                          type="text"
                          placeholder=" Company Tagline"
                          className={`form-control  ${
                            errors.companytagline && css.daynamic
                          }`}
                          {...register("companytagline", {
                            required: "Company Tagline is required",
                            minLength: {
                              value: 0,
                              message: "Please enter a valid Company Tagline",
                            },

                            maxLength: {
                              value: 200,
                              message: "maximum length allowed is 200 word",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("companytagline");
                          }}
                        />

                        {errors.companytagline && (
                          <span style={{ color: "red" }}>
                            {errors.companytagline.message}
                          </span>
                        )}
                      </div>
                      <label for="basic-url" className="form-label">
                        Website
                      </label>
                      <div className="input-group mb-3">
                        <input
                          placeholder="url"
                          type="text"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3"
                        />
                      </div>
                      <label htmlFor="" className="form-label">
                        GSTIN
                      </label>
                      <div className="input-group mb-3">
                        <input
                          placeholder="Optional"
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>
                      <label htmlFor="" className="form-label">
                        Founded
                      </label>
                      <div className="input-group mb-3">
                        <input
                          placeholder="Founded in"
                          type="month"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>
                      <label htmlFor="" className="form-label">
                        Company size
                      </label>
                      <div className="input-group mb-3">
                        <input
                          placeholder="Company size"
                          type="number"
                          min="1"
                          max="50000000"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>
                      <label htmlFor="" className="form-label">
                        Engineers's size
                      </label>
                      <div className="input-group mb-3">
                        <input
                          placeholder="Engineers's size"
                          type="number"
                          min="1"
                          max="50000000"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>
                      <label htmlFor="" className="form-label">
                        Technology stack
                      </label>
                      <div className="input-group mb-3">
                        <input
                          placeholder="Technology stack"
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>
                      <label htmlFor="" className="form-label">
                        How did you hear about us?
                      </label>
                      <div className="input-group mb-3">
                        <input
                          placeholder="How did you hear about us?"
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>

                      <label htmlFor="" className="form-label">
                        Funding size
                      </label>
                      <div className="input-group mb-3">
                        <input
                          placeholder="2000000000000 Cr."
                          type="number"
                          min="1"
                          max="50000000"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>
                      <label htmlFor="" className="form-label">
                        Company stage
                      </label>
                      <div className="input-group mb-3">
                        <input
                          placeholder="Company stage"
                          type="number"
                          min="1"
                          max="50000000"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>
                      <span className="form-label">Misc Links</span>
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
                          Facebook
                        </span>
                        <input
                          {...register("facebook")}
                          type="text"
                          className="form-control"
                          placeholder="Facebook"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                      <div className="input-group flex-nowrap ">
                        <span className="input-group-text" id="addon-wrapping">
                          Twitter
                        </span>
                        <input
                          {...register("Twitter")}
                          type="text"
                          className="form-control"
                          placeholder="Twitter"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>

                      <div className="mb-3">
                        <label for="formFile" className="form-label">
                          Company Photos
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="about" className="form-label">
                          Why join? (reasons to work in your company)?
                        </label>
                        <textarea
                          id="about"
                          placeholder="Why join?"
                          className={`form-control rounded-4 ${
                            errors.Whyjoin && css.daynamic
                          }`}
                          rows="3"
                          {...register("Whyjoin", {
                            required: "Why join is required",
                            minLength: {
                              value: 10,
                              message: "Please enter a valid Why join",
                            },

                            maxLength: {
                              value: 200,
                              message: "maximum length allowed is 500 word",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("Whyjoin");
                          }}
                        ></textarea>

                        {errors.Whyjoin && (
                          <span style={{ color: "red" }}>
                            {errors.Whyjoin.message}
                          </span>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="about" className="form-label">
                          Engineering? (structure of engineering team, processes
                          you use etc)?
                        </label>
                        <textarea
                          id="about"
                          placeholder="Engineering? (structure of engineering team, processes
                        you use etc)?"
                          className={`form-control rounded-4 ${
                            errors.engineering && css.daynamic
                          }`}
                          rows="3"
                          {...register("engineering", {
                            required: "Engineering join is required",
                            minLength: {
                              value: 10,
                              message: "Please enter a valid engineering",
                            },

                            maxLength: {
                              value: 200,
                              message: "maximum length allowed is 500 word",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("engineering");
                          }}
                        ></textarea>

                        {errors.engineering && (
                          <span style={{ color: "red" }}>
                            {errors.engineering.message}
                          </span>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="about" className="form-label">
                          Some projects?
                        </label>
                        <textarea
                          id="about"
                          placeholder="some projects?"
                          className={`form-control rounded-4 ${
                            errors.someprojects && css.daynamic
                          }`}
                          rows="3"
                          {...register("someprojects", {
                            required: "Some projects is required",
                            minLength: {
                              value: 10,
                              message: "Please enter a valid Some projects",
                            },

                            maxLength: {
                              value: 200,
                              message: "maximum length allowed is 500 word",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("someprojects");
                          }}
                        ></textarea>

                        {errors.someprojects && (
                          <span style={{ color: "red" }}>
                            {errors.someprojects.message}
                          </span>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="about" className="form-label">
                          Culture?
                        </label>
                        <textarea
                          id="about"
                          placeholder="Culture?"
                          className={`form-control rounded-4 ${
                            errors.culture && css.daynamic
                          }`}
                          rows="3"
                          {...register("culture", {
                            required: "culture is required",
                            minLength: {
                              value: 10,
                              message: "Please enter a valid culture",
                            },

                            maxLength: {
                              value: 200,
                              message: "maximum length allowed is 500 word",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("culture");
                          }}
                        ></textarea>

                        {errors.culture && (
                          <span style={{ color: "red" }}>
                            {errors.culture.message}
                          </span>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="about" className="form-label">
                          Job benefits (should be part of job or company)???
                        </label>
                        <textarea
                          id="about"
                          placeholder="Job benefits?"
                          className={`form-control rounded-4 ${
                            errors.jobbenefits && css.daynamic
                          }`}
                          rows="3"
                          {...register("jobbenefits", {
                            required: "Job benefits is required",
                            minLength: {
                              value: 10,
                              message: "Please enter a valid job benefits",
                            },

                            maxLength: {
                              value: 200,
                              message: "maximum length allowed is 500 word",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("jobbenefits");
                          }}
                        ></textarea>

                        {errors.jobbenefits && (
                          <span style={{ color: "red" }}>
                            {errors.jobbenefits.message}
                          </span>
                        )}
                      </div>

                      <div className="col-">
                        <button
                          type="submit"
                          className="btn btn-light  bg-primary text-white "
                        >
                          Submit
                        </button>
                        <br /> <br />
                        <a
                          href="http://localhost:3000/employers"
                          class="link-primary"
                        >
                          Change Password
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
