import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import parallaxImage from './images/main1.jpeg';
import Slogan from './Slogan';
import Header from './Header';
import logo from './images/peacheslogo.png'; // Import your logo

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh; // Default height for larger screens
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    height: 100vh; // Smaller height for mobile screens
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px; // Adjust as needed
    background: linear-gradient(transparent, #FACCB5); // Replace #backgroundColor with your background color
  }
`;
//#D56F52
//#FACCB5
//#4E7A51


const ParallaxImage = () => {


    return (
        <Parallax bgImage={parallaxImage} strength={100}>
            
            <ParallaxContainer>

            <Slogan />
        
            </ParallaxContainer>
        </Parallax>
    );
};

export default ParallaxImage;