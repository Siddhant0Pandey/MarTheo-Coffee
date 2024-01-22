function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-info">
        <div className="hero-navlink">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Personal Checking</a>
          </li>
        </div>
        <div className="hero-info-text">
          <h1>Personal Checking</h1>
          <hr />
          <p>Get an account suited to you.</p>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://img.freepik.com/free-photo/cup-coffee-table-front-street-with-city-lights-background_188544-10293.jpg"
          alt="Coffee Cup"
        />
      </div>
    </div>
  );
}

export default HeroSection;
