import "../styles/Card.css";
import img from "../../public/assets/sydney.png";
import { FaLocationDot } from "react-icons/fa6";

const Card = () => {
  return (
    <article className="card">
      <img src={img} alt="" className="card-image" />
      <div className="card-info">
        <div className="location-data">
          <FaLocationDot className="location-icon" />
          <span className="location-name">Sydney</span>
          <a href="" className="location-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="card-name">Sydney Opera House</h2>
        <p className="card-date">27 May, 2021 - 8 Jun, 2021</p>
        <p className="card-description">
          The Sydney Opera House is a multi-venue performing arts centre in
          Sydney. Located on the banks of the Sydney Harbour, it is often
          regarded as one of the 20th century s most famous and distinctive
          buildings
        </p>
      </div>
    </article>
  );
};

export default Card;
