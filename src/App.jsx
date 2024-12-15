import "./App.css";

function App() {
  return (
    <>
      <header className="py-4 text-white">
        <h1 className="display-4 text-uppercase fs-2">Portfolio 2024 - Taran Johannessen</h1>
        <hr className="mx-auto" />
      </header>
      <main className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card">
              <a href="https://vintagecharmbids.netlify.app/">
                <img src="src/assets/vintagecharmbids.jpg" className="card-img-top" alt="Vintage Charm Bids website" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Vintage Charm Bids</h5>
                <p className="card-text">Vintage Charm Bids</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/TaranJ/semester-project-2" className="btn btn-outline-primary btn-sm">
                    GitHub
                  </a>
                  <a href="https://vintagecharmbids.netlify.app/" className="btn btn-primary btn-sm">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <a href="https://feanor.netlify.app/">
                <img src="src/assets/feanor.jpg" className="card-img-top" alt="Fëanor website" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Fëanor</h5>
                <p className="card-text">Fëanor</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/TaranJ/js-frameworks" className="btn btn-outline-primary btn-sm">
                    GitHub
                  </a>
                  <a href="https://feanor.netlify.app/" className="btn btn-primary btn-sm">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <a href="https://warm-pie-90b89c.netlify.app/">
                <img src="src/assets/holidaze.jpg" className="card-img-top" alt="Holidaze website" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Holidaze</h5>
                <p className="card-text">Holidaze</p>
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/TaranJ/project-exam-2" className="btn btn-outline-primary btn-sm">
                    GitHub
                  </a>
                  <a href="https://warm-pie-90b89c.netlify.app/" className="btn btn-primary btn-sm">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
