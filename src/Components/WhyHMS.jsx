
import infoimg from "../assets/Images/hms_artwork.png";
 


const WhyHMS = () => {
  return (
    
    <section className="HMS_info ">
    <div className="container my-5  ">
      <div className="row">
        <h1 className="text-success fw-bold text-center mb-5">
          What is <span className="text-danger">HMS?</span>
        </h1>
        <div className="col-md-6 col-sm-12  text-center  ">
          <img src={infoimg} alt="What is HMS " />
        </div>
        <div className="col-md-6 col-sm-12 text-sm-light ">
          <p className="lh-lg h5">
            HMS (Hospital Management System) Helps Manage Hospitals/ CLinics
            & other Health Providers. It aids in completing the medical help
            process health providers can manage doctors & patient records,
            accounts keeping, inventories, pharmacies records, laboratory,
            reports and medical staff management.{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyHMS