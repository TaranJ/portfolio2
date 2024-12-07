import "./App.css";

function App() {
  return (
    <>
      <body>
        <header>
          <h1>Portfolio 2024 - Taran Johannessen</h1>
          <hr />
        </header>
        <main>
          <div class="card">
            <a href="https://vintagecharmbids.netlify.app/">
              <img src="" alt="Vintage Charm Bids website" />
            </a>
            <div class="description">
              <h2>Vintage Charm Bids</h2>
              <p>Vintage Charm Bids</p>
              <div class="links">
                <a href="https://github.com/TaranJ/semester-project-2">GitHub repository</a>
                <a href="https://vintagecharmbids.netlify.app/">Go to site</a>
              </div>
            </div>
          </div>
          <div class="card">
            <a href="https://feanor.netlify.app/">
              <img src="" alt="Fëanor website" />
            </a>
            <div class="description">
              <h2>Fëanor</h2>
              <p>Fëanor</p>
              <div class="links">
                <a href="https://github.com/TaranJ/js-frameworks" class="github">
                  GitHub repository
                </a>
                <a href="https://feanor.netlify.app/">Go to site</a>
              </div>
            </div>
          </div>
          <div class="card card-3">
            <a href="https://warm-pie-90b89c.netlify.app/">
              <img src="" alt="Holidaze website" />
            </a>
            <div class="description">
              <h2>Holidaze</h2>
              <p>Holidaze</p>
              <div class="links">
                <a href="https://github.com/TaranJ/project-exam-2" class="github">
                  GitHub repository
                </a>
                <a href="https://warm-pie-90b89c.netlify.app/">Go to site</a>
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </body>
    </>
  );
}

export default App;
