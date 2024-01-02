 
import AddValueImg from "../assets/Images/add_value_artwork.png";
 

const ValueHospital = () => {
  return (
    <section id="Get-value" className="Get-Value">
    <div className="container my-5">
      <div className="row text-center">
        <h2 className="text-success fw-bold  ">
          How Can HMS Add
          <span className="text-danger"> Value to Hospitals? </span>
        </h2>
        <p className="text-secondary">
          Our HMS speed up regularr procedures & make them easier to
          perform. Digitally transform <br /> the hospital practices such as
          staff, doctor & patient, payroll , appointment & coordination
          management
        </p>

        <div className="col-md-6 d-none d-md-block">
          <img
            className="img-fluid mt-5 p-5"
            src={AddValueImg}
            alt="value-image"
          />
        </div>
        <div className="col-md-6 add_value col-sm-12">
          <ul className="Ul-danger text-start   text-danger">
            <li> Efficiency</li>
            <div className="text-secondary mr-5">
              <p>
                HMS system steam-line all routine processes of a hospital &
                save time. Multiple functions can take at the same time
                while sustaining records. HMS decreases the chances of human
                errors & increases performance
              </p>
            </div>
            <li>Accessibility & Reliable</li>
            <p className="ps-0">
              Hospital Data can be accessed from anywhere with an
              internet-connection device. Data & Records added in HMS
              SOftwar, whether medical or financial, are more reliable than
              hard copy
            </p>
            <li> Cost-Effective</li>
            <p>
              Using HMS will reduce the number of human resources to handle
              the business aspect, plus hospitals can go completely
              paper-free & make the system more efficient & cost-effective
            </p>
            <li>Security</li>
            <p>HMS is backed with cloud & secured with layers like : </p>
          </ul>

          <ol className="sec_Value text-start fs-6">
            <i className="bi text-success bi-record-fill"></i>
            <span> CageFs </span>
            <i className="bi text-success bi-record-fill"></i>
            <span> SSL </span>
            <i className="bi text-success bi-record-fill"></i>
            <span> Mode Quality </span>
            <i className="bi text-success bi-record-fill"></i>
            <span> Immunity 360 </span>
          </ol>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ValueHospital