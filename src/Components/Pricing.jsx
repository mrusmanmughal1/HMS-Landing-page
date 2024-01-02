import React from 'react'

const Pricing = () => {
  return (
    <section id="pricing" className="Pricing">
    <div className="container">
      <div className="row text-center m-5">
        <h1 className="text-success fw-bold   ">
          Simple, Tansparent <span className="text-danger"> Pricing</span>
        </h1>
        <p className="lead text-secondary  my-2">
          Pricing Plans that suit your needs
        </p>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12 my-4">
            <div className="card border corner-radius  border-danger">
              <div className="card-body">
                <h3 className="card-title">Individual</h3>
                <p className="card-text h1 my-5 text-danger fw-bold ">
                  $49<span className="h3">/mo</span>
                </p>

                <ul className="Ul-danger ps-5 text-start">
                  <li>lorem Ibsom</li>
                  <li>lorem Ibsom</li>
                  <li>lorem Ibsom</li>
                </ul>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-danger Button-radius py-3  text-white  w-75  btn-block"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12  ">
            <div className="card border-1  corner-radius  border-success">
              <div className="card-body">
                <h3 className="card-title h3  ">Standard</h3>
                <p className="card-text h1  fw-bold  my-5 text-success">
                  $99<span className="h3">/mo</span>
                </p>
                <ul className="Ul-success ps-5 text-start">
                  <li>lorem Ibsom</li>
                  <li>lorem Ibsom</li>
                  <li>lorem Ibsom</li>
                  <li>lorem Ibsom</li>
                  <li>lorem Ibsom</li>
                </ul>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-success w-75 Button-radius py-3 text-white  btn-block"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4  col-sm-12 my-4">
            <div className="card border corner-radius  border-primary">
              <div className="card-body">
                <h3 className="card-tit le">Enterprise</h3>
                <p className="card-text h1 fw-bold my-5 text-primary">
                  $199<span className="h3">/mo</span>
                </p>
                <div className="text-start">
                  <ul className="Ul-primary ps-5">
                    <li>lorem Ibsom</li>
                    <li>lorem Ibsom</li>
                    <li>lorem Ibsom</li>
                  </ul>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <button
                  type="button"
                  className="btn btn-primary  w-75  text-white  Button-radius   py-3   btn-block"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pricing