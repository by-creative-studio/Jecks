import React from 'react'; 
import { Link } from 'react-router-dom';
import './App.scss'; // Assuming this contains global styles
import jecksJourneyImage from './Image/hpmainimagefinal.png'; // Your main image
import startDesignButtonImage from './Image/start your design button.png'; // Start Your Design button

const Homepage = () => {
  return (
    <div style={homepageStyle}>
      {/* Main Jecks Image */}
      <div style={imageWrapperStyle}>
        <img src={jecksJourneyImage} alt="Jecks Journey" style={mainImageStyle} />

        {/* Button for Start Your Design placed on the main image */}
        <Link to="/design" style={buttonLinkStyle}>
          <img src={startDesignButtonImage} alt="Start Your Design" style={buttonImageStyle} />
        </Link>
      </div>
    </div>
  );
};

/* Inline Styles */
const homepageStyle = {
  backgroundColor: '#FFA26D', // Background color as per the image
  height: '932px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arial, sans-serif',
};

const imageWrapperStyle = {
  position: 'relative', // To allow the button to be absolutely positioned
  width: '430px',
  height: '932px',
};

const mainImageStyle = {
  width: '430px', 
  height: '932px', 
  objectFit: 'cover', // Ensures the image fits within the container properly
};

const buttonLinkStyle = {
  position: 'absolute',
  top: '-45px', // Adjusted position to place the button lower on the image
  left: '0px', // Center the button horizontally on the image
  zIndex: '10', // Ensures the button is above the image layer
};

const buttonImageStyle = {
  width: '430px', // Smaller button size
  height: '923px', // Proportional button height
  cursor: 'pointer',
  objectFit: 'contain', // Ensures the button image doesn't stretch
};

export default Homepage;
