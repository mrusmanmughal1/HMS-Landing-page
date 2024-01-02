import React, { useState } from 'react'
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
 
import formIMg from "../assets/Images/demo_artwork.png";
 

init("user_qL458AsCBLpum5wzU0ADn");
const Contact = () => {
    const [Show, setstate] = useState(true);
    // send email notification
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm("gmail", "HMSlive", e.target, "user_qL458AsCBLpum5wzU0ADn")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setstate(!true);
  
      setTimeout(function () {
        setstate(true);
      }, 5000);
    };
  return (
    <section id="contact" className="Request_Form bg-info p-5">
        <div className="container text-center">
          <h1 className="text-success fw-bold mb-4">
            Request a <span className="text-danger">Demo </span>
          </h1>
          <p className="h5  text-secondary ">
            Try For Free see how it can take your hospital practical to the next
            level
          </p>
          <div className="row m-5">
            <div className="col-md-6 col-sm-12">
              <img className="img-fluid" src={formIMg} alt="info-desk" />
            </div>
            <div className="col-md-6 col-sm-12">
              <form
                className="row  g-3  needs-validation"
                 
                onSubmit={(e) => sendEmail(e)}
              >
                <div className="col-auto">
                  <input
                    name="fullname"
                    type="text"
                    className="form-control  form-control-lg"
                    id="validationCustom03"
                    placeholder="Full Name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="Company Name"
                    name="company"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="Designation"
                    name="designation"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="City"
                    name="city"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="number"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="Cell Number"
                    name="number"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control  form-control-lg"
                    id="inputPassword2"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-success  fw-bold h4  text-white Button-radius  mb-3 px-5 py-3 mt-4"
                  >
                    Request a demo
                  </button>
                </div>
              </form>
              <p hidden={Show} className="text-danger text-start bg-light h5">
                We Will Contact You Soon ! Thank You
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact