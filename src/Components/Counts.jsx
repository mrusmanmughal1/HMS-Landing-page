import React from 'react'

import docImg from "../assets/Images/doctors_ic.png";
import PatientImg from "../assets/Images/patients_ic.png";
import HospitalImg from "../assets/Images/hospitals_ic.png";
import CitiesIMg from "../assets/Images/cities_ic.png";
 
const Counts = () => {
  return (
    <section className="counter">
        <div className="container text-center">
          <div className="row col-md-12 col-sm-12">
            <div className="col p-5 ">
              <img className="img-fluid" src={docImg} />
              <h1 className="mt-4 display-3 text-white">50</h1>
              <p className="h4 text-white   ">Doctors</p>
            </div>
            <div className="col p-5">
              <img className="img-fluid" src={PatientImg} />
              <h1 className="mt-4 display-3 text-white">100</h1>
              <p className="h4 text-white  ">Patient</p>
            </div>
            <div className="col p-5">
              <img className="img-fluid" src={HospitalImg} />
              <h1 className="mt-4 display-3 text-white">20</h1>
              <p className="h4 text-white ">Hospitals</p>
            </div>
            <div className="col p-5">
              <img className="img-fluid" src={CitiesIMg} />
              <h1 className="mt-4 display-3 text-white">4</h1>
              <p className="h4 text-white "> Cities</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Counts