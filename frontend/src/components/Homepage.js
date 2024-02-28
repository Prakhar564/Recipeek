import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Recipeek!</h1>
        <p>
        With recipes for quick weeknight meals, impressive dishes for gatherings, and comforting classics, ReciPeek has something to satisfy every craving and occasion. Our recipes feature fresh ingredients, global flavors, and clever twists on old favorites. Step up your home cooking with recipes tested and perfected by our team of passionate food editors. With stunning photography and easy-to-follow instructions, ReciPeek gives you the tools to cook tasty meals with confidence. So skip the takeout, put on your apron, and let ReciPeek guide you into the wonderful world of cooking from the comfort of your own kitchen.
        </p>
        <p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            About Us »
          </a>
        </p>
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        <div className="col-md-4">
          <h2>Today's Top Recipes</h2>
          <p>
          Get the full instructions and ingredient list for these chocolate chip sea salt cookies now!{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Simplifying Cooking</h2>
          <p>
          Cooking delicious meals doesn't have to be complicated with the right recipes and a dash of inspiration. That's why our new digital recipe book takes the stress out of planning and cooking homemade meals. Browse over 100 recipes conveniently organized by meal type with beautiful photos, simple instructions, and home cook-approved tips.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Kitchen Hacks for Lazy Cooks</h2>
          <p>
          Listen, I get it - who actually wants to spend hours slaving away in the kitchen these days? Especially when you could order takeout or grab something quick on a busy weeknight. But homemade meals are so rewarding (and delicious!) when you use the right kitchen hacks. 
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Company 2024-2025</p>
  </footer>
</>

    </div>
  )
}

export default Homepage