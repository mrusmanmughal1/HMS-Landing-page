import React from 'react'

const Package = () => {
  return (
    <>
    <section className="Package_Include bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 ">
              <div className="container m-5 ">
                <ul className="Ul-success    h4 lh-lg ">
                  <li>HMS Software</li>
                  <li>
                    Free Website That can be customize by admin <br />
                    (visual & Text Content)
                  </li>
                  <li> Mobile Application </li>
                  <li>Free Scurity & Updates </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 bg-includes py-5  ">
              <h1 className="text-white fw-bold  text-center py-5 display-4  ">
                Package <br /> Includes
              </h1>
            </div>
          </div>
        </div>
     
      </section>
         <section className="link-Buttons text-center">
         <div className="container my-5">
           <button
             type="button"
             className="btn Button-radius  btn-outline-success btn-lg"
             href="#contact"
           >
             Request a Demo
           </button>
           <button
             type="button"
             className="btn Button-radius  mx-3 btn-lg px-5 btn-primary"
           >
             Buy Now
           </button>
         </div>
       </section>
       </>
  )
}

export default Package