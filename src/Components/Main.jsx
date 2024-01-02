import TabImg from "../assets/Images/laptop_img.png";
import infoimg from "../assets/Images/hms_artwork.png";
import SecurityIMg from "../assets/Images/security_ic.png";
import InvationIMg from "../assets/Images/innovation_ic.png";
import AccuracyImg from "../assets/Images/accuracy_ic.png";
import QualityIMg from "../assets/Images/quality_control_ic.png";
import TransparencyIMg from "../assets/Images/transparency_ic.png";
import CostImg from "../assets/Images/cost_effective_ic.png";
import ReliableImg from "../assets/Images/easy_reliable_ic.png";
import MedicalRImg from "../assets/Images/erm_ic.png";
import docImg from "../assets/Images/doctors_ic.png";
import PatientImg from "../assets/Images/patients_ic.png";
import HospitalImg from "../assets/Images/hospitals_ic.png";
import CitiesIMg from "../assets/Images/cities_ic.png";
import formIMg from "../assets/Images/demo_artwork.png";
import AddValueImg from "../assets/Images/add_value_artwork.png";
import Review1 from "../assets/Images/ahmad_hassan_avatar.png";
import Review2 from "../assets/Images/ali_raza_avatar.png";
import Review3 from "../assets/Images/asma_avatar.png";
import Review4 from "../assets/Images/marshmallow_avatar.png";
import Review5 from "../assets/Images/jennifer_avatar.png";
import Footer from "./Footer";
import Contact from "./Contact";
import WhyHMS from "./WhyHMS";
import Features from "./Features";
import Counts from "./Counts";
import Package from "./Package";
import Pricing from "./Pricing";
import Reviews from "./Reviews";
import ValueHospital from "./ValueHospital";
import WeOffer from "./WeOffer";

const Main = () => {
  return (
    <>
      {/* Main front page start here  */}

      <section className="Main_section">
        <div className="container-fluid ">
          <div className="container ">
            <div className="row">
              <div className="col-md-4 col-sm-12   m-2">
                <div className="my-5 py-5  ">
                  <h1 className="text-white  display-6 fw-bold">
                    Optimize Healthcare
                    <br /> Operations with us
                  </h1>

                  <h3 className=" lh-base  text-light  d-none d-md-block  my-5 lead">
                    A world-class software that is intuitive, verstile,
                    <br /> secure and efficient enough to empower your
                    hospital's services digitally{" "}
                  </h3>
                  <form className="form-inline    my-lg-0">
                    <button
                      className="btn btn-outline-light  Button-radius  px-4  my-sm-0"
                      type="submit"
                      href="#contact"
                    >
                      Request Demo
                    </button>
                    <button
                      className="btn btn-success mx-3 px-5     Button-radius  m-2 my-sm-0 text-white"
                      type="submit"
                    >
                      Buy Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-12  m-5 p-5  d-none d-md-block">
                <img src={TabImg} alt="Tablet-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyHMS />
      <WeOffer />
      <ValueHospital />
      <Counts />
      <Features />
      <Pricing />
      <Package />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
