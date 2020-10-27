import React, { Component } from "react";
import Products from "./Products";


class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <main role="main">
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Katalog Product</h1>
              <p className="lead text-muted">Ini hanya testing</p>
              {/* <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p> */}
            </div>
          </section>

          <Products/>
          
        </main>

        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="#">Back to top</a>
            </p>
            {/* <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p> */}
          </div>
        </footer>
      </>
    );
  }
}

export default Home;
