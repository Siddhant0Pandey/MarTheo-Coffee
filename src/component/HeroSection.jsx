// import { girlcoffeeimg } from "../assets/girlcoffee.png";
import { allcoffeeimg } from "../ImageContainer";

function HeroSection() {
  return (
    <div className="hero-section mt-[6vh] flex flex-col ">
      <div className="hero-info flex flex-col items-center gap-4">
        <div className="hero-navlink flex gap-4">
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
        <div className="hero-info-text flex flex-col items-center gap-2 text-secondary">
          <h1 className="font-grape text-6xl">Personal Checking</h1>
          <hr className="w-[50%]" />
          <p>Get an account suited to you.</p>
        </div>
      </div>
      <div className="hero-image w-full mt-6 h-[500px] object-fill">
        <img src={allcoffeeimg} alt="Coffee Cup" className="w-full h-full" />
      </div>
    </div>
  );
}

export default HeroSection;
