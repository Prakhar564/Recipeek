import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Hello! This is Recipeek</h1>
        <p>
          {/* <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a> */}
        </p>
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        <div className="col-md-4">
          <h2>About Us</h2>
          <p>
            We are Recipeek, a startup with a team of five.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Our mission</h2>
          <p>
            Our mission to employ conputer vision and machine learning to reduce waste, as well as provide easy guidence for delicious recipes for users all over the world to follow.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Demo</h2>
          <p>
            The demo for our product
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View Demo »
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Company 2017-2018</p>
  </footer>
</>

    </div>
  )
}

export default Homepage