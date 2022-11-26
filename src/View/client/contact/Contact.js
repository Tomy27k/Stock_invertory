import React from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone, AiFillClockCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bgimage from "../../../assets/images/home-3.jpg";

const Contact = () => {
  const phone = "+90534234434";
  const schema = yup
    .object({
      firstName: yup.string().required(),
      age: yup.number().positive().integer().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <section
      className="contact align-items-center d-flex"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="container d-flex flex-wrap  ">
        <div className="contact-info d-flex flex-column col-sm-12 col-lg-6">
          <h3>Contact Us</h3>
          <div className="icon my-3">
            <h3>
              <AiFillPhone className="me-3" />
              Call Us
            </h3>
            <a className="text-success " href={`tel:${phone}`}>{phone}</a>
          </div>
          <div className="icon my-3">
            <h3>
              <MdLocationOn className="me-3" />
              Location
            </h3>
            <span> 121 rocket Street,21 Avenue, New York NY 92103-3232</span>
          </div>
          <div className="icon my-3">
            <h3>
              <AiFillClockCircle className="me-3" />
              Business Hours
            </h3>
            <span> Mon-fri.. 10 a.m - 8 p.m,Sun... Closed</span>
          </div>
        </div>
        <div className="form col-sm-12 col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6 my-3 d-flex flex-column">
                <label htmlFor="email">E-Mail</label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  {...register("email")}
                />
              </div>
              <div className="col-lg-6 my-3 d-flex flex-column">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="col-lg-12 my-3 d-flex flex-column">
              <label htmlFor="address">Address</label>
              <input  className="form-control" type="text" {...register("address")} />
            </div>
            <div className="col-lg-12 my-3 d-flex flex-column">
              <label htmlFor="message">Message</label>
              <textarea
              className="form-control"
                name=""
                id="message"
                cols="20"
                {...register("message")}
                rows="3"
              ></textarea>
            </div>
            <input type="submit" className="my-3 " />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
