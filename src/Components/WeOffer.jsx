 
import SecurityIMg from "../assets/Images/security_ic.png";
import InvationIMg from "../assets/Images/innovation_ic.png";
import AccuracyImg from "../assets/Images/accuracy_ic.png";
import QualityIMg from "../assets/Images/quality_control_ic.png";
import TransparencyIMg from "../assets/Images/transparency_ic.png";
import CostImg from "../assets/Images/cost_effective_ic.png";
import ReliableImg from "../assets/Images/easy_reliable_ic.png";
import MedicalRImg from "../assets/Images/erm_ic.png";
 

const WeOffer = () => {
  return (
    <section id="Offer" className="Offer_HMS  bg-info">
    <div className="container ">
      <div className="row py-5 ">
        <h1 className="text-success   fw-bold  text-center m-4 ">
          What We <span className="text-danger">Offer?</span>
        </h1>
        <h5 className="text-center  text-white lh-base">
          HMS enables management to handle all hospital procedures in one
          place. <br /> here are some fundamental benefits of HMS
        </h5>
      </div>
    </div>

    <div className="container">
      <div className="row  pb-5 row-cols-1 row-cols-lg-4 row-cols-sm-12 g-2 g-lg-3">
        <div className="col">
          <div className="bg-white  text-center corner-radius   p-5 ">
            <img src={SecurityIMg} alt="Security  " />
            <p className="h5 my-3">Security</p>
          </div>
        </div>
        <div className="col">
          <div className="bg-white  corner-radius text-center  p-5 ">
            <img src={InvationIMg} alt="Innovation  " />
            <p className="h5 m-3">Innovations</p>
          </div>
        </div>
        <div className="col">
          <div className=" bg-white corner-radius  text-center  p-5">
            <img src={AccuracyImg} alt="Accuracy  " />
            <p className="h5 m-3">Accuracy</p>
          </div>
        </div>
        <div className="col">
          <div className=" bg-white  corner-radius text-center  p-5">
            <img src={QualityIMg} alt="Quality Control  " />
            <p className="h5 m-3">Quality Control</p>
          </div>
        </div>
        <div className="col">
          <div className=" bg-white corner-radius  text-center  p-5">
            <img src={CostImg} alt="Cost Effective  " />
            <p className="h5 m-3">Cost Effective </p>
          </div>
        </div>
        <div className="col">
          <div className=" bg-white  corner-radius text-center  p-5">
            <img src={TransparencyIMg} alt="Transparency   " />
            <p className="h5 my-3">Transparency</p>
          </div>
        </div>
        <div className="col">
          <div className=" bg-white  corner-radius text-center  p-5">
            <img src={ReliableImg} alt="Easy adn Reliable   " />
            <p className="h5 m-3">Easy & Reliable</p>
          </div>
        </div>
        <div className="col  ">
          <div className=" bg-white  corner-radius text-center mb-5 pb-4  p-5">
            <img src={MedicalRImg} alt="Electronic Medical Record  " />
            <p className="h5  m-3">Electronic Medical record(ERM)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WeOffer