
import PropTypes from 'prop-types';

const Card = ({ url, imageSrc, altText }) => {
  return (
    <div className='card'>
      <a href={url}>
        <img src={imageSrc} className="card-img-top" alt={altText} />
      </a>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired, // Add prop type validation for imageSrc
  altText: PropTypes.string.isRequired, // Add prop type validation for altText
};

export default Card;
