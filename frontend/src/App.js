import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Smart Bin</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-dark text-white text-center p-5">
        <div className="container">
          <h1>Welcome to Smart Bin</h1>
          <p className="lead">The future of waste management is here.</p>
          <a href="#" className="btn btn-primary btn-lg">Request a Pickup</a>
        </div>
      </header>

      <section className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Schedule Pickups</h5>
                <p className="card-text">Easily schedule waste pickups at your convenience. Choose from different waste types and set up recurring schedules.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Real-Time Tracking</h5>
                <p className="card-text">Track your pickup in real-time and get notified when your waste is collected.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Eco-Friendly</h5>
                <p className="card-text">We are committed to recycling and reducing landfill waste. Track your environmental impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-light text-center p-3 mt-5">
        <div className="container">
          <p>&copy; 2025 Smart Bin. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;