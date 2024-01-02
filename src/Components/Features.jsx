import React from 'react'


const Features = () => {
  return (
    <section id="Features" className="Features ">
    <div className="Container my-5">
      <h1 className="text-success fw-bold  text-center mt-5 p-2">
        Wide Range Of <span className="text-danger">Features</span>
      </h1>
      <p className="text-center   h6 lead lh-base">
        Ease Complex processes & keep track of everything in one place while
        proividing accurate data <br />
        about hospital financial conditions, which help developing furute
        strategies
      </p>
    </div>
    <div className="container">
      <div className="row ">
        <div className="col-md-4 col-sm-12 ">
          <div className="mx-4 corner-radius ">
            <ul className="features-list fw-bold  text-secondary text-sm-start     ">
              <li className=" list-group-item-danger p-2 bg-warning  text-lg text-danger Top-radius ">
                Management Tools
               </li>
                <div className='p-3 bg-info text-white'>
              <li >Patient Management</li>

              <li >Patient Management</li>
              <li >Appointment Management</li>
              <li >Finance Management</li>
              <li >Digital Prescription</li>
              <li >LAB Management</li>
              <li >Operation Theatre Management</li>
              <li >Dischange Summary</li>
              <li >Manage Multiple Locations</li>
              <li >
                Protable Equipment Track
              </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="col-md-8   corner-radius col-sm-12 Management ">
          <div className=" p-5 ">
            <h3 className="text-white py-5">DOCTOR MANAGEMENT</h3>
            <ul className="text-white  h5 my-5 lh-lg">
              <li>Doctor's Time Record</li>
              <li>
                The number of patients getting <br />
                treatment by a doctor
              </li>
              <li>Keep track of the appointment</li>
              <li>Patient Revies & Doctor Rating</li>
            </ul>

            <div className="mt-5 pt-5">
              <button className="btn btn-outline-light  px-4  mt-5    py-2 mb-5 Button-radius">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features