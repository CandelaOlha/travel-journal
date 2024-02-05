import "../styles/Card.css";
import { FaLocationDot } from "react-icons/fa6";
import PropTypes from "prop-types";

const Card = ({ item }) => {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = item;

  return (
    <article className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt="" className="card-image" />
      </div>
      <div className="card-info">
        <div className="location-data">
          <FaLocationDot className="location-icon" />
          <span className="location-name">{location}</span>
          <a href={googleMapsUrl} className="location-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="card-name">{title}</h2>
        <p className="card-date">
          {startDate} - {endDate}
        </p>
        <p className="card-description">{description}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
