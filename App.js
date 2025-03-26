import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  return (
    
    <div>
      {/* First Row: Logo and Website Name */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img 
              src="https://media.istockphoto.com/id/1486069918/vector/ripped-paper-ticket-for-a-movie-pass-or-a-show-at-the-cinema.jpg?s=612x612&w=0&k=20&c=eNIMUld-ma6DuNok7wTjl8BkpLo9hY4BYjRW7H9Mk64=" 
              alt="Logo" 
              width="40" 
              height="40" 
              className="me-2"
            />
            <span className="fw-bold fs-4">BOOK-MY-SHOW 2.0</span>
          </a>
        </div>
      </nav>

      {/* Second Row: Navigation Links (Left), Search Bar & Profile (Right) */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          
          {/* Navigation Links (Left) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link active" href="#">Movie</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Plays</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Sport</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Events</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Offers</a></li>
                  <li><a className="dropdown-item" href="#">Gift cards</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Help and Support</a></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Search Bar & User Profile (Right) */}
          <div className="d-flex align-items-center">
            <form className="d-flex me-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            {/* User Profile */}
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                  alt="User" 
                  width="35" 
                  height="35" 
                  className="rounded-circle"
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
          </div>

        </div>
      </nav>

      {/* Carousel - Takes 50% of the screen height */}
      <div>
      {/* First Carousel */}
      <h3 className="text-center mt-4">OFFERS</h3>
      <div id="carouselExampleCaptions1" className="carousel slide" style={{ height: "50vh" }}>
        <div className="carousel-inner" style={{ height: "100%" }}>

        <div className="carousel-item" style={{ height: "100%" }}>
            <img 
              src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571888087/movie-ticket-offers.jpg" 
              className="d-block w-100" 
              alt="Second slide" 
              style={{ height: "100%", width: "100%", objectFit: "cover" }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>IN HOUSE SNACK</h5>
              <p>SAT-SUN</p>
            </div>
          </div>

        <div className="carousel-item active" style={{ height: "100%" }}>
            <img 
              src="https://in.bmscdn.com/offers/tncbanner/icici-bank-complimentary-offer-iciccom520.jpg?30072024153523" 
              className="d-block w-100" 
              alt="First slide" 
              style={{ height: "100%", width: "100%", objectFit: "cover" }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>OFFER</h5>
              <p>VALID TILL 10 APRIL</p>
            </div>
          </div>
        <div className="carousel-item active" style={{ height: "100%" }}>
            <img 
              src="https://in.bmscdn.com/offers/tncbanner/axis-select-credit-card-offer-axsscc0420.jpg?23022024125527" 
              className="d-block w-100" 
              alt="First slide" 
              style={{ height: "100%", width: "100%", objectFit: "cover" }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>AXIX BANK CARD OFFER</h5>
              <p>VALID TILL 30 MARCH.</p>
            </div>
          </div>

          

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Second Carousel */}

      <h4 className="text-center mt-4">COMING SOON!!!</h4>
      <div id="carouselExampleCaptions2" className="carousel slide mt-3" style={{ height: "50vh" }}>
        <div className="carousel-inner" style={{ height: "100%" }}>
          
          <div className="carousel-item active" style={{ height: "100%" }}>
            <img 
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A457A9A75AFE7DE251B7C259B6115DE7374ACDB4FAC21933DEAE68DA49DEA318/scale?width=1200&aspectRatio=1.78&format=webp" 
              className="d-block w-100" 
              alt="Third slide" 
              style={{ height: "100%", width: "100%", objectFit: "cover" }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>INSIDE OUT</h5>
              <p>COMMING SOON</p>
            </div>
          </div>

          <div className="carousel-item" style={{ height: "100%" }}>
            <img 
              src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg" 
              className="d-block w-100" 
              alt="Fourth slide" 
              style={{ height: "100%", width: "100%", objectFit: "cover" }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>MUSICAL FESTIVAL</h5>
              <p>COMING SOON</p>
            </div>
          </div>

          <div className="carousel-item" style={{ height: "100%" }}>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/56e0f44160b5e96aec2019f3/1466072899363-ON7ALF1MOSA3GVBB0NB7/inception+movie+poster+-+from+breaknenter.org" 
              className="d-block w-100" 
              alt="Fourth slide" 
              style={{ height: "100%", width: "100%", objectFit: "cover" }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>INCEPTION</h5>
              <p>COMING SOON</p>
            </div>
          </div>
          

          <div className="carousel-item" style={{ height: "100%" }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnVnJ_eWXZ71JoJx5JbP4bAtq8ig9tkSQdg&s" 
              className="d-block w-100" 
              alt="Fourth slide" 
              style={{ height: "100%", width: "100%", objectFit: "cover" }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>PLAY</h5>
              <p>COMING SOON</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img 
              src="https://www.shutterstock.com/image-vector/illustration-batsman-player-playing-cricket-600nw-2150220499.jpg" 
              className="d-block w-100" 
              alt="Fourth slide" 
              style={{ height: "100%", width: "100%", objectFit: "cover" }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>BRAZIL - INDIA</h5>
              <p>3PM -7PM</p>
            </div>
          </div>
        </div>
        

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
    {/* Movie Listings Page */}
    <div className="container mt-5">
        <h2 className="text-center mb-4">Now Showing</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Ratings</th>
              <th>Ticket Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avengers: Endgame</td>
              <td>Action, Sci-Fi</td>
              <td>feb 26, 2025</td>
              <td>8.4/10</td>
              <td>rs 110</td>
            </tr>
            <tr>
              <td>Bhool Buliya</td>
              <td>Thriller, Comedy</td>
              <td>feb 16, 2025</td>
              <td>8.8/10</td>
              <td>rs 120</td>
            </tr>
            <tr>
              <td>Cattputlli</td>
              <td>Triller,Horror</td>
              <td>Jan 18, 2025</td>
              <td>9.0/10</td>
              <td>rs 150</td>
            </tr>
            <tr>
              <td>Barbarian</td>
              <td>Triller,Horror</td>
              <td>Jan 25, 2025</td>
              <td>9.0/10</td>
              <td>rs 250</td>
            </tr>
            <tr>
              <td>Interstellar</td>
              <td>Sci-fic</td>
              <td>feb 25, 2025</td>
              <td>9.0/10</td>
              <td>rs 100</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* Movie Cards for ungoing and cooming with Buttons */}

      <h2 className="text-center mb-7">------HINDI------</h2>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.justwatch.com/poster/299445065/s718/cuttputlli.jpg"
                className="card-img-top"
                alt="Cattputlli"
              />
              <div className="card-body">
                <h5 className="card-title">Cattputlli</h5>
                <p5 className="card-desp">In Kasauli, a serial killer dares to taunt the police force as corpses of </p5>
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary ms-2">Watch Trailer</button>
                {/*<button className="btn btn-danger ms-2" disabled>Coming Soon</button>*/}
              </div>
            </div>
          </div>   
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDIlPZyzaH0m5Gsd6R9WDeXEIdg7a8CT6RQ&s"
                className="card-img-top"
                alt="Avengers Endgame"
              />
              <div className="card-body">
                <h5 className="card-title">Bhool Buliya</h5>
                <p5 className="card-desp">An NRI and his wife decide to stay in his ancestral home, paying no......</p5>
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary ms-2">Watch Trailer</button>
               {/* <button className="btn btn-danger ms-2" disabled>Coming Soon</button>*/}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/b/b1/The_Body_film_poster.jpg"
                className="card-img-top"
                alt="Avengers Endgame"
              />
              <div className="card-body">
                <h5 className="card-title">The Body</h5>
                <p5 className="card-desp">A police inspector is tasked with investigating the disappear...</p5>
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary ms-2">Watch Trailer</button>
               {/* <button className="btn btn-danger ms-2" disabled>Coming Soon</button> */}
              </div>
            </div>
          </div>  

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXa-N-LOJoxi0uP1ivOy1L9EMoZynrDXrjpA&s"
                className="card-img-top"
                alt="Avengers Endgame"
              />
              <div className="card-body">
                <h5 className="card-title">Silence - You Can Hear it</h5>
                <p5 className="card-desp">ACP Avinash Verma, a narcotics officer, is asked to join a special team investigating a the police force the police force as corpses </p5>
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary ms-2">Watch Trailer</button>
                {/*<button className="btn btn-danger ms-2" disabled>Coming Soon</button>*/}
              </div>
            </div>
          </div>

          <h2 className="text-center mb-7">------ENGLISH------</h2>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
                className="card-img-top"
                alt="Avengers Endgame"
              />
              <div className="card-body">
                <h5 className="card-title">Avengers: Endgame</h5>
                <p5 className="card-desp">After Thanos, an intergalactic warlord, disintegrates half of the ......</p5>
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary ms-2">Watch Trailer</button>
                {/*<button className="btn btn-danger ms-2" disabled>Coming Soon</button>*/}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8NCZByGoKBZWC6DPqbtYvwLRn0kbQ16RqQ&s"
                className="card-img-top"
                alt="Barbarian"
              />
              <div className="card-body">
                <h5 className="card-title">Barbarian</h5>
                <p5 className="card-desp">A young woman discovers the rental home she booked is ....</p5>
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary ms-2">Watch Trailer</button>
                {/*<button className="btn btn-danger ms-2" disabled>Coming Soon</button>*/}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg"
                className="card-img-top"
                alt="Barbarian"
              />
              <div className="card-body">
                <h5 className="card-title">Intestellar</h5>
                <p5 className="card-desp">When Earth becomes uninhabitable in the future, a farmer and...............</p5>
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary ms-2">Watch Trailer</button>
                {/*<button className="btn btn-danger ms-2" disabled>Coming Soon</button>*/}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.justwatch.com/poster/302318037/s166/the-menu"
                className="card-img-top"
                alt="Barbarian"
              />
              <div className="card-body">
                <h5 className="card-title">The Meneu</h5>
                <p5 className="card-desp">Shocking surprises await a couple when they travel to a.................</p5>
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary ms-2">Watch Trailer</button>
                {/*<button className="btn btn-danger ms-2" disabled>Coming Soon</button>*/}
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center mb-7">------COMMING SOON------</h2>


          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Toy_Story_5_logo.jpg/1200px-Toy_Story_5_logo.jpg"
                className="card-img-top"
                alt="Toy Story 5"
              />
              <div className="card-body">
                <h5 className="card-title">Toy Story 5</h5>
                <p5 className="card-desp">oy Story 5 is an upcoming American animated comedy film produced.................</p5>
                {/*<button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary ms-2">Watch Trailer</button>*/}
                <button className="btn btn-danger ms-2" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
 
      </div>

    </div>
    
  );
}
