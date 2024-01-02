import React from "react";

import Review1 from "../assets/Images/ahmad_hassan_avatar.png";
import Review2 from "../assets/Images/ali_raza_avatar.png";
import Review3 from "../assets/Images/asma_avatar.png";
import Review4 from "../assets/Images/marshmallow_avatar.png";
import Review5 from "../assets/Images/jennifer_avatar.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Reviews = () => {
  
  return (
    <section className="Reviews bg-light">
      <div className="container py-5 d-none d-md-block">
        <div className="row text-center">
          <h1 className=" text-success fw-bold  ">
            Valueable Customer <span className="text-danger">Reviews</span>
          </h1>
          <p className="text-secondary h5">
            Our Customer is our priority. we listen carefully and deliver what
            satisfies our customers.
          </p>
          <Carousel className="w-100" infiniteLoop autoPlay centerMode showArrows={false} showStatus={false} selectedItem={3}>
            <div className="my-4">
              <div className=" bg-white col-md-3 col-sm-12 p-5  w-75 mx-auto corner-radius shadow-sm ">
                <div className="card-body ">
                  <img
                    src={Review1}
                    alt="Review Images"
                    className="mx-auto d-block w-25 w-25"
                  />
                  <h5 className="card-title text-primary my-3 fw-bold">
                    MUHAMMAD USMAN
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <span className="px-1 fw-bold text-secondary">4.0</span>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                  </h6>

                  <hr></hr>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#"
                    className="card-link  h6 text-end text-danger fw-bold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className=" bg-white p-5 col-md-3  w-75 mx-auto corner-radius shadow-sm ">
                <div className="card-body">
                  <img
                    src={Review2}
                    alt="Review Images"
                    className="mx-auto d-block w-25"
                  />
                  <h5 className="card-title text-primary my-3 fw-bold">
                    MUHAMMAD ALI
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <span className="px-1 fw-bold text-secondary">4.0</span>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                  </h6>
                  <hr className="w-75"></hr>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#"
                    className="card-link  h6 text-end text-danger fw-bold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className=" p-5 bg-white col-md-3 w-75 mx-auto corner-radius shadow-sm ">
                <div className="card-body">
                  <img
                    src={Review3}
                    alt="Review Images"
                    className="mx-auto d-block w-25"
                  />
                  <h5 className="card-title text-primary my-3 fw-bold">
                    MUHAMMAD ZESHAN
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <span className="px-1 fw-bold text-secondary">4.0</span>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                  </h6>

                  <hr></hr>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#"
                    className="card-link  h6 text-end text-danger fw-bold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="p-5 bg-white col-md-3 w-75 mx-auto corner-radius shadow-sm ">
                <div className="card-body">
                  <img
                    src={Review4}
                    alt="Review Images"
                    className="mx-auto d-block w-25"
                  />
                  <h5 className="card-title text-primary my-3 fw-bold">
                    MUHAMMAD NOMAN
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <span className="px-1 fw-bold text-secondary">4.0</span>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                  </h6>

                  <hr></hr>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#"
                    className="card-link  h6 text-end text-danger fw-bold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="p-5 bg-white col-md-3 w-75 mx-auto corner-radius shadow-sm ">
                <div className="card-body">
                  <img
                    src={Review5}
                    alt="Review Images"
                    className="mx-auto d-block w-25"
                  />
                  <h5 className="card-title text-primary my-3 fw-bold">
                    KELLY JENNER
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <span className="px-1 fw-bold text-secondary">4.0</span>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                    <i className="bi  bi-star-fill text-warning"></i>
                  </h6>

                  <hr></hr>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#"
                    className="card-link  h6 text-end text-danger fw-bold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
