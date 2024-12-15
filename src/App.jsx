import "./App.css";
import vintageCharmBids from "/src/assets/vintagecharmbids.jpg";
import feanor from "/src/assets/feanor.jpg";
import holidaze from "/src/assets/holidaze.jpg";

function App() {
  return (
    <>
      <header className="py-4 p-3 text-white">
        <h1 className="display-4 text-uppercase fs-2">Portfolio 2024 - Taran Johannessen</h1>
        <hr className="mx-auto" />
      </header>
      <main className="container py-5 p-0">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card">
              <a href="https://vintagecharmbids.netlify.app/">
                <img src={vintageCharmBids} className="card-img-top" alt="Vintage Charm Bids website" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Vintage Charm Bids</h5>
                <p className="card-text">
                  Vintage Charm Bids is a platform for discovering vintage treasures and unique collectibles. Users can participate in the bidding
                  process to find distinctive pieces.
                </p>
                <div className="d-flex flex-column gap-1">
                  <a href="https://github.com/TaranJ/semester-project-2" className="">
                    GitHub repository
                  </a>
                  <a href="https://vintagecharmbids.netlify.app/">Visit site</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <a href="https://feanor.netlify.app/">
                <img src={feanor} className="card-img-top" alt="Fëanor website" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Fëanor</h5>
                <p className="card-text">
                  Fëanor is an eCommerce store that features a product catalog with a look-ahead search, individual product pages, a checkout system,
                  and a contact page.
                </p>
                <div className="d-flex flex-column gap-1">
                  <a href="https://github.com/TaranJ/js-frameworks">GitHub repository</a>
                  <a href="https://feanor.netlify.app/">Visit site</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <a href="https://warm-pie-90b89c.netlify.app/">
                <img src={holidaze} className="card-img-top" alt="Holidaze website" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Holidaze</h5>
                <p className="card-text">
                  Holidaze is a booking platform that allows users to explore and book venues, manage their bookings, and, for venue managers, create
                  and oversee venues and reservations.
                </p>
                <div className="d-flex flex-column gap-1">
                  <a href="https://github.com/TaranJ/project-exam-2">GitHub repository</a>
                  <a href="https://warm-pie-90b89c.netlify.app/">Visit site</a>
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
